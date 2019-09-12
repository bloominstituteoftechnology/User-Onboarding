import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import './form.css';


function Forms() {
  return (
    <Form>
        <div class="flexBox">
            <h1>User OnBoarding</h1>
        <Field class="marginField" type="text" name="name" placeholder="name"/>
        <Field class="marginField" type="email" name="email" placeholder="email"/>
        <Field  class="marginField"type="password" name="password" placeholder="password"/>
        <label class="marginField">
            <Field type="checkbox" name="tos"/>
            Terms of Service
        </label>
        <button className="subButton" class="marginField" type="submit">Submit</button>
        </div>
    </Form>
  );
}

export default withFormik({

})(Forms);
