import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field, Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const NewForm = () => {
  return (
    <Formik
    onSubmit={(values, tools) => {

    }}
    initialValues={{name: "", age: ""}}
    render={props => {
      return (
        <Form>
          <Field name="name" type="text" placeholder="enter name" />
        </Form>
      )
    }}
    />
  )}  
  export default NewForm;