import React, { useState, useEffect } from "react"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"

function OnBoardForm({ values, touched, errors, status }) {
    const [member, setMember] = useState([])

    useEffect(() => {
        status && setMember(member => [...member, status])
    }, [status])

    return (
        <div className='loginForm'>
            <h1>Team OnBoarding</h1>
            <Form className='main-form'>
                <Field type='text' name='username' placeholder='username' />
                {touched.username && errors.username && (
                    <p className='errors'>{errors.username}</p>
                )}

                <Field type='text' name='email' placeholder='email' />
                <Field type='text' name='password' placeholder='password' />

                <label className='terms'>
                    By checking you are agreeing to the terms of service
                    <Field
                        type='checkbox'
                        name='terms'
                        checked={values.terms}
                    />
                    <span className='checkmark' />
                </label>
                <button type='submit'>Submit</button>
            </Form>
            {member.map(member => (
                <ul key={member.id}>
                    <li>Team Member: {member.username}</li>
                    <li>Email: {member.email}</li>
                </ul>
            ))}
        </div>
    )
}

const FormikOnBoardForm = withFormik({
    mapPropsToValues({ username, email, password, terms }) {
        return {
            username: username || "",
            email: email || "",
            password: password || "",
            term: terms || false,
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .min(6)
            .required(),
    }),

    handleSubmit(values, { setStatus }) {
        // values is our object with all our data on it
        axios
            .post("https://reqres.in/api/users/", values)
            .then(res => {
                setStatus(res.data)
                console.log(res)
            })
            .catch(err => console.log(err.response))
    },
})(OnBoardForm)

export default FormikOnBoardForm
console.log("this is the HOC", FormikOnBoardForm)
