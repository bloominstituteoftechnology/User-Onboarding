import React, {useState, useEffect} from 'react';
import axios from "axios";

import Modal from './Modal';
import Path from './Path';

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
  border: 10px solid white;
  padding: 2%;
  

    input {
        font-size: 3rem;
        background-color: yellow;
        border: 2px solid black;
        border-radius: 8px;
        text-align: center;
        margin: 3% 0;
        box-shadow: 0 0 
    }

    h1 {
        text-align: center;
        margin: 0;
        color: red;
        
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
        font-size: 2rem;
        border: 1px solid white;
        margin: 4%;
    }
    label {
        font-size: 2rem;
        color: black;
        background-color:red;
        padding: 1.4%;
        margin: 2%;
        border-radius:8px;

        input{
           width: 3%;
        }
    }
    button {
        background-color:green;
        color: #00fd9a;
        margin: 2%;
        border: 1px solid #00fd9a;
        font-size: 2.5rem;
        border-radius: 6px;
    }
    .toggle {
        background-color:yellow;
        font-size: 1.3rem;
        color: black;
        border: 2px solid black;
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
    const [isModalOpen, toggleModal] = useState(false);
    const [user, setUser] = useState([])
    useEffect(() => {
        status && setUser(user => [...user, status])
      },[status])
    return (
        <Container>
            <h1>Fast & the Formikrs</h1>
            <Path />
            <button onClick={() => toggleModal(!isModalOpen)}>Sign Up</button>

            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <Form>
                    <Field type="text" name="name" placeholder="name"/><br/>
                    {touched.name && errors.name && <p className="error">{errors.name}</p>}

                    <Field type="text" name="email" placeholder="email"/><br/>

                    <Field type="password" name="password" placeholder="password"/><br/>
                    {touched.password && errors.password && <p className="error">{errors.password}</p>}
                
                    <Field component="select" name="role" >
                        <option>Choose Role</option>
                        <option value="Driver">Driver</option>
                        <option value="Designer">Designer</option>
                        <option value="Engineer">Engineer</option>
                        <option value="Mechanic">Mechanic</option>
                    </Field><br/>

                    <label>
                        Terms of Service: 
                        <Field type="checkbox" 
                        name="termsOfService" 
                        checked={values.termsOfService} 
                        /><br/>
                        {touched.termsOfService && errors.termsOfService && <p className="error">{errors.termsOfService}</p>}
                    </label>

                    <button type="submit" >Submit!</button>
                </Form>
                <button className="toggle" onClick={() => toggleModal(false)}>toggle</button>
            </Modal>
            <div className="outCont">
                {user.map(individ => (
                <div className="output">
                    <ul key={individ.id}>
                        <h2>Name:  {individ.name}</h2>
                        <h3>email:  {individ.email}</h3>
                        <h5>role:  {individ.role}</h5>
                        
                    </ul>
                </div>
                ))}
            </div>
           
        </Container>
    )
}

const FormikUserForm = withFormik ({
    mapPropsToValues({name, email, password, role, quote, termsOfService }){
        return{
            name: name || "",
            email: email || "",
            password: password || "",
            role: role || "",
            termsOfService: termsOfService || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please Enter Name"),
        password: Yup.string().required("Please Enter your password!"),
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
