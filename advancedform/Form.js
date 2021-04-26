import React, { useState } from 'react'



const { values, update, submit } = props;
export default function Form() {
    //STATE
    const [formValues, setFormValues] = useState({


    });
    //FUNCTIONS
    const submitForm = event => {
        event.preventDefault();
        const newUser = {
            name: formValues.myName.trim(),
            email: formValues.myEmail.trim(),
            password: formValues.myPassword.trim()
        }
        setUsers(users.concat(newUser))
        setFormValues(initialFormValues)
        console.log('Submitted');
    };

    const changeMe = event => {
        console.log('Changed', event.target.value);
        const {name, value} = event.target
        setFormValues({...formValues, [name]: value,
        });
    };


    //RETURN... FORM
    return (
        <form onSubmit={submitForm}>
            <label>Name:
                <input 
                    type='text'
                    onChange={changeMe}
                    value={formValues.myName}
                    name='myName'
                />
            </label>
            <label>Email:
                <input 
                    type='text'
                    onChange={changeMe}
                    value={formValues.myEmail}
                    name='myEmail'
                />
            </label>
            <label>Password:
                <input 
                    type='text'
                    onChange={changeMe}
                    value={formValues.myPassword}
                    name='myPassword'
                />
            </label>
            <label>Terms of Service:
                <input
                    type='checkbox'
                    name='terms'
                    checked={values.terms}
                    onChange={changeChecked}
                />
            </label>
            <label>SubmitBtn

            </label>
        </form>
    )
}