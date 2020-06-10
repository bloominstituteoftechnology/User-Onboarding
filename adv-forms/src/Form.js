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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        terms: true
    });
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        terms: ''
    });

    const [post, setPost] = useState([]);
    const [serverError, setServerError] = useState('');
    const [user, setUser] = useState([]);

    const onInputChange = e => {
        e.persist()
        validateChange(e)
        setFormData({
            ...formData,
            [e.target.name]:
                e.target.name === 'terms' ? e.target.checked : e.target.value
        })
    };

    const formSchema = yup.object().shape({
        name: yup.string().required('Name is a required field'),
        email: yup.string().required('Must be a valid email address'),
        password: yup.string().required('Please enter your password')
            .matches(
                "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{10,}$",
                "Must Contain 10 Characters, One Uppercase, One Lowercase, and one special case Character"
            ),
        terms: yup.boolean().oneOf([true], 'Please agree to our Terms of Service')
    });

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.name === 'terms' ? e.target.checked : e.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                });
            })
            .catch(err => {
                console.log('from catch', err)
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]

                });
            });
    };

    useEffect(() => {
        formSchema.isValid(formData)
            .then(valid => {
                console.log('valid?', valid);
                setIsButtonDisabled(!valid);
            })
    }, [formData]);

    useEffect(() => {
        axios.post('https://reqres.in/api/users', formData)
            .then(res => {
                // console.log('from axios', res);
                setPost(res.data);
                console.log('API success!');
                setServerError(null);
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    terms: true
                });
            })
            .catch(res => {
                setServerError('Wait, What?!');
            });
    }, []);

    // const newUserRender(e => {
    //             <pre>{JSON.stringify(post, null, 2)}</pre>
    //         })



    return (
        <FormDiv onSubmit={event => {
            event.preventDefault();
        }}>
            <form>
                <label htmlFor='name'>
                    Name:
                    <input
                        type='text'
                        name='name'
                        id='name'
                        onChange={onInputChange} />
                    {errors.name.length > 0 ? <p className='errors'>{errors.name}</p> : null}
                </label>
            </form>
            <form>
                <label htmlFor='email'>
                    Email:
                    <input
                        type='email'
                        name='email'
                        id='email'
                        onChange={onInputChange} />
                    {errors.email.length > 0 ? (<p className='error'>{errors.email}</p>) : null}
                </label>
            </form>
            <form>
                <label htmlFor='password'>
                    Password:
                    <input
                        type='password'
                        name='password'
                        id='password'
                        onChange={onInputChange} />
                    {errors.password.length > 0 ? (<p className='error'>{errors.password}</p>) : null}
                </label>
            </form>
            <form>
                <label htmlFor='terms'>
                    Terms of Service
                    <input
                        name='terms'
                        type='checkbox'
                        checked={formData.checked}
                        onChange={onInputChange} />
                    {errors.terms.length > 0 ? (<p className='error'>{errors.terms}</p>) : null}
                </label>
            </form>
            <form>
                <input disabled={isButtonDisabled} type='submit' />
                <pre>{JSON.stringify(post, null, 2)}</pre>
            </form>
        </FormDiv >
    )
};

export default Form;