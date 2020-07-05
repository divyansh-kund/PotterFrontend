import React from 'react';

class Signin extends React.Component{
    constructor() {
        super();//Required syntax for the constructor
        //Sets the state of the app which later helps in signin and registration
        this.state={
            signInEmail:'',
            signInPassword:'',
        }
    }
//When Email gets changed it changes the state(Email) to the input of the user
    onEmailChange= (event) =>{
        this.setState({signInEmail:event.target.value})
    }
//When Password gets changed it changes the state(Password) to the input of the user
    onPasswordChange= (event) =>{
        this.setState({signInPassword:event.target.value})
    }

//On submitting the form
    onSubmitSignIn = () => {
        //Fetches the backend server
        fetch('http://localhost:3000/signin', {
            method: 'post',//Fetch's method is default "get" so it turns that into post
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.signInEmail,//Sends a post request to the server
             //by specifying the the signINEmail as the value for email
                password: this.state.signInPassword
            })
        })
            .then(response=>response.json())
            .then(user=>{
                if(user.id){//This data was specified to be sent by the server if the request was successful 
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }else{
                    document.getElementById("Error").innerHTML="Password or username is incorrect"
                    document.getElementById("email-address").value=""
                    document.getElementById("password").value=""
                    //Password and email's input value is reset
                }
            });
    }

    render(){
        const {onRouteChange} = this.props
        const {onSubmitSignIn,onPasswordChange,onEmailChange} = this
        return(
            <div className="signin u-center-text mt6">
                <div className="pv4 measure center u-center-text ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address" required>Email</label>
                        <input 
                        onChange= {onEmailChange} 
                        className="pa2 input-reset signin_info ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password" required>Password</label>
                        <input
                            onChange= {onPasswordChange} 
                        className="b pa2 input-reset signin_info ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input
                    onClick = {onSubmitSignIn}
                    className="b ph3 pv2 input-reset signin_info ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit"
                    value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                    <p onClick = {()=>onRouteChange('register')} className="pointer f6 link dim black db">Register</p>
                    </div>
                    <h1 id="Error"></h1>
                </div>
            </div>
        );
    }
}

export default Signin