import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import styled from "styled-components"

const StyledForm = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: grey;
`;
const StyledEntry = styled.label`
    color: orange;
`;
const StyledResults = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;


const NewUser = ({ values, errors, touched, status }) => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        if (status) {
            setUser([...user, status])
        }
    }, [status]);

    return (
        <div>

            <Form class='FormMASTER'>
                <StyledForm class='Form'>
                    <div>
                        <StyledEntry>Enter Name<Field type="text" name="name" placeholder="Name" /></StyledEntry>
                        {touched.name && errors.name && (<p className="error">{errors.name}</p>)}
                    </div>
                    <div>
                        <StyledEntry>Enter Email<Field type="email" name="email" placeholder="Email" /></StyledEntry>
                        {touched.email && errors.email && (<p className="error">{errors.email}</p>)}
                    </div>
                    <div>
                        <StyledEntry>Enter Password<Field type="password" name="password" placeholder="●●●●●●●●" /></StyledEntry>
                        {touched.password && errors.password && (<p className="error">{errors.password}</p>)}
                    </div>
                    <StyledEntry>Agree to Terms of Services: <Field type="checkbox" name="terms" checked={values.terms} /></StyledEntry>
                    {touched.terms && errors.terms && (<p className="error">{errors.terms}</p>)}
                    <button>Submit</button>
                </StyledForm>
            </Form>
            {/* Prints user info after submission */}
            {user.map(person => (
                <ul key={person.id}>
                    <li>Name: {person.name}</li>
                    <li>Email: {person.email}</li>
                    <li>Password: {"*".repeat(person.password.length)}</li>
                </ul>
            ))}
        </div>

    )
}
const FormikNewUser = withFormik({
    mapPropsToValues({ name, email, password, terms }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false
        };
    },


    validationSchema: Yup.object().shape({
        name: Yup.string().min(2, "Name must have more than one character.").required("Required field."),
        email: Yup.string().email("Email not valid.").required("Required field."),
        password: Yup.string().min(6, "Password must have at least 6 characters.").required("Required field."),
        terms: Yup.boolean().oneOf([true], "Must accept Terms of Service.").required()
    }),

    handleSubmit(values, { setStatus }) {
        axios
            .post("https://reqres.in/api/users/", values)
            .then(response => {
                console.log(response);
                setStatus(response.data);
            })
            .catch(error => console.log(error.response));
    }
})(NewUser)




export default FormikNewUser; 