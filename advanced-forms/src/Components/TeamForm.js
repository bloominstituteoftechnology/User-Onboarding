import React, { useState, useEffect } from "react";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";



function TeamForm({ values, errors, touched, status }){
// console.log('values', values)
// console.log('errors', errors)
// console.log('touched', touched)


const [state, setState]= useState([])

useEffect(()=>{
    console.log('status', status)

    status && setState(state => [...state, status])
},[status])

return(
    <>
<div className='team-form'>
<Form>
<label>
    Name
    <br/>
    <Field
    type="text"
    name='name'
    placeholder='Name'
    />
    {touched.name && errors.name && (
            <p className="errors">{errors.name}</p>
          )}
</label>
<label>
    Email
    <br/>
    <Field
    type='email'
    name='email'
    placeholder='Email'
    />
    {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
</label>
<label>
    Password
    <br/>
    <Field
    type='password'
    name='password'
    password='password'
    placeholder='password'
    />
    {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
</label>
<label >
    Terms of Service
    <Field
    type='checkbox'
    name='terms'
    checked={values.terms}
    />
     {touched.terms && errors.terms && (
            <p className="errors">{errors.terms}</p> 
          )}
</label>
<button type='submit'>Submit!</button>
</Form>

</div>
{state.map(person => {
return (
        <div className='team-member' key={person.id}>
            <p>name: {person.name}</p>
            <p>email: {person.email}</p>
            <p>Password: {"*".repeat(person.password.length)}</p>
        </div>
        );
      })}
</>
)
}


const FormikTeamForm = withFormik({
    mapPropsToValues({name, email, password, terms}){
return{
    name: name || "",
    email: email || "",
    password: password || "",
    terms: terms || false

}
    },


validationSchema: Yup.object().shape({
    name: Yup.string().min(2, 'Name must be longer than 1 character').required('Required Field'),
    email: Yup.string().email('Email not valid').required('Required Field'),
    password: Yup.string().min(6, 'Password must be longer than 5 characters').required('Required Field'),
    terms: Yup.boolean().oneOf([true], 'Please accept the Terms of Service').required()
}),

handleSubmit(values, {setStatus, resetForm}){
    axios
    .post('https://reqres.in/api/users', values)
    .then(response => {
        console.log('response', response)
        setStatus(response.data)
        resetForm()
    })
    .catch(error => console.log(error.response))
}
})(TeamForm)
export default FormikTeamForm