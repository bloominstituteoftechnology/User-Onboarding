import React,{useState, useEffect} from 'react';
import * as Yup from "yup";
import axios from "axios";
import App from "./App";

function Form(props){
    const defaultState={
        name:"",
        email:"",
        password:"",
        terms:false
    };
const [formState,setFormState]=useState(defaultState);

const [errors,setErrors]=useState({
    ...defaultState,terms:""});

const [buttonDisabled,setButtonDisabled]=useState(true);
    
const formSchema= Yup.object().shape({
    name: Yup
        .string()
        .required('Must include Fisrt and Last Name.'),
    
    email: Yup
        .string()
        .email('Must be a valid email address.')
        .required('Must include email address.'),
    password: Yup
        .string()
        .min(8, 'Passwords must be at least 8 charactes long.')
        .required('Password is Required'),
    terms: Yup
        .boolean()
        .oneOf([true], 'You must accept Terms and Conditions!')
})

const [post, setPost] = useState([]);

useEffect(()=>{
    formSchema.isValid(formState).then(valid=> setButtonDisabled(!valid));},[formState]);

const formSubmit=e=>{
    e.preventDefault();
    console.log('submitted');
    axios
        .post('https://reqres.in/api/users', formState)
        .then((res)=>{ 
        // setPost(res.data);
        console.log('Form submitted successfully!',res.data)
        props.setUser([...props.user,res.data])
        // setFormState({
        //     Name:"",
        //     Email:"",
        //     Password:""})
        })
        .catch(err=>console.log(err))
};
const validateChange = e =>{
    e.persist();
    Yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid=> {
            setErrors({
            ...errors,[e.target.name]:''
            })
        })
        .catch(err =>{ 
            setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
        });
    });
    };

    const inputChange = e => {
        // e.persist();            
        const value=e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({
            ...formState,
            [e.target.name]:value
            });
    
        validateChange(e);
      };

return(
    <form onSubmit={formSubmit}>
        <label htmlFor='nameInput' >Name
            <input 
                type='text' 
                placeholder='Full Name' 
                name='name' 
                id='nameInput' 
                error={errors}
                value={formState.name} 
                onChange={inputChange}>
            </input>
        </label>
        <label htmlFor='emailInput'>Email
            <input
                type='text' 
                placeholder='Email' 
                name='email' 
                id='emailInput'
                error={errors} 
                value={formState.email} 
                onChange={inputChange}>
            </input>
        </label>
        <label htmlFor='passwordInput'>Password
        <input
                type='text' 
                placeholder='Password' 
                name='password' 
                id='passwordInput'
                error={errors} 
                value={formState.password} 
                onChange={inputChange}>
            </input>
        </label>
        <label htmlFor='termsInput'>Terms of Service
        <input
                type='checkbox'  
                name='terms' 
                id='termsInput'
                error={errors} 
                checked={formState.terms} 
                onChange={inputChange}>
            </input>
        </label>
        <pre>{JSON.stringify(post, null, 2)}</pre>
        <button disabled={buttonDisabled}>Submit</button>
        </form>
)
}

export default Form;