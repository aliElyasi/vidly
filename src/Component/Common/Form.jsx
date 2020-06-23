import React, { Component } from 'react'
import joi, { validate } from "joi-browser"
import { result } from 'lodash';
import Input from './input';
class Form extends Component {
    state = {data:{},errors:{}  }
    onSubmit=e=>{
        e.preventDefault();
        
        let errors= this.validate();
       {this.setState({errors:errors||{}})}
       if(!errors)this.doSubmit();

    }
   
  

  onChange=e=>{
    let{ errors,data}=this.state  
    let input=e.currentTarget;
      
    data[input.name]=input.value
    let result= this.validateProperty(input)
     if(result===null) delete  errors[input.name]
     else{
        errors[input.name]=result;
     }
    
     this.setState({errors,data})
  }
 
  validateProperty=input=>{
  let schema ={[input.name] :this.schema[input.name]};
  let obj={[input.name]:input.value}
  let {error}=joi.validate(obj,schema);
  console.log(error);
  if(error!==null){ return error.details[0].message}
  else return null;

}
    validate=()=>{
    let {data}=this.state;
    
    let {error}=joi.validate(data,this.schema,{abortEarly :false});
  let  errors={};

  if (error===null) return null;
    for(let item of error.details) { errors[item.path]=item.message}
      

    
    return errors;
    }
    renderInput=(label,name,type)=>{
        
        const {errors,data}=this.state;
        return(
        <Input label={label} name={name} error={errors[name]} type={type} onChange={this.onChange} value={data[name]
        
        }   />
        )

    }
    renderButton=(label)=>{
        return(
        <div className="form-group">
            <button className="btn btn-primary" disabled={this.validate()}>
                {label}
            </button>
        </div>
        );
    }
    renderSelectList=(label,name,items,value)=>
    {
        let{data}=this.state;
        return(
            <div className="form-group">

<label htmlFor={name}> 
{label}</label>


            <select name={name} id={name} className="form-control" onChange={this.onChange} value={data.genreId} >

                {(!data.genreId)? <option value="" >please select</option> :""}
           {items.map(item=><option key={item._id} value={item._id} >{item.name}</option>)}

            </select>
            </div>
        )
    }
}
 
export default Form;