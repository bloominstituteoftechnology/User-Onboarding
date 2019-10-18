import React, {useState, useEffect} from 'react';
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import bgrnd from "../img/scar.jpg";

const Container = styled.div`
  background-image: url(${bgrnd});
  background-size: cover;
  height: 100vh;
  background-position: center;
  font-size: 3rem;
  color: white;
  border: 10px solid white;
  padding: 2%;

    input {
        font-size: 2rem;
        background-color: yellow;
        padding: .5%;
        text-align: center;
        margin: .2% 0;
        box-shadow: 0 0 
    }

    h1 {
        text-align: center;
        margin: 0;
        color: red;
        
    }
    text-area{
        margin: 1% 0;
    }
    .error {
        color: red;
        background-color: white;
        border-radius:8px;
        border: 2px solid red;
        font-size: 2rem;
        padding: 2%;
        width:30%;
    }
    select {
        color: black;
        font-size: 1.4rem;
        border: 1px solid white;
        margin: 1%;
    }
    label {
        font-size: 1.7rem;
        color: black;
        background-color:red;
        padding: .3%;
        margin: 1%;

        input{
           width: 3%;
        }
    }
    button {
        background-color:green;
        color: #00fd9a;
        border: 1px solid #00fd9a;
        border-radius: 6px;
    }
    .outCont {
     width: 100%;
     display: flex;
     justify-content: space-evenly;
     flex-wrap: wrap;


        .output {
            background: red;
            color: black;
            opacity: .9;
            font-size:6rem;
            width: 35%;
            margin: 1%;
            border-radius:8px;
        }
    }
    
`;






function UserForm({values, touched, errors, status}) {
    const [user, setUser] = useState([])
    useEffect(() => {
        status && setUser(user => [...user, status])
      },[status])
    return (
        <Container>
            <h1>Fast & the Formikrs</h1>
            <Form>
                <Field type="text" name="name" placeholder="name"/><br/>
                {touched.name && errors.name && <p className="error">{errors.name}</p>}
                <Field type="text" name="email" placeholder="email"/><br/>
                <Field type="password" name="password" placeholder="password"/><br/>
                {touched.password && errors.password && <p className="error">{errors.password}</p>}
               
                <Field
                    component="textarea"
                    type="text"
                    name="quote"
                    placeholder="quote"
                    /><br/>
                <Field component="select" name="role" >
                    <option>Choose Ya Role</option>
                    <option value="Driver">Driver</option>
                    <option value="Designer">Designer</option>
                    <option value="LunchBox">LunchBox</option>
                    <option value="PicklePerson">PicklePerson</option>
                    <option value="FastMouth">FastMouth</option>
                </Field><br/>
                <label>
                    Terms of Service: 
                    <Field type="checkbox" 
                    name="termsOfService" 
                    checked={values.termsOfService} 
                    /><br/>
                    {touched.termsOfService && errors.termsOfService && <p className="error">{errors.termsOfService}</p>}
                </label>
                <button type="submit">Submit!</button>
            </Form>
            <div className="outCont">
                {user.map(individ => (
                <div className="output">
                    <ul key={individ.id}>
                        <li>Name:  {individ.name}</li>
                        <li>email:  {individ.email}</li>
                        <li>role:  {individ.role}</li>
                        <li>wisdom:  {individ.quote}</li>
                    </ul>
                </div>
                ))}
            </div>
        </Container>
    )
}

const FormikUserForm = withFormik ({
    mapPropsToValues({name, email, password, quote, termsOfService }){
        return{
            name: name || "",
            email: email || "",
            password: password || "",
            quote: quote || "",
            termsOfService: termsOfService || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please Enter Name"),
        password: Yup.string().required("No pass Go! Please Enter your password!"),
        termsOfService: Yup.boolean().oneOf([true], 'Must Agree to Terms!'),
    }),
    handleSubmit(values, {setStatus, resetForm}) { 
        axios.post('https://reqres.in/api/users', values) 
              .then(response => { 
                  console.log(response)
                  setStatus(response.data); 
                  resetForm()
                }) 
              .catch(err => console.log(err.response));
        }
})(UserForm);
export default FormikUserForm;
