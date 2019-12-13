import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Form1({ values, errors, touched,  status }) {
// console.log("values", values);
//   console.log("errors", errors);
//   console.log("touched", touched);

    const [users, setUsers] = useState([]);

    useEffect(() => {
       status && setUsers(users => [...users, status]); 
    }, [status]);

    return (
        <div className="user-form">
            <div className="div1">
            <Form >
                   <Field type="text" name="username" placeholder="Username" />
                   {touched.username && errors.username && <p className="errors"> {errors.username}</p>}
                   
                    <Field type="password" name="password" placeholder="Password" />
                    {touched.password && errors.password && <p className="errors">{errors.password}</p>}
                    
                    <Field type="email" name="email" placeholder="Email" />
                    {touched.email && errors.email && <p className="errors">{errors.email}</p>}
                   
                    <Field type="number" name="phoneNr" placeholder="Phone Number" />
                    {touched.phoneNr && errors.phoneNr && <p className="errors">{errors.phoneNr}</p>}

                    <Field type="text" name="profession" placeholder="Profession" />
                    {touched.profession && errors.profession && <p className="errors">{errors.profession}</p>}

                    <Field type="text" name="city" placeholder="City" />
                   {touched.city && errors.city && <p className="errors"> {errors.city}</p>}

                    <Field component="select" name="gender" className="user-select">
                            <option value="" label="Select a gender" />
                            <option value="male" label="male" />
                            <option value="female" label="female" />
                            <option value="neither" label="neither" />
                    </Field>

                <label className="checkbox-container">
                    <Field type="checkbox" name="tos" checked={values.tos} />
                    Accept Terms
                    {touched.tos && errors.tos && <p className="errors">{errors.tos}</p>}
                    <span className="checkmark" />
                </label>
                <br />
                <button type="submit"> SignUp </button>
            </Form>
            </div>

            <div className="div2">
            {users.map(user =>  { 
                return(
                    <div className ="user-card" key={user.id}>
                        <h4>User Name: {user.username}</h4>
                        <h4>Email: {user.email}</h4>
                        <h4>Phone number: {user.phoneNr}</h4>
                        <h4>Profession: {user.profession}</h4>
                        <h4>City: {user.city}</h4>
                    </div>
                )
           })}
           </div>
        </div>
    );
};
const FormikForm = withFormik({
    mapPropsToValues(props) {
        return {
            username: props.username || "",
            password: props.password || "",
            email: props.email || "",
            tos: props.tos || false,
            phoneNr:props.phoneNr || "",
            profession: props.profession ||"",
            city: props.city ||""
        };
    },
    
    //======VALIDATION SCHEMA==========
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(4, "Username must be 4 characters minimum")
            .max(15, 'Too Long!')
            .required("User Name is required"),
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be 6 characters minimum")
            .max(10, 'Too Long!')
            .required("Password is required"),
        phoneNr: Yup.number()
        .min(1000000000, "too short")
        .max(10000000000,"too long")
        .required("Enter your phone number"),
        profession:Yup.string()
        .min(1, "Profession is too short")
        .max(20, "Profession is too long")
        .required("Password is required"),
        city: Yup.string()
        .required(""),
        tos: Yup.boolean()
        .oneOf([true], 'Must Accept Terms and Conditions')
    }),
    //======END VALIDATION SCHEMA==========

    handleSubmit(values, { resetForm ,setStatus}) {
            axios
                .post("https://reqres.in/api/users", values)
                .then(res => {
                    console.log("This is the Response", res); 
                    resetForm();
                    setStatus(res.data);
                })
                .catch(err => {
                    console.log(err); 
                });
            }
        }
    )(Form1);

export default FormikForm;