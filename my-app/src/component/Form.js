import React, {useState, useEffect} from "react";
import axios from "axios";
import * as Yup from "yup";
import {withFormik, Form, Field} from "formik";
import styled from "styled-components";

const StyleEntry = styled.div`
padding: 0;
display: block;
margin: 10px 0 0 0;`;


const NewUser = ({values, errors, touched, status}) => {
    const [user,setUser] = useState([]);

    useEffect(() => {
        if (status) {
            setUser([...user, status]);
        }
    },[status]);

    return(
        <div>
            <Form className="FormMASTER">
                <h1>User Login</h1>
                    <StyleEntry>
                    Enter Name
                    <Field type="text" name="name" placeholder="Name" />
                    {touched.name && errors.name && (
                        <p className="error">{errors.name}</p>
                    )}
                    </StyleEntry>
                    <StyleEntry>
                    Enter Email
                    <Field type="email" name="email" placeholder="Email" />
                    {touched.email && errors.email && (
                        <p className="error">{errors.email}</p>
                    )}
                    </StyleEntry>
                
                <StyleEntry>
                    Enter Password
                    <Field type="password" name="password" placeholder="*******" />
                    {touched.password && errors.password && (
                        <p className="error">{errors.password}</p>
                    )}
                </StyleEntry>
                <StyleEntry>
                    Agree to Terms of Services:{""}
                    <Field type="checkbox" name="terms" checked={values.terms} />
                    {touched.terms && errors.terms && (
                        <p className="error">{errors.terms}</p>
                    )}
                    <br />
                    </StyleEntry>
                    <StyleEntry>
                    <button>Submit</button>
                </StyleEntry>
                
            </Form>
            {user.map(person =>(
                <ul key={person.id}>
                <li>Name: {person.name}</li>
                    <li>Email: {person.email}</li>
                    <li>Password: {"*".repeat(person.password.length)}</li>
                </ul>
            ))}
        </div>
    );
};

const FormikNewUser = withFormik({
    mapPropsToValues({name, email, password, terms}) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false,
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
        .min(3, "Must have at least three characters.")
        .required("Required field"),
        email: Yup.string()
        .email("Not valid")
        .required("Required field"),
        password: Yup.string()
        .min(8, "Must contain at least 8 characters.")
        .required("Required field."),
        terms: Yup.boolean()
        .oneOf([true], "Must accept Terms of Service.")
        .required()
    }),
    handleSubmit(values, { setStatus}) {
        axios
        .post("https://reqres.in/api/users/", values)
        .then(response => {
            console.log(response);
            setStatus(response.data);
        })
        .catch(error => console.log(error.response));
    }
})(NewUser);

export default FormikNewUser;