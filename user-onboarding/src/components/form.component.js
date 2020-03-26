import React, { useState, useEffect } from 'react'
import axios from "axios"
import * as yup from "yup"
import styled from 'styled-components'
import "./form.styles.css"




const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field."),
    email: yup
      .string()
      .email("Must be a valid email address")
      .required("Must include email address"),
    password: yup.string().required("Password is a required field").min(4, "your password needs more 4 letters").matches(/(^(?=.*[!@#$%^&*]))/, "Your Password is required special characters"),
    terms: yup.boolean().oneOf([true], "Please agree to terms of use"),
    // positions: yup.string()
})

const Button = styled.button`
/* Adapt the colors based on primary prop */
    background: rgb(219, 112, 147);
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid rgb(219, 112, 147);
    border-radius: 3px;
`;


const Body = styled.div`
    display: flex;
    align-items:center;
    background-color: skyblue;
    height: 20vh;
    border: 2px solid grey;
    width: 30%;
    margin: 4% auto 0 auto;
    padding: 3%;
`;
const Pre = styled.pre`
    display: flex;
    align-items:center;
    justify-content: center;
    background-color: skyblue;
    /* height: 50vh; */
    border: 2px solid grey;
    width: 30%;
    margin: 3% auto;
    padding: 3%;
`


// backgroundImage = "url('img_tree.png');

const Form =(props) =>{



    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms:"",
        // position: ""
    });
  
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        terms:"",
        // position: ""
    });

    const [post, setPost] = useState([]);

    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        formSchema.isValid(formState)
        .then(valid => {
            setButtonDisabled(!valid);
        })
    },[formState])
       

 

    const handleSubmit = event => {
        event.preventDefault();
        axios
            .post("https://reqres.in/api/users", formState)
            .then(res => {
                setPost([...post, res.data]);
                console.log("success", post)
           
            setFormState({
                name:"", 
                email: "",
                password:"",
                terms:"",
                // position: ""
            });
        })
        .catch(err => console.log(err.response))
    }

    const validateChange = event => {
        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(valid =>{
                setErrors({
                    ...errors,
                    [event.target.name]: ""
                });
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [event.target.name]: err.errors[0]
                });
            });
    };
    const handleChange = event => {
        event.persist();
        const newFormData= {
            ...formState,
            [event.target.name]:
                event.target.type === "checkbox" ? event.target.checked
                    : event.target.value
        }
        validateChange(event);
        setFormState(newFormData)

      };
      console.log(errors)
    return (
        <div>
         <Body >
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">
            Full Name
                <input 
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                />
                {errors.name.length > 0 ? <p className="error">
                {errors.name}</p> : null}
                </label>
                 <br />     

            <label htmlFor="email">
                 Email
                <input 
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                />
                {errors.email.length > 0 ? (
                    <p className="error">{errors.email}</p>
                ) : null }
                </label>   
                  <br />    

            <label htmlFor="password">
            password
                <input 
                    type="password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                />
                  {errors.password.length > 0 ? (
                    <p className="error">{errors.password}</p>
                ) : null }
                </label>
                  <br />
            <label htmlFor="terms">
                Terms & Condition
                <input 
                    type="checkbox"
                    name="terms"
                    checked={formState.terms}
                    onChange={handleChange}
                />
                  {errors.terms = false ? (
                    <p className="error">{errors.terms}</p>
                ) : null }
            </label>
                    <br/>
            <Button disabled={buttonDisabled}>Submit!</Button>

           
        </form>
        </Body>
            <Pre>{JSON.stringify(post, null, 2)}</Pre>
        </div>
       
     
        
    )
}


export default Form