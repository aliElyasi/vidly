import React, { Component } from 'react'
import  joi from "joi-browser"
import Input from './input';

class Form extends Component {
    state = {data:{},errors:{}  }

    validate =()=>{
        const {data} =this.state;
  let errors={};
  
        var result= joi.validate(data,this.schema,{abortEarly:false});
     if(result.error===null) return null;
        for(let item of result.error.details)
        {
            console.log(item);
            errors[item.path[0]]=item.message;
        }
        return errors;
     
        }
        propertyVlidator=input=>{
          debugger;
       let schema ={[input.name]:this.schema[input.name]};
     let  obj={[input.name]:input.value};
    console.log(joi.validate(obj,schema))
       var {error}=   joi.validate(obj,schema);
        if(error) return error.details[0].message;
  
      
          
      }
  

      
    handelSubmit =e=>{

        e.preventDefault();
        let  errors=   this.validate(); 
     
       this.setState({errors:errors ||{}});
    
       if(errors) return
    
       this.doSubmit();
          }
    
          
      
          handelChang =({currentTarget:input})=>{
            let {errors} =this.state;
              const data={...this.state.data}
              var errorMessage= this.propertyVlidator(input);
              if(errorMessage) errors[input.name]=errorMessage;
              else { delete errors[input.name]}
                 
              
               data[input.name]=input.value;
              this.setState({data,errors:errors||{}});
         
            }
            renderInput=(label,name,type="text")=>{
                let {data,errors}=this.state;

            return(    
            <Input 
                error={errors[name]}
                 value={data[name]}
                  onChange={this.handelChang} 
                  name={name} 
                 type={type}
                  label={label} />
            )

            }
            renderButton= (label)=>{
                return(
                <div className="form-group">
                <button className="btn btn-success" disabled={this.validate()}>
                    Login
                    </button></div>
                );
            }
}
 
export default Form;