import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import styled from 'styled-components';

const FormDiv = styled.div`
    width: 80%;
    height: 80vh;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    background-color: #acf2ef;
    margin: 0 auto;
`;

function Form() {
    const [formData, setFormData] = useState([]);
    const [isButtonDisabled, setisButtonDisabled] = useState(true);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        terms: ''
    });

    const formSchema = yup.object().shape({
        name: yup.string().required('Name is a required field'),
        email: yup.string().required('Must be a valid email address'),
        password: yup.string().required('please enter your password')
            .matches(
                "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        terms: yup.boolean().oneOf([true], 'please, agree to our Terms of Service'),
    });

    useEffect(() => {
        formSchema.isValid(formData)
            .then(valid => {
                console.log('valid?', valid);
                setisButtonDisabled(!valid);
                setErrors(formData);
            })
    }, [formData])


    return (
        <FormDiv>
            <form>
                <label htmlFor='name'>
                    Name:
                    <input
                        type='text' name='name' id='name' />
                </label>
            </form>
            <form>
                <label htmlFor='email'>
                    Email:
                    <input
                        type='email' name='email' id='email' />
                </label>
            </form>
            <form>
                <label htmlFor='password'>
                    Password:
                    <input
                        type='password' name='password'
                        id='password' />
                </label>
            </form>
            <form>
                <label htmlFor='terms'>
                    Terms of Service
                    <input
                        name='terms'
                        type='checkbox'
                        checked={false} />
                </label>
            </form>
            <form>
                <input type='submit' />
            </form>
        </FormDiv>
    )
};

export default Form;