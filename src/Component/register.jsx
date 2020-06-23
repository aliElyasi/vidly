import React, { Component } from 'react';
import joi from 'joi-browser';
import Form from './Common/Form';
class Register extends Form {
    state = { data:{},errors:{} }
    schema={
        username:joi.string().email({ minDomainAtoms: 2 }),
        password:joi.string().required().min(5),
        name:joi.string().required()

    };
    doSubmit=()=>{
        console.log("submit")
    }
    render() { 
        return (
            <form onSubmit={this.handelSubmit} >
 
           { this.renderInput("Username","username")}
           { this.renderInput("name","name")}
           { this.renderInput("Password","password","password")}
           {this.renderButton("submit")}
            </form>
         );
    }
}
 
export default Register;