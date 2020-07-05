import React from 'react';
import './containers/index.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecog from './components/FaceRecog/FaceRecog';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Signin from './components/signin/Signin';
import Register from './components/register/Register';

const app =new Clarifai.App(
  {
    apiKey: '407fc2dd43e3465facfde5a0cfa8c69b'
  }
);

//Shows Particles in background
const Particle= {
  particles: {
    number:{
      value:120,
      density: {
        enable:true,
        value_area:1550
      }
    },
    move:{
      enable:true,
      speed:12,
    }
  }
}

const initialState={
  input: '',
  imageURL : '',
  route: 'signin',
  isSignedIn:false,
  user:{
    id:'',
    name:'',
    email:'',
    entries:0,
    joined: '',
  }
}

class Home extends React.Component {
  constructor(){
    super();
    //Defines state of the app
    this.state= initialState
  }

  loadUser = (data)=>{
    this.setState({user:
      {
        id:data.id,
        name:data.name,
        email:data.email,
        entries:data.entries,
        joined: data.joined,
      }
    })
  }

  //Takes the input i.e. the URL
  onInput = (event) =>{
    this.setState({input: event.target.value});
  }
  //On the button press(submit) display the image with the face recognition
  onSubmit = ()=>{

    fetch(this.state.input,{
      headers: {
        'Content-Type': 'application/binary',
        'Access-Control-Allow-Origin': '*',
      },
    }).then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
    });

    if (document.getElementById('ImageInput').value!=='') {
      document.getElementById('Face__info').innerHTML='';
      document.getElementById('ImageInput').value=""
        fetch('http://localhost:3000/image',{
          method: 'put',//Fetch's method is default "get" 
          //so it turns that into put
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            id: this.state.user.id
          })
       })
       .then(response=>response.json())
       .then(count=>{
         this.setState(Object.assign(this.state.user,{entries:count}))
       })
       //CLARIFAI IS NOT WORKING
      fetch(this.state.input)
        .then(() => {
            app.models.predict(
                Clarifai.FACE_DETECT_MODEL,
                this.state.input)
                .then(res=> console.log(res))
                .catch(err => console.error(err));
        })
        .catch((err) => {
            console.error(`Failure: ${err}`);
        });
    }
  }
  //CHANGES THE ROUTE THUS CHANGING THE STRUCTURE OF APP
  onRouteChange = (rote)=>{
    if (rote=== 'signout'){
      this.setState(initialState)
    }
    else if(rote === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route:rote})
  }
  render(){
    const{imageURL,isSignedIn,route} = this.state;
    const {onRouteChange,onInput,onSubmit,loadUser} = this;
    return (
      <div className="App">
        <Particles className="particles"
          params={Particle} />
        <Navigation  onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>
        {route === 'home'
        ?
        <div>
          <Logo />
          <Rank entries = {this.state.user.entries} name = {this.state.user.name}/>
          <ImageLinkForm onInput={onInput} onSubmit={onSubmit}/>
          <FaceRecog imageURL={imageURL}/>
        </div>
        : (
          route === 'signin'
          ?<Signin loadUser={loadUser} onRouteChange={onRouteChange}/>
          :<Register onRouteChange={onRouteChange} loadUser={loadUser}/>
        )
        }
      </div>
    );
  }
}
export default Home;
