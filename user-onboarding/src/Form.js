import React, {useState} from 'react'
import * as yup from 'yup'
import axios from 'axios'
// import schema from './schemeForm'



 const Form = (props) => {
    

const [info, setInfo] = useState({
    username: '',
    email: '',
    password: '',
    TOS: false,
    
})

const post = (person) => {
    axios.post('https://reqres.in/api/users', person)
    .then((res)=> {
        props.setPeople(res)
    })
    .catch(() => {
        debugger;
    })
}


const onChange = (event) => {
    if (event.target.type === 'checkbox'){
        setInfo({
            ...info,
            TOS: !info.TOS
        })
    }

    setInfo({...info,
        [event.target.name]: event.target.value
    })}; 

    const onSubmit = (evt, people ) => {
            evt.preventDefault()
        props.setPeople([...people])
        post(info)
    }

    return (
        <div>
            <form onSubmit={onSubmit(info)}>
            <button>Submit</button>
                <label>
                    Name
                    <input 
                    value={info.name}
                    onChange={onChange}
                    name='username'
                    type='text'
                    placeholder='Type Your Name here'
                    />
                </label>
                <label>
                    Email
                    <input 
                    value={info.email}
                    onChange={onChange}
                    name='email'
                    type='email'
                    />
                </label>
                <label>
                    Password
                    <input 
                    value={info.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                    />
                </label>
                <label>
                    Terms of Service
                    <input 
                    type='checkbox'
                    name='termsOfService'
                    checked={info.TOS}
                    onChange={onChange}
                    />
                </label>
               
            </form>
        </div>
    )
}


export default Form