import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import Axios from 'axios';


export default function Form(props) {
        const { values, update, submit } = props

        const [form, setForm] = useState({
            name: "",
            email: "",
            password: ""
          });
    
        const onChange = evt => {
            const {name} = evt.target
            const {value} = evt.target
            update(name, value)
        }
    
        const onSubmit = evt => {
            evt.preventDefault();
            console.log("submitted");
          }
    

    return (
        <form className='form container' onSubmit={onSubmit}>
          <div className='form-group inputs'>
        
            <label>Name
              <input type="text" onChange={onChange} name="name" values={form.name}/>
            </label>
    
            <label>Email
              <input type="email" onChange={onChange} name="email" values={form.email}/>
            </label>

            <label>Password
              <input onChange={onChange} name="password" values={form.password}/>
            </label>

            <label htmlFor="termsInput">
        Do you agree to the terms and conditions?
                <input id="termsInput" type="checkbox" name="terms" />
            </label>
    
            <div className='submit'>
              <button>Submit</button>
            </div>
          </div>
        </form>
      )
    }
