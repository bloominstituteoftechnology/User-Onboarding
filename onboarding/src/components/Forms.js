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
            <Form>
                name:
                <Field type='text' name='name' placeholder='John Doe...' />
                {touched.name && errors.name && (<p className='error'>{errors.name}</p>)}

                email:
                <Field type='text' name='email' placeholder='johndoe@johndoe.com' />
                {touched.email && errors.email && (<p className='error'>{errors.email}</p>)}

                password:
                <Field type='text' name='password' placeholder='123abc...' />
                {touched.password && errors.password && (<p className='error'>{errors.password}</p>)}

                role:
                <Field className='role-select' name='role' component='select'>
                <option>choose your role</option>
                <option value='frontendengineer'>front end engineer</option>
                <option value='backendengineer'>back end engineer</option>
                <option value='marketing'>marketing</option>
                <option value='administrative'>administrative</option>
                </Field>
                
                <label className='checkbox'>
                    Terms and Conditions
                    <Field type='checkbox' name='terms' checked={values.terms} />
                    <span className='checkmark' />
                </label>

                <button>Add Me</button>
            </Form>

            {onboard.map((item, index) => (
                <ul key ={index}> 
                    
                    <li>{item.name}</li>
                    <li>{item.email}</li>    
                    <li>{item.password}</li>
                    <li>{item.role}</li>
                </ul>

            ))}
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
