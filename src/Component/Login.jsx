import React, { Component } from 'react';
import Input from './Common/input';
import joi from 'joi-browser';
import Form from './Common/Form'





class Login extends Form {

    state = { 
        data:{
            username:"",
            password:"",
        },
        errors:{}
     }
schema={
    username:joi.string().required().label("Username"),
    password:joi.string().required().label("Password")
}


      doSubmit=()=>{
        console.log("submit")
      }

    
    render() { 

      

        return ( 
            <form onSubmit={this.handelSubmit} >
               {this.renderInput("Username","username")}
               {this.renderInput("Password","password","password")}
               {this.renderButton("login")}  
  
        </form>
         );
    }
}
 

 
export default Login;