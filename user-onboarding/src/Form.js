import React,{useState, useEffect} from 'react'
import axios from 'axios'
import * as yup from "yup";
 function Form(){
const [formState, setFormState] = useState({
    name: "",
    password: "",
    email: "",
    terms: true,
  });
  const [users,setUsers] = useState();
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => console.log("error!"));
  };
  const validateChange = (e) => {
 yup
    .reach(schema, e.target.name)
    .validate(e.target.value)
    .then((inputIsValid) => {
    setErrors({
     ...errors,
     [e.target.name]: "",
 });
})
.catch((err) => {
    setErrors({
     ...errors,
    [e.target.name]: err.errors[0],
});
});
  };
  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.name === "terms"
          ? e.target.checked
          : e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Must be a valid email address")
      .required("email is required"),
    password: yup.string().required("Password is required"),
    terms: yup.boolean().oneOf([true]),
  });

  useEffect(() => {
    schema.isValid(formState).then((isFormValid) => {
      setButtonDisabled(!isFormValid);
    });
  }, [schema, formState]);
  return (
    <form onSubmit={formSubmit}>

      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={inputChange}
        />

        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}

      </label>

      <label htmlFor="email">
        Email
        <input
          type="text"
          id="email"
          name="email"
          value={formState.email}
          onChange={inputChange}
        />
        {errors.email.length > 0 ? (
          <p className="error">{errors.email}</p>
        ) : null}
      </label>

      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          id="password"
          value={formState.password}
          onChange={inputChange}
        />

        {errors.password.length > 0 ? (
          <p className="error">{errors.password}</p>
        ) : null}

      </label>

      <label htmlFor="terms" className="terms">
        Terms of Service
        <input
          id="terms"
          type="checkbox"
          name="terms"
          checked={formState.terms}
          onChange={inputChange}
        />
        {errors.terms.length > 0 ? (
          <p className="error">{errors.terms}</p>
        ) : null}

      </label>

      <button type="submit" disabled={buttonDisabled}>
        Submit
      </button>
<pre>{JSON.stringify(users, null, 2)}</pre>
</form>
);}
export default Form;