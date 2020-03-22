import React, { useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const UserForm = props => {
    const { values, touched, errors, status } = props;
    const [users, setUsers] = useState([]);

    useEffect(() => {
      status && setUsers( () => [...users, status] )
    }, [ status ] );

    console.log(props);
    console.log(status);
    console.log(values);

    return (
    <Form>
      <label htmlFor="name">Name:</label>
      <Field name="name" placeholder="Enter your full name." />
      {touched.name && errors.name ? (
        <span className="error">{errors.name}</span>
      ) : null}
      <label htmlFor="email">Email:</label>
      <Field name="email" placeholder="Enter a valid email." />
      {touched.email && errors.email ? (
        <span className="error">{errors.email}</span>
      ) : null}
      <label htmlFor="password">Password:</label>
      <Field
        type="password"
        name="password"
        placeholder="Enter a secure password."
      />
      {touched.password && errors.password ? (
        <span className="error">{errors.password}</span>
      ) : null}
      <label htmlFor="tos">Do you agree with the TOS?:</label>
      <Field name="tos" type="checkbox" />
      {touched.tos && errors.tos ? (
        <span className="error">{errors.tos}</span>
      ) : null}
      <button type="submit" disabled={!props.isValid}>
        Submit User Profile!
      </button>

      <div>
        {
          users.map( user => (
            <div key={user.id}>
              <h3>{ user.name }</h3>
              <h3>{ user.email  }</h3>
            </div>
          ) )        
        }
      </div>
    </Form>
    );
};

export default withFormik({
    mapPropsToValues: props => {
      return {
        name: props.name || "",
        email: props.email || "",
        password: props.password || "",
        tos: props.tos || false
      };
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
      .required("User must have a name!")
      .min(2, "Your name must be at least 2 characters long!")
      .max(22, "Your name must not exceed 22 characters!"),
      email: Yup.string()
      .email("Please enter a valid email!.")
      .required("You must have an email!"),
      password: Yup.string()
      .required("User must set a password!")
      .min(8, "Your password must be at least 8 characters long!")
      .max(12, "Your password must not exceed 12 characters!"),
      tos: Yup.boolean()
      .oneOf([true], "You must agree to continue!")
    }),
    handleSubmit: (values, { setStatus }, formikBag) => {
      formikBag.props.addUser({
        ...values,
        id: Date.now()
      });
      formikBag.setStatus("The Form Is Submitting!");
      formikBag.resetForm("The Form has been reset!");
      axios.post ( 'https://reqres.in/api/users/', values )
      .then ( res => { console.log( res ); setStatus( res.data.data ); } )
      .catch( err =>   console.log( err.response ) );
    }
  })(UserForm);
  
  // Schema: How the data should look