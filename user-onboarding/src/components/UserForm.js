import React, { useEffect, useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from "axios";
import * as yup from 'yup';
import styled from 'styled-components';

const testInfo = {
    name: "thomas",
    email: "thomas@domain.com",
    password: "Bestpassword%123",
    termsOfService: true,
    membership: "bronze",
    color: "aquamarine",
    role: "assassin"
}

const Container = styled.div`
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    width: 500px;
    background: white;
    border-radius: 20px;
    padding: 40px 0;
    h1 { 
        text-align: center;

    }
    h2 {
        text-align: center;
    }
    form {
        label {
            display: flex;
            flex-direction: column;
            width: 300px;
            margin: 0 auto;
            font-size: 20px;
            font-weight: 600;
            input {
                margin-bottom: 20px;
            }
            select {
                margin-bottom: 20px;
            }
        }
        .membership {
            flex-direction: column;
            div {
                display: flex;
                justify-content: space-evenly;
                span {
                    font-size: 16px;
                }
            }

        }
        .color {
            height: 500px;
        }
        button {
            display: flex;
            margin: 0 auto;
        }
    }
`

const UserCard = styled.div`

    height: 100px;
    background: ${props => props.color};
    div {
        background: white;
        width: 60%;
        margin: 0 auto;
        border-radius: 10px;
        padding: 0 10px;
        h3 {
            margin-bottom: 0;
            padding-top: 10px;
        }       
        p {
            margin: 0;
            padding-bottom: 10px;
        }
    }
`


const UserForm = (props) => {

    const [error, setError] = useState()
    const [users, setUsers] = useState([testInfo])
    console.log(props.values)
    useEffect(() => {
        if (!props.isValid) {
            const validationError = props.errors[Object.keys(props.errors)[0]];
            validationError && setError(validationError)
        }

        if (props.status) {
            if (users.find((user) => user.email === props.status.email)) {
                setError(`Email ${props.status.email} is already taken`)
            } else {
                setUsers([...users, props.status])
                setError(undefined)
            }
        }
    }, [props.isSubmitting, props.status])

    return (
        <Container>
            <h1>Create your account</h1>
            {error && <h2>{error}</h2>}

            <Form>
                <label>
                    Name:
                    <Field type="text" name="name" placeholder="Your name" />
                </label>
                <label>
                    Email:
                    <Field type="email" name="email" placeholder="your_email@domain.com" />
                </label>
                <label>
                    Password:
                    <Field type="password" name="password" />
                </label>
                <label className="membership">
                    <p>Membership:</p>
                    <div>
                        <span>
                            <Field type="radio" name="membership" value="bronze" />
                            bronze
                        </span>
                        <span>
                            <Field type="radio" name="membership" value="silver" />
                            silver
                        </span>
                        <span>
                            <Field type="radio" name="membership" value="gold" />
                            gold
                        </span>
                    </div>
                </label>
                <label>
                    Select your color:
                    <Field type="color" name="color" />
                </label>
                <label>
                    Select your role:
                    <Field as="select" name="role">
                        <option disabled>Select your role</option>
                        <option value="Support">Support</option>
                        <option value="Tank">Tank</option>
                        <option value="Assassin">Assassin</option>
                    </Field>
                </label>
                <label>
                    Terms of Service:
                    <Field type="checkbox" name="termsOfService" />
                </label>
                <button type="submit">Submit</button>
            </Form>
            {
                users.map(user =>
                    <UserCard color={user.color} key={user.id}>
                        <div>
                            <h3>Name: {user.name}</h3>
                            <p>Email: {user.email}</p>
                        </div>
                    </UserCard>
                )
            }
        </Container>
    )
}

export default withFormik({
    mapPropsToValues: ({ name, email, password, termsOfService, membership, role, color }) => {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            termsOfService: termsOfService || false,
            membership: membership || "",
            role: role || "Select your role",
            color: color || "",
        }
    },
    validationSchema: yup.object().shape({
        name: yup.string().required("Please enter your name"),
        email: yup.string().required("Please enter your email").email("Please enter an appropriate email"),
        password: yup.string().required("Please enter a password").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, { message: "Password needs a minimum eight characters, at least one letter, one number and one special character " }),
        termsOfService: yup.boolean().required("Please check the Terms of Service"),
        membership: yup.string().required("Please select a membership"),
        role: yup.string().required("Please select a role"),
        color: yup.string()
    }),
    handleSubmit: (values, { setStatus, resetForm }) => {
        axios
            .post("https://reqres.in/api/users/", values)
            .then(response => {
                setStatus(response.data)
                resetForm()
            })
            .catch(err => console.log(err.response))
    }
})(UserForm);