import axios from "axios"
import * as yup from "yup"
import React, {useEffect, useState} from "react"

const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup.string().email("Must be a valid email address").required(),
    password: yup
      .string()
      .required("No password provided."),
    terms: yup
      .boolean()
      .oneOf([true], "You must agree to sign your life away!"),
  });




export default function Form(){

    // const [userInfo,SetUserInfo] = useState("")




        
    
        // axios.get('https://regres.in/api/users')
        //   .then((res)=> {
        //     // SetUserInfo(response.data)
        //     console.log(res)
        //   })
        //   .catch((err) =>{

        //     // console.log(err)

        //   } )
      
    axios.post

   
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: false,
      });
    
      const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
      });
    
      const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    
     
    
      const validateChange = (e) => {
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then((valid) => {
            setErrors({ ...errors, [e.target.name]: "" });
          })
          .catch((err) => {
            setErrors({ ...errors, [e.target.name]: err.errors[0] });
          });
      };

    
       useEffect(() => {
        formSchema.isValid(formState).then((valid) => {
       //   console.log("valid?", valid);
          setIsButtonDisabled(!valid);
       });
      }, [formState]);
    
      const handleChange = (e) => {
        e.persist();
        validateChange(e);
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setFormState({...formState, [e.target.name]: value});
        
      const formSubmit = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/users', formState)
          .then(response => console.log(response))
            .catch(err => console.log(err))
            }
      
    
      return (
        <form onSubmit={formSubmit}>
          <h1> USER </h1>
          
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formState.name}
              onChange={handleChange}
            />
            
        
        
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            />
                
              {errors.email.length > 0 ? errors.email : null }>
        
                
            <label htmlFor="password">Password
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formState.password}
              onChange={handleChange}
            />
            </label>
        
            <label>
              <input type="checkbox" id="terms" name="terms" checked={formState.terms} /> I Agree
              To The Terms Of Service
              </label>
              
                <button
            type="button"
            disabled={isButtonDisabled} >
                 Click Me!
                </button>
            
        </form>
      );
    };


















