import React, { useState } from "react";

const Form = props => {
    const [member, setMember]= useState({
        id: Date.now(),
        name: "",
        email: "",
        password:  "",
        terms: false

    })
    console.log(member)
    const changeHandler  = event => {
        let value = 
        event.target.type === "checkbox" ? event.target.checked: event.target.value;
        
        setMember({
          ...member,
          [event.target.name]: value
        });
      };
    
    return(
     <form onSubmit={event => {
        event.preventDefault();
        setMember({name:"",email:"",password:""})
        props.addnewMember(member)
      }} >
         <label htmlFor = "name"> Name: </label>
         <textarea name = "name" 
                placeholder = " Add Team Member Here" 
                value= {member.name}
                onChange= {changeHandler}
                    />
         <label htmlFor = "email"> Email: </label>
         <input name = "email"
                type = "email"
                placeholder = "Enter Email"
                value = {member.email}
                onChange= {changeHandler}

         />
         <label htmlFor ="password"> Password: </label>
         <input name = "password"
                type = "password"
                placeholder = "password"
                value= {member.password}
                onChange= {changeHandler}

         />
         <label htmlFor = "terms">  Terms & Conditions </label>
         <input
         id = "terms"
         name = "terms"
         type= "checkbox"
         checked = {member.terms}
         onChange ={changeHandler}
         />
         <button>Summit</button>
         
     </form>
    );


};

    
    export default Form;
    