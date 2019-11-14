import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { TextField } from "formik-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import { borderRadius, flexbox } from "@material-ui/system";

//What has been removed since we are utilizing Formik:
//state
//handleSubmit
//onChange

const useStyles = makeStyles({
    name:{
        border: 1,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px darksalmon',
        color: 'saddlebrown',
        backgroundColor: 'tan',
        height: 20,
        width: 200,
        padding: '5px 5px',
        margin: 10,
        fontFamily: 'Playfair Display, serif'
    },
    email:{
        border: 1,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px darksalmon',
        color: 'saddlebrown',
        backgroundColor: 'tan',
        height: 20,
        width: 200,
        padding: '5px 5px',
        margin: 10,
        fontFamily: 'Playfair Display, serif'
    },
    password:{
        border: 1,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px darksalmon',
        color: 'saddlebrown',
        backgroundColor: 'tan',
        height: 20,
        width: 200,
        padding: '5px 5px',
        margin: 10,
        fontFamily: 'Playfair Display, serif'
    },
    age:{
        width: 250
    }
})


const UserForm = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
    <div className="user-form">
      <Form className="form-cont">
        <Field 
            className={classes.name}
            type="text" 
            name="name" 
            placeholder="Your full name." 
            component={TextField}
        />
        <Field 
            className={classes.email}
            type="text" 
            name="email" 
            placeholder="Your email." 
            component={TextField}
        />
        <Field 
            className={classes.password}
            type="password" 
            name="password" 
            placeholder="Password." 
            component={TextField}
        />
        <Field className={classes.age} as="select" className="age-range" name="age">
          <option>Please choose an option in the following age ranges.</option>
          <option value="youngin">18 and Below (I am jealous of your youth.)</option>
          <option value="youngadult">19-29</option>
          <option value="adult">30-40</option>
          <option value="mid-life-crisis">40-55</option>
          <option value="oldie-but-goodie">56-666</option>
        </Field>
        {touched.age && errors.age && (
          <p className="errors">{errors.age}</p>
        )}
        <Field className={classes.role} as="select" className="role" name="role">
            <option>Choose your role, minion.</option>
            <option value="peasant">Peasant Toiler of the Fields</option>
            <option value="taxpayer">Taxpayer in a Fiefdom</option>
            <option value="small-lord">Small Lord with a microscopic amount of wealth</option>
            <option value="slave">Slave to all desires</option>
            <option value="really-evil-lord">KING TYRANT</option>
        </Field>
        {touched.role && errors.role && (
          <p className="errors">{errors.role}</p>
        )}
        <label className="checkbox-container">
          Terms of Service:
          <Field
            className={classes.serviceterms}
            type="checkbox"
            name="serviceterms"
            checked={values.serviceterms}
            component={TextField}
          />
          <span className="checkmark" />
        </label>
        <Field
            className={classes.notes} 
            as="textarea" 
            type="type" 
            name="notes" 
            placeholder="Special Notes." 
            component={TextField} 
        />
        <button>Submit!</button>
      </Form>
      {users.map(user => (
        <ul key={user.id}>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Password: {user.password}</li>
          <li>Age Group: {user.age}</li>
          <li>Read Terms of Service: {user.serviceterms}</li>
          <li>Special Notes: {user.notes}</li>
        </ul>
      ))}
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ name, email, password, age, role, serviceterms, notes }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      age: age || "",
      role: role || "",
      notes: notes || "",
      serviceterms: serviceterms || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
        .min(2, "Name must be at least 2 characters long.")
        .required("Enter a name, you silly goose!!!"),
    email: Yup.string()
        .email("This is an invalid email.")
        .required("Email is a required field."),
    password: Yup.string()
        .min(8, "Password must be 8 characters or longer.")
        .required("Enter your password. Do not make me ask again."),
    notes: Yup.string(),
    age: Yup.string().required("ENTER YOUR AGE, YOU IMBECILE!"),
    role: Yup.string().required("Choose your role or I will have to throw you into purgatory."),
    serviceterms: Yup.bool().oneOf([true], "Error. PLEASE ACCEPT OUR TERMS OF SERVICE AND READ ALL THE TINY PRINT. Who knows? You might be signing over your first-born child and your soul.")
  }),
  handleSubmit(values, { setStatus }) {
    //values is our object with all our data on it
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(error => console.log(error.response));
  }
})(UserForm);

export default FormikForm;