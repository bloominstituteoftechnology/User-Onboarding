import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function UserForm ({ errors, touched, values, status }) {
    const [users, setUsers] = useState ([]);
    
    useEffect(() => {
        if (status) {
            setUsers ([...users, status]);
        }
    }, [status]);

    return (
        <div>
            <Form>
                <Field
                component="input"
                type="text"
                name="name"
                placeholder="Enter Name"
                />
                {touched.name && errors.name && <h2>{errors.name}</h2>}
                <Field
                component="input"
                type="email"
                placeholder="Enter Email"
                />
                {touched.email && errors.email && <h2>{errors.email}</h2>}
            <Field 
            component="input"
            type="password"
            name="password"
            placeholder="Enter Password" />
            
            {touched.password && errors.password && <h3>{errors.password}</h3>}
<label>Terms Of Service</label>
<Field
type="checkbox"
name="termsOfService"
checked={values.termsOfService}
/>
{touched.termsOfService && errors.termsOfService && (
<p>{errors.termsOfService}</p>
)}
<button type="submit">Submit</button>
            </Form>

            {users.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <h2>{user.email}</h2>
                    <h3>{user.password} </h3>
                    <p>{user.termsOfService} Successfully Accepted our Terms of Service 
                    </p>
                </div>     
            ))}
       </div>
    );
}

const formikCom = withFormik({
    mapsPropsToValues ({ name, email, password, termsOfService}) {

        return {
            name: name || "",
            email: email || "",
            password: password || "",
            termsOfService: termsOfService || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string()
        .required("Enter Your Name")
        .matches(
            /^[A-Za-z ]+$/,
            "No numbers or special characters"
        ),
        email: Yup.string()
        .required("Enter your email")
        .email(),
        password: Yup.string()
        .required("Enter password")
        .min(8, "Must contain 8 characters"),
termsOfService: Yup.boolean().oneOf(
    [true],
    "Please Accept Terms and Conditions of Service"
)
    }),

    handleSubmit(values, {setStatus, resetForm}) {
        axios
        .post("https://reqres.in/api/users", values)
        .then(response => {
console.log("handleSubmit: then: response: ", response);
setStatus(response.data);
resetForm();
        })
    .catch(error => console.error("handleSubmit: catch: error: ", error));
    }
});

const OnboardingForm = formikCom(UserForm);
export default OnboardingForm;