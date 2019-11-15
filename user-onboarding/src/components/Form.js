import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';



const UserForm = ({ values, errors, touched, status}) => {
    const [user, setUser] = useState([]);

    useEffect (() => {
        status && setUser(users => [...users, status]);
    },[status]);


    return (

        <div className= "user-form">
            <Form>
                <Field type="text" name ="name" placeholder= "name"/>
                {touched.name && errors.name && (
                    <p className= "errors"> {errors.name}</p>
                )}
                <Field type="text" name ="email" placeholder= "email"/>
                {touched.email && errors.email && (
                    <p className= "errors"> {errors.email}</p>
                )}
                <Field type="text" name ="password" placeholder= "password"/>
                {touched.password && errors.password && (
                    <p className= "errors"> {errors.password}</p>
                )}

                <label className="checbox-container">
                    Terms of Service
                    <Field
                        type="checkbox"
                        name="terms"
                        checked={values.terms}
                        />
                    <span className ="checkmark"/>
                </label>
                <button>Submit</button>
            </Form> 
            {user.map(user => (
                <ul key={user.id}>
                    <li>User: {user.name}</li>
                    <li>Email: {user.email}</li>
                    <li>Password: {user.password}</li>
                </ul>
            ))}     
        </div>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, terms}){
        return{
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false,
        };
    },
    validationSchema: yup.object().shape({
        name: yup.string().required(),
        email:  yup.string().required(),
        password:  yup.string().required()
    }),
    handleSubmit(values, {setStatus}) {
        axios
            .post("https://reqres.in/api/users/", values)
            .then(response => {
                setStatus(response.data);
                console.log(response);
            })
            .catch(err => console.log( err.response));
    }


})(UserForm);

export default FormikUserForm;