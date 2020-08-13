import React, { useState, useEffect } from 'react';
import * as yup from 'yup';

const blankForm = {
        name: '',
        email: '',
        password: '',
        tos: false
    }

export default function () {
//form state
    const [formState, setFormState] = useState({...blankForm})
//submit button
    const [btnDisabled, setBtnDisabled] = useState(true);

//change handler and validater
    const handleChanges = (event) => {
        event.persist()
        //if/then if type is checkbox
        validateChange(event)
        setFormState({...formState, [event.target.name]:event.target.type === 'checkbox' ? event.target.checked : event.target.value})
        //console.log(formState)
    }

//YUP validation
    const formSchema = yup.object().shape({
        name: yup.string().required('❗ Please enter your name.'),
        email: yup.string().email('⚠ Please enter a VALID email.').required('❗ Please enter your email.'),
        password: yup.string().required('❗ Please create a password.'),
        tos: yup.boolean().oneOf([true], '⚠ You must agree to the TOS to register.')
    })

    const validateChange = (event) => {
        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(validity => {
                console.log('validity val', validity)
            })
            .catch(error => {
                console.log('error val', error.errors)
            })
    }

    useEffect(() => {
        formSchema.isValid(formState)
        .then(validity => setBtnDisabled(!validity))
    }, [formState])

//onSubmit function
    const submitForm = (event) => {
        
        event.preventDefault();
        console.log('form submitted with this data', formState)
    }


    return (
        <section>
            <p>Sign up is quick and simple. Please fill out the following information.</p>
            <form onSubmit={ submitForm }>
{/* Form startes here! Needs: name, email, pw, tos, submit */}
                <label htmlFor='name'>
                    Name:
                    <input type='text' id='name' name='name' placeholder='Phoenix Wright' onChange={handleChanges} value={formState.name}/>
                </label>
                <label htmlFor='email'>
                    Email:
                    <input type='text' id='email' name='email' placeholder='pwright@aceattorney.com' onChange={handleChanges} value={formState.email}/>
                </label>
                <label htmlFor='password'>
                    Password:
                    <input type='text' id='password' name='password' placeholder='**********' onChange={handleChanges} value={formState.password}/>
                </label>
                <label htmlFor='tos'>
                    <input type='checkbox' checked={formState.tos} id='tos' name='tos' onChange={handleChanges}/>
                    I have read and agree to the <a href='http://google.com' target='_blank'>Terms of Service</a>.
                </label>
                <button disabled={ btnDisabled } type='submit'> Register </button>
            </form>
        </section>
    )
}