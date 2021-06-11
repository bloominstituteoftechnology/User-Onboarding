import axios from 'axios';
import React, {useState, useEffect } from 'react';
import * as yup from 'yup';
import Users from './Users'
//import schema from 'Schema'

const formScheama =yup.object().shape({

    name: yup.string().required(),
    email: yup.string().required().email().required(),
    password: yup.string().required(),
    termofService:yup.boolean().oneOf([true]) ,   
})

const initialFormValues = {
     name: '',
    email: '',
    password: '',
    termofService: false,
  }
  const initialFormErrors = {
    name: '',
    email: '',
    password: '',
    termofService: '',
  }
  const initialUsers = []
  const initialDisabled = true
  
export default function Form(){
    const [formState, setFormState] = useState(initialUsers)          // array of friend objects
    const [formValues, setFormValues] = useState(initialFormValues) // object
    const [errors, setErrors] = useState(initialFormErrors) // object
    const [disabled, setDisabled] = useState(initialDisabled)       
   
    const getFriends = () => {
        
        axios
        .get("https://reqres.in/api/users")
        .then(res => {
          const friendsFromApi = res.data
          setFormState(friendsFromApi)
        })
        .catch(err => console.log(err))
      }
   
      const postNewFriend = newFriend => {
        // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
        //    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
        //    and regardless of success or failure, the form should reset
    
    
        
        axios.post("https://reqres.in/api/users", newFriend)
        .then((res) => {
    
        
        setFormState([...formState, newFriend])
        })
        .catch(err => console.log(err))
        .finally(() => {
          setFormValues(initialFormValues)
        })
      }

      useEffect(() => {
        getFriends()
      }, [])
    
      useEffect(() => {
        // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
        formScheama.isValid(formValues)
        .then(valid => {
          setDisabled(!valid)
        })
      }, [formValues])

    const formSubmit = e => {
        e.preventDefault();
        console.log ("Form submitted")
        axios.post("https://reqres.in/api/users", formState)
        .then(response => console.log(response))
        .catch(err => console.log(err));

        const newFriend = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
            termofService: formValues.termofService.trim(),
        }
        postNewFriend(newFriend)
    }
    const validate  = (e) => {
        yup.reach(formScheama, e.target.name)
            .validate(e.target.value)
            .then(valid =>{
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
    
            })
            .catch(err => {
                console.log(err.errors)
                setErrors({
                    ...errors, 
                    [e.target.name]: err.errors[0]
                    
                })
            })
    
        }

    const inputChange = e => {
        e.persist()
        
      validate(e)
 
        let value = e.target.type ==="checkbox" ? e.target.checked : e.target.value
         setFormState({ ...formState, [e.target.name]: value });
         
     };

return(



    
<form onSubmit={formSubmit}>
<div><button disabled={disabled}>submit</button></div>

<div className='errors'>
          
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.termofService}</div>
        </div>
<div>
                <label htmlFor="name">Name
                <input 
                value={formState.name}
                type="text"
                id="name"
                name="name"
                onChange={inputChange}
                />
            </label>
</div>
<div>
            <label htmlFor="email" >Email
                    <input 
                    value={formState.email}
                    name='email'
                    id="email"
                    type='email'
                    onChange={inputChange}
                />
            </label>
</div>
<div>
            <label  htmlFor="password">Password
                    <input 
                    value={formState.password}
                    name='password'
                    type='password'
                    onChange={inputChange}
                />
            </label>
</div>
 
            <label  htmlFor="termofService">Terms of Service
                <input 
                    checked={formState.termofService}
                    name='terms'
                    type='checkbox'
                    onChange={inputChange}
                />
            </label>
            
        </form>

    )
}