import React, { Component } from 'react'
import { rest } from 'lodash';
const Input = ({label,name,error,...rest}) => {
    return ( 
         <div className="form-group">
        <label htmlFor="Username">{label}</label>
            <input {...rest} name={name}   id={name}   className="form-control"/>
            {error && <div className="alert alert-danger " style={{marginTop:5}}> {error} </div> }
        </div>
     
     
     

       


     );
}
 
export default Input;