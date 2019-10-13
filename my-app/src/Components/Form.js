import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = ({values, errors, touched, status}) =>{
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        if (status){
            setUsers([...users, status])
        }
    }, [status]);

    return(
        <div className="formdiv">
            <Form>
                {touched.name && errors.name && (
                    <p className='error'>{errors.name}</p>
                )}
                <Field type= "text" name = "name" placeholder= "Name"/>

                {touched.email && errors.email && (
                    <p className='error'>{errors.email}</p>
                )}
                <Field type= "email" name = "email" placeholder= "email@email.com"/>

                {touched.password && errors.password && (
                    <p className='error'>{errors.password}</p>
                )}
                <Field type= "password" name = "password" placeholder= "*******"/>

                {touched.role && errors.role && (
                    <p className='error'>{errors.role}</p>
                )}
                <Field component= "select" name = "role">
                    <option value="" disabled>Select</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="parent">Parent</option>
                    <option value="admin">Administrator</option>
                </Field>

                {touched.terms && errors.terms && (
                    <p className='error'>{errors.terms}</p>
                )}
                <label>Accept Usage Terms: <Field type= "checkbox" name = "terms" checked={values.checked}/></label>
                <button type="submit">Submit</button>

            </Form>

            {users.map(user =>(
                <div key={user.id}>
                    <h2>Name: {user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                    <p>Role: {user.role}</p>
                </div>
            ))}
        </div>
    )
}

const FormikUserForm=withFormik({
    mapPropsToValues: ({name, email, password, role, terms})=>{
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            role: role || "",
            terms: terms || ""
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Enter name here"),
        email: Yup.string().required("Please enter a valid email"),
        password: Yup.string().min(8).required("Password must be at least 8 characters"),
        role: Yup.string().required("Select your position"),
        terms: Yup.boolean().oneOf([true], "Agreement required to continue")
    }),
    handleSubmit(values, {setStatus}){
        axios.post("https://regres.in/api/users", values)
             .then(res=>{
                 console.log(res);
                 setStatus(res.data);
             })
             .catch(err=> console.log(err.res));
    }
    
})(UserForm);

console.log ('It\'s ALIVE!', FormikUserForm);

export default FormikUserForm