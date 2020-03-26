import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field."),
  email: yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  password: yup
    .string()
    .required("Must include password"),
  terms: yup.boolean().oneOf([true], "please agree to terms of use"),
  roles: yup.string()
})

const Form = props => {
  // state for whether our button should be disabled or not.
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
    roles: ""
  });

  // state for our errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
    roles: ""
  });

  // new state to set our post request too. So we can console.log and see it.
  const [post, setPost] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = e => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        setPost(res.data); // get just the form data from the REST api
        console.log("success", post);
        // reset form if successful
        setFormState({
          name: "",
          email: "",
          password: "",
          terms: "",
          roles: ""
        });
      })
      .catch(err => console.log(err.response));
  };

  const validateChange = e => {
    // Reach will allow us to "reach" into the schema and test only one part.
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
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
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    };

    validateChange(e);
    setFormState(newFormData);
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <label htmlFor='name'>
          <input type="text" name="name" placeholder="Name" value={formState.name} onChange={inputChange} />
        </label>
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}

        <label htmlFor='email'>
          <input type='email' name='email' placeholder="Email" value={formState.email} onChange={inputChange} />
        </label>
        {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}

        <label htmlFor='password'>
          <input type="text" name="password" placeholder="Password" value={formState.password} onChange={inputChange} />
        </label>
        {errors.password.length > 0 ? <p className="error">{errors.email}</p> : null}

        <label htmlFor='terms'>
          <input type="checkbox" name="terms" checked={formState.terms} onChange={inputChange} />
        </label>

        <label htmlFor='roles'>
          <select id='roles' name='roles' onChange={inputChange}>
            <option value={formState.roles}>CEO</option>
            <option value={formState.roles}>CTO</option>
            <option value={formState.roles}>COO</option>
            <option value={formState.roles}>VP</option>
          </select>
        </label>

        {/* displaying our post request data */}
        <pre>{JSON.stringify(post, null, 2)}</pre>
        <button disabled={buttonDisabled}>Submit</button>
      </form>
    </>
  );
}


export default Form;
