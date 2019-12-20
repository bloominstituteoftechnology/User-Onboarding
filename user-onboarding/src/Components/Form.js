import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

//props from Formik => values, errors, touched, status
const MyForm = ({ values, errors, touched, status }) => {
  /* console.log('values', values); */

  //state that holds form submission data
  const [users, setUsers] = useState([]);

  //listens for status changes and updates the users states
  useEffect(() => {
    /* console.log(status); */
    //if status has content (an object from API response) then render function setUsers
    //use a spread to create a new array with all of the users previous values + the new object from the API stored in status
    //could be setUsers([...users, status]) but that fires a waring that we should be watching users. We don't need to watch for users changes because this is the only place it could change
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
    <div>
      {
        //the Form automatically applies 'handleSubmit' from withFormik optioins declared below*/
      }
      <Form>
        {
          //wrap Field with label to apply it. Need id on Field to create association
        }
        <label htmlFor="username">
          Name:
          {
            //name(below) is the key within values (the current state of the form inputs)
          }
          <Field
            id="username"
            type="text"
            name="username"
            placeholder="Entername"
          />
          {
            //touched - if input has been visited, erros are captures from Yup validation.
            //If it has been visited && errors exist for that input => render JSX to show errors
          }
          {touched.username && errors.username && <p>{errors.username}</p>}
        </label>
        <label htmlFor="email">
          Email:
          <Field
            id="email"
            type="email"
            name="email"
            placeholder="Enter email"
          />
          {touched.email && errors.email && <p> {errors.email} </p>}
        </label>
        {
          //For fields that use input elements other than <input />, use 'as' to declare what HTML input to use for Field
        }
        <label>
          I agree to the terms and services
          <Field type="checkbox" name="terms" checked={values.terms} />
        </label>
        <button type="submit">Done!</button>
      </Form>

      {users.map(user => {
        return (
          <ul key={user.id}>
            <li>Name: {user.username}</li>
            <li>Email: {user.email}</li>
          </ul>
        );
      })}
    </div>
  );
};

const FormikMyForm = withFormik({
  // props from <MyForm /> in app are in props param
  mapPropsToValues(props) {
    //set initial state of form to value from parent component OR the initial value
    return {
      name: props.name || '',
      email: props.email || '',
      terms: props.terms || false
    };
  },

  //Declare shape and requirement of values object (form state)
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    //passing a string in required makes a custom inline error message
    email: Yup.string().required()
  }),

  // handleSubmit - passed through props to Form component in Formik
  //fires when button type=submit is fired
  //values = state of form, formikBag is second param
  // in FormikBag: set Status (sends API response to MyForm) & resetForm(clears form when called)

  handleSubmit(values, { setStatus, resetForm }) {
    console.log('submitting', values);
    axios
      .post('https://reqres.in/api/users/', values)
      .then(res => {
        console.log('success', res);
        //send status update though props in MyForm with values as res.data as content
        setStatus(res.data);

        //clears form inputs, from FormikBag
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(MyForm);

export default FormikMyForm;
