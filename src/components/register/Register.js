import React from 'react';

class Register extends React.Component{
    constructor() {
        super();
        this.state={
            email:'',
            password:'',
            name:''
        }
    }
    onEmailRegister= (event) =>{
        this.setState({email:event.target.value})
    }
//When Password gets changed it changes the state(Password) to the input of the user
    onPasswordRegister= (event) =>{
        this.setState({password:event.target.value})
    }

    onNameRegister= (event) =>{
        this.setState({name:event.target.value})
    }

    onSubmitSignIn = () => {
        this.props.onRouteChange('home');
    }

    render(){
        const {onPasswordRegister,onNameRegister,onEmailRegister,onSubmitSignIn}=this;
        return(
            <div className="u-center-text">
                <h1 className="f1 fw6 ph0 mh0 mt6">Register</h1>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name" required>Name</label>
                        <input
                        onChange = {onNameRegister} 
                        className="pa2 input-reset ba bg-transparent signin_info hover-bg-black hover-white w-100" 
                        type="name" 
                        name="name"  
                        id="name"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address" required>Email</label>
                        <input 
                        onChange = {onEmailRegister}
                        className="pa2 input-reset ba bg-transparent signin_info hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password" required>Password</label>
                        <input
                        onChange = {onPasswordRegister} 
                        className="b pa2 input-reset ba bg-transparent signin_info hover-bg-black hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password"/>
                        
                    </div>
                    <div className="">
                        <input
                        onClick = {onSubmitSignIn}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit"
                        value="Register"/>
                    </div>
            </div>
        );
    }
}

export default Register