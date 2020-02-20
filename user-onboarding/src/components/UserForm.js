import React, {useEffect, useState} from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';


const UserForm = (props) => {

    const [ error, setError ] = useState()
    console.log(props)

    useEffect(() => {
        if (!props.isValid) {
            const validationError = props.errors[Object.keys(props.errors)[0]];
            validationError && setError(validationError)
        } else {
            setError(undefined)
        }

    }, [props.isSubmitting])
    return (
        <div>
            {error && <h2>{error}</h2>}
            <Form>
                <label>
                Name:
                    <Field type="text" name="name" placeholder="Your name" />
                </label>
                <label>
                Email:
                    <Field type="text" name="email" placeholder="your_email@domain.com" />
                </label>
                <label>
                Password:
                    <Field type="password" name="password" />
                </label>
                <label>
                Terms of Service:
                    <Field type="checkbox" name="termsOfService" />
                </label>
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

export default withFormik({
    mapPropsToValues: ({ name, email, password, termsOfService }) => {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            termsOfService: termsOfService || "",
        }
    },
    validationSchema: yup.object().shape({
        name: yup.string().required("Please enter your name"),
        email: yup.string().required("Please enter your email").email("Please enter an appropriate email"),
        password: yup.string().required("Please enter a password").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {message: "Password needs a minimum eight characters, at least one letter, one number and one special character "}),
        termsOfService: yup.boolean().required("Please check the Terms of Service")
    }),
    handleSubmit: (values) => {
        console.log(values)
    }
})(UserForm);