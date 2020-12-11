import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';

function Form() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        terms: false
    });
    const [disabled, setDisabled] = useState(true);
    const [users, setUsers] = useState();
    const [serverError, setServerError] = useState([]);
    const [inlineError, setInlineError] = useState({
        name: '',
        email: '',
        password: '',
        terms: ''
    });
    const handleChange = (e) => {
        e.persist();
        validate(e);
        setForm({...form, [e.target.name]:
            e.target.type === 'checkbox' ? 
            e.target.checked : e.target.value});
        };
    const handleSubmit = e => {
        e.preventDefault();

        axios.post('https://reqres.in/api/users', form)
        .then((res) => {
            setUsers(res.data);
            setServerError(null);
            setForm({
                name: '',
                email: '',
                password: '',
                terms: false
            });
        })
        .catch((err) => {
            setServerError('whoops, something went wrong');
        });
    };
    const formSchema = yup.object().shape({
        name: yup.string().required('must provide a name'),
        email: yup.string().email().required('must provide an email'),
        password: yup.string().required('must have a password'),
        terms: yup.boolean().oneOf([true])
    });
    useEffect(() => {
        formSchema.isValid(form).then((valid) => {
            setDisabled(!valid);
        });
    }, [form]);
    const validate = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(
                e.target.type === 'checkbox' ? e.target.checked : e.target.value
            )
            .then((valid) => {
                setInlineError({...inlineError, [e.target.name]: ''});
            })
            .catch((err) => {
                console.log(err.errors[0])
                setInlineError({...inlineError, [e.target.name]: err.errors[0]})
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            {serverError && <p>{serverError}</p>}

            <label htmlFor='name'>
            Name:
                <input 
                    id='name'
                    name='name'
                    placeholder='name'
                    value={form.name}
                    onChange={handleChange}
                />
                {inlineError.name && <p className='error'>{inlineError.name}</p>}
            </label>
            <label htmlFor='email'>
            email:
                <input 
                id='email'
                name='email'
                placeholder='email'
                value={form.email}
                onChange={handleChange}
                />
                {inlineError.email.length > 0 ? <p className='error'>{inlineError.email}</p> : null}
            </label>
            <label htmlFor='password'>
            password:
                <input 
                id='password'
                name='password'
                placeholder='password'
                value={form.password}
                onChange={handleChange}
                />
                {inlineError.password.length > 0 ? <p className='error'>{inlineError.password}</p> : null}
            </label>
            <label htmlFor='terms'>
            I agree to the terms and conditions
                <input 
                type='checkbox'
                id='terms'
                name='terms'
                checked={form.terms}
                onChange={handleChange}
                />
                {inlineError.terms.length > 0 ? <p className='error'>{inlineError.terms}</p> : null}
            </label>
            <button type='submit' data-cy='submit' disabled={disabled}>Submit</button>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </form>
    )
}
export default Form;