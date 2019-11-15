import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { TextField } from "formik-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//What has been removed since we are utilizing Formik:
//state
//handleSubmit
//onChange

const useStyles = makeStyles({
    input:{
        border: 5,
        borderRadius: 5,
        boxShadow: '0 3px 5px 2px #5E5987',
        color: 'black',
        backgroundColor: '#D2D1DF',
        height: 20,
        width: 200,
        padding: '5px 5px',
        margin: 30,
        fontFamily: 'Inconsolata, monospace'
    },
    sel:{
        fontFamily: 'Inconsolata, monospace',
        fontSize: 15,
        margin: 20
    },
    serviceterms:{
        fontFamily: 'Inconsolata, monospace'
    },
    notes:{
        fontFamily: 'Inconsolata, monospace',
        margin: 20
    },
    card:{
        minWidth: 400,
        maxWidth: 400,
        fontFamily: 'Inconsolata, monospace',
        backgroundColor: "ghostwhite",
        boxShadow: '0 3px 5px 2px #5F685C',
        marginTop: 10
    }
})


const UserForm = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
   <div className="bigboy"> 
        <div className="user-form">
            <h1>Welcome to the Dark Side, my lost soul. Will you dedicate your life to our cause?</h1>
            <Form className="form-cont">
                <div>
                    <Field 
                        className={classes.input}
                        type="text" 
                        name="name" 
                        placeholder="Your full name." 
                        component={TextField}
                    />
                </div>
                <div>
                    <Field 
                        className={classes.input}
                        type="text" 
                        name="email" 
                        placeholder="Your email." 
                        component={TextField}
                    />
                </div>  
                <div>
                    <Field 
                        className={classes.input}
                        type="password" 
                        name="password" 
                        placeholder="Password." 
                        component={TextField}
                    />
                </div>
                <div>
                    <Field className={classes.sel} as="select" name="age">
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
                </div>
                <div>
                    <Field className={classes.sel} as="select" name="role">
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
                </div>
                <label className="checkbox-container">
                <span className="term">Terms of Service:</span>
                <Field
                    className={classes.serviceterms}
                    type="checkbox"
                    name="serviceterms"
                    checked={values.serviceterms}
                    component={TextField}
                />
                <span className="checkmark" />
                </label>
                <div>
                    <Field
                        className={classes.notes} 
                        as="textarea" 
                        type="type" 
                        name="notes" 
                        placeholder="Special Notes." 
                        component={TextField} 
                    />
                </div>
                <div className="butt-cont">
                    <button>Submit to your FATE!</button>
                </div>
            </Form>
        </div>
        {users.map(user => (
        <Card className={classes.card}>
            <CardContent>
                <div key={user.id}>
                <Typography variant="subtitle" component="h2">Name: {user.name}</Typography>
                <Typography variant="subtitle" component="h3">Email: {user.email}</Typography>
                <Typography variant="subtitle" component="h3">Password: {user.password}</Typography>
                <Typography variant="subtitle" component="h4">Age Group: {user.age}</Typography>
                <Typography variant="subtitle" component="h4">Read Terms of Service: {user.serviceterms ? 'yes' : 'no'}</Typography>
                <Typography variant="subtitle" component="h4">Special Notes: {user.notes}</Typography>
                </div>
            </CardContent>
        </Card>
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
  handleSubmit(values, { setStatus, resetForm }) {
    //values is our object with all our data on it
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
        resetForm();
      })
      .catch(error => console.log(error.response));
  }
})(UserForm);

export default FormikForm;