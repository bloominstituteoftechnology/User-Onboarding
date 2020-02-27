import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const NewForm = ({values, touched, errors, status}) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        status && setUser(status);
    }, [status]);

    return (
      <div className="container">
            <Form>
                <Field type='text' name='name' placeholder='Name:' />
            </Form>
      </div>
    );
}  
  export default NewForm;