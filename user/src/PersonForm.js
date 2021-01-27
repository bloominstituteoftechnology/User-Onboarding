import React from "react"
import { useState, useEffect } from "react"
import * as yup from "yup"
import axios from "axios"

function PersonForm(props) {
    const {values, submit, change, disabled, errors} = props


    const onSubmit = evt => {
        evt.preventDefault()
        submit()
        }
    

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse,)
        }
    
    return (
     <form className ="form-container" onSubmit={onSubmit}>
        <div>
          <h1>Avanced Form</h1>
            <label> Name
             <input
                type="text"
                name="name"
                onChange={onChange}
                value={values.name}
             ></input>
                </label>  
                
            <label> Email
             <input
                type="email"
                name="Email"
                onChange={onChange}
                value={values.email}
             ></input>    
            </label>   
            <label> Password
             <input
                type="password"    
                name="Password"  
                onChange={onChange}
                value={values.password}        
                        
             ></input>
             </label>   
                
        <div className="term">
             <label> I agree
                <input
                type="checkbox"        
                name= "terms"
                value={values.terms}
                onChange={onChange}
                checked= {values.terms === "agree"}           
               ></input>
             </label>
        </div>
        <div className="submit">
                    <button disabled={disabled} >Submit</button>
        </div>
        </div>
    </form>

    )
    

}

export default PersonForm