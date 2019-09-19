import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Form.css';
import Logo from './src/components/man.png';

function Forms() {
  //removed all of the previous code (state-management, change/submit-handlers)

  return (
      <Formik>
    <div className="loginForm">
    <img src={Logo} />
    <h2>Suburbian Hipster</h2>
    <Form>
        <Field type="text" name="username" placeholder="Username" />
         <br />
         <Field type="text" name="email" placeholder="Email" />
         <br />
        <Field type="password" name="password" placeholder="Password"/>
         <br />
         <label>
             <Field type="checkbox" name="terms" />

         I'm legit, yo
         </label>
         <br />
        <button>Submit!</button>
    </Form>
    </div>
    </Formik>
  );
}

export default Forms;