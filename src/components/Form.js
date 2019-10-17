import React, {useState, useEffect} from "react";
import {withFormik, Field, Form} from "formik";
import * as Yup from "yup"; 
import axios from "axios";



const OnboardingForm = ({values, touched, errors, status}) => {
    const[user, setUser] = useState([]);
    useEffect(() =>{
        status && setUser(user => [...user, status])
    }, [status])
    console.log(user);
    return(       
         <div className="onboarding-form">
             <Form>
                <Field type="text" name="name" placeholder="Name"/>
                {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                )}
                <Field type='email' name='email' placeholder='Email'/>
                <Field type='password' name='password' placeholder="Password"/>
                <label>
                    Terms of Service                
                <Field type='checkbox' name='terms' checked={values.terms}/>
                </label>
                {errors.terms && <p className='error'>{errors.terms}</p>}
                <button type="submit">Submit</button>
            </Form>   

            {user.map(user =>(
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.password}</p>
                </div>
            ))}         
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
        name: Yup.string().required(),
        // password: Yup.string().min(8),
        // terms: Yup.boolean()
    }),
    handleSubmit(values, {setStatus}){
        axios.post('https://reqres.in/api/users', values)
            .then(response => {setStatus(response.data);})
            .catch(error => console.log(error.response));
    }
})(OnboardingForm)

export default FormikOnboardingForm;