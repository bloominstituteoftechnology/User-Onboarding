import React, {useState, useEffect} from "react";
import {withFormik, Form, Field } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';



const Forms = ({values, errors, touched, status}) => {
    const [onboard, setOnboard] = useState([])
    useEffect (() => {
        if (status){
            setOnboard([ ...onboard, status])
        }
    },[status])

    return(

        <div className='new-user'>
            <Form className="entered">
                <p className='idText'>name:</p>
                <Field type='text' name='name' placeholder='John Doe...' />
                {touched.name && errors.name && (<p className='error'>{errors.name}</p>)}

                <p className='idText'>email:</p>
                <Field type='text' name='email' placeholder='johndoe@johndoe.com' />
                {touched.email && errors.email && (<p className='error'>{errors.email}</p>)}

                <p className='idText'>password:</p>
                <Field type='text' name='password' placeholder='123abc...' />
                {touched.password && errors.password && (<p className='error'>{errors.password}</p>)}

                <p className='idText'>role:</p>
                <Field className='role-select' name='role' component='select'>
                <option>choose your role</option>
                <option value='front end engineer'>front end engineer</option>
                <option value='back end engineer'>back end engineer</option>
                <option value='marketing'>marketing</option>
                <option value='administrative'>administrative</option>
                </Field>
                
                <label className='checkbox-container'>
                    Terms and Conditions
                    <Field type='checkbox' name='terms' checked={values.terms} />
                    <span className='checkmark' />
                </label>

                <button>Add Me</button>
            </Form>
            <div className='item-list'>
            {onboard.map((item, index) => (
                
                <span key ={index}> 
                    
                    <p>name: {item.name}</p>
                    <p>email: {item.email}</p>    
                    <p>role: {item.role}</p>
                </span>
                

            ))}
            </div>
        </div>
    )

}
const FormikForms = withFormik ({
    mapPropsToValues({name, email, password, terms, role }) {
        return{
            name: name || '',
            email: email || '',
            password: password || '',
            role: role || '',
            terms: terms || true,
        }
    },

validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required()
}),

handleSubmit(values, {setStatus}){
    axios.post(`https://reqres.in/api/users`, values)
    .then (response => {
        console.log(response.data)
        setStatus(response.data)
    })
    .catch(err => {
        console.log(`error`, err)
    })
   
}
})(Forms)
console.log(`HOC`, FormikForms)
export default FormikForms;
