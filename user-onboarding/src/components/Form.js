import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const UsersForm = ({ errors, touched, values, status }) => {
    const [users, setUsers] = useState([{id: 1, name: 'Dan', email: 'd@g.com', tos: true}]);
    console.log("this is touched", touched);
    console.log("this is error", errors);
    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
            console.log(users)
        }
    }, [status]);
    return (
        <div>
            <h1>User Form</h1>
            <Form>
                <Field type="text" name="name" placeholder="Name" />
                {touched.name && errors.name && (
                <p>{errors.name}</p>
                )}

                <Field type="text" name="email" placeholder="Email" />
                {touched.email && errors.email && <p>{errors.email}</p>}

                <Field type="password" name="password" placeholder="Password" />
                {touched.password && errors.password && <p>{errors.password}</p>}

                <label>
                Terms of Service
                <Field
                    type="checkbox"
                    name="tos"
                    checked={values.tos}
                />
                </label>

                <button type="submit">Submit!</button>
            </Form>

            {users.length > 0 ? users.map(user => (
                <ul key={user.id}>
                <li>name: {user.name}</li>
                <li>email: {user.email}</li>
                </ul>
            ))
            :
            null}
    </div>
  );
}

const FormikUsersForm = withFormik({

    mapPropsToValues({ name, email, password, tos }) {
      return {
        name: name || '',
        email: email || '',
        password: password || '',
        tos: tos || false
      };
    },
  
    validationSchema: Yup.object().shape({
      name: Yup.string().required("'Name is required'"),
      email: Yup.string().email().required('Email is required'),
      password: Yup.string().min(6).required('Password is required'),
      tos: Yup.boolean().isValid(true)
    }),
  
    handleSubmit(values, { setStatus }) {
      axios
        .post("https://reqres.in/api/users/", values)
        .then(res => {
          setStatus(res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err.response));
    }
  })(UsersForm);

export default FormikUsersForm;
