import React, { Component } from 'react'
import Form from './Common/Form';
import joi from 'joi-browser'
class Login extends Form {
    state = { data:{
        username:"",
        password:""


    },errors:{} }
    schema={
        username:joi.string().required().label("Username"),
        password:joi.string().required().label("Password")
    }
    render() { 
        return ( 
<form onSubmit={this.onSubmit}>
    {this.renderInput("Username","username")}
    {this.renderInput("Password","password","password")}
    {this.renderButton("Login")}
   

</form>


         );
    }
}
 
export default Login;