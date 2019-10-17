import React, {useState, useEffect} from "react";
import {withFormik, Field, Form} from "formik";
import * as Yup from "yup"; 
import axios from "axios";

const OnboardingForm = ({values, touched, errors, status}) => {
    const[user, setUser] = useState([]);
    useEffect(() =>{
        status && setUser(user => [...user, status])
    }, [status])
    return(       
         <div className="onboarding-form">
             <Form>
                 <h1>Fill in the following information:</h1>
                 <label>Name:  
                <Field type="text" name="name" className="input" placeholder="Name"/>
                {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                )}</label>
                
                <label>Email:
                <Field type='email' name='email' className="input" placeholder='Email'/> </label>
                <label>Password:<Field type='password' name='password' className="input" placeholder="Password"/></label>
                {errors.password && <p className='error'>{errors.password}</p>}
                <label>
                    Terms of Service                
                <Field type='checkbox' name='terms' className="input" checked={values.terms}/>
                </label>
                {errors.terms && <p className='error'>{errors.terms}</p>}
                <button type="submit">Submit</button>
            </Form>   
                    <div className='userInfo'>
            {user.map(user =>(
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.password}</p>
                </div>                
            ))} 
            </div>        
         </div>   
    );
};

const FormikOnboardingForm = withFormik({
    mapPropsToValues({name, email, password, terms}){
        return{
            name: name || '',
            email: email || '',
            password: password || '',
            terms: terms || false
        };
    },
    validationSchema:Yup.object().shape({
        name: Yup.string().required("Name is required"),
        password: Yup.string().required("Must be 8 letters").min(8),       
    }),
    
    handleSubmit(values, {setStatus}){
        axios.post('https://reqres.in/api/users', values)
            .then(response => {setStatus(response.data);})
            .catch(error => console.log(error.response));
    }
})(OnboardingForm)

export default FormikOnboardingForm;