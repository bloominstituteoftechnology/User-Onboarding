import React, {useState} from 'react'
import * as Yup from 'yup'



const Form = () =>{

    // form schema 
    const formSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Must provide a valid email address.')
        .required('Email is required.'),
    password: Yup
        .string()
        .required('Password is required.')
        .min(6, 'Passwords must contain at least 6 characters.'),
    terms: Yup
        .boolean()
        .oneOf([true], 'You must accept Terms of Service to continue.')
})

    //basic event handler for form submission
    const formSubmit = e =>{
        e.preventDefault();
        console.log('submitted');
    }
    
    //create form values state 
    const [formState, setFormState] = useState({
      name:'',
      email:'',
      password: '',
      terms: '',
    })
   
    // Define form elements
    function LoginForm(){
        return (
        <form>
            <label htmlFor='nameInput'>
                Name
                <input id='nameInput' type='text' name='name' placeholder='Name' />
            </label>
            <label htmlFor='emailInput'>
                <input id='emailInput' type='email' name='email' placeholder='Email'/>
            </label>
            <label htmlFor='passwordInput'>
                Password
                <input type='password' name='password' placeholder='Password'/>
            </label>
            <label htmlFor='termsInput'>
                Do you agree to our term of service?
                <input id='termsInput' type='checkbox' name='terms'/>
            </label>
            <button>Submit</button>
        </form>
            )
return null
        }}

export default Form;