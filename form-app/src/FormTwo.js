import React, {useEffect, useState} from 'react';
import axios from 'axios';
import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string().required("Name is required."),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Must include email"),
  password: yup
    .string()
    .required("Must include password"),
  terms: yup.boolean().oneOf([true], 'please agree to terms of use'),
  roles: yup.string()
})

const FormTwo = () => {

  // state for whether our button should be disabled.
  const [buttonDisabled, setButtonDisabled] = useState(true);
  // manage state for form inputs
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    terms: '',
    roles: ''
  });
  // state for errors
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    terms: '',
    roles: ''
  });
  // new state to set the post request.
  const [post, setPost] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = e => {
    e.preventDefault();
    axios
      .post('https://reqres.in/api/users', formState)
      .then(res => {
        setPost(res.data);
        console.log('success', post);
        // reset form if successful
        setFormState({
          name: '',
          email: '',
          password: '',
          terms: '',
          roles: ''
        });
      })
      .catch(err => console.log(err.response));
  };

  const validateChange = e => {
    // Reach will allow us to "reach" into schema and test only part.
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value || e.target.checked)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ''
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });
  };

  const inputChange = e => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    };

    validateChange(e);
    setFormState(newFormData);
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        {/* Name */}
        <label htmlFor='name'>
          <input type='text' name='name' placeholder='Name' value={formState.name} onChange={inputChange}/>
        </label>
        {errors.name.length > 0 ? <p className='error'>{errors.name}</p>: null}
        {/* Email */}
        <label htmlFor='email'>
          <input type='email' name='email' placeholder='Email' value={formState.email} onChange={inputChange}/>
        </label>
        {errors.email.length > 0 ? <p className='error'>{errors.email}</p>: null}
        {/* Password */}
        <label htmlFor='password'>
          <input type='text' name='password' placeholder="Password" value={formState.password} onChange={inputChange}/>
        </label>
        {errors.password.length > 0 ? <p className='error'>{errors.password}</p>: null}
        {/* Terms of Service */}
        <label htmlFor='terms'>
          <input type='checkbox' name='terms' checked={formState.terms} onChange={inputChange}/>
        </label>
        {/* Roles */}
        <label htmlFor='roles'>
          <select id='roles' name='roles' onChange={inputChange}>
            <option>CEO</option>
            <option>CTO</option>
            <option>COO</option>
            <option>VP</option>
          </select>
        </label>

        {/*display our post request data */}
        <pre>{JSON.stringify(post, null, 2)}</pre>
        <button disable={buttonDisabled}>Submit</button>
      </form>
    </>
  );
}

export default FormTwo;
