import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const AppForm = ({errors, touched, values, handleSubmit, status  }) => {
    const [forms, setForm] = useState([]);
    console.log(forms);

  useEffect(() => {
    if (status) {
      setForm([...forms, status]);
    }
  }, [status]);

return (
    <div className="App-Form"> 
        <h1> Testing </h1>
            <Form> 
                <Field type='text' name='Name' placeholder='Name' />
                 {touched.Name && errors.Name && (
                <p className="error">{errors.Name}</p>
                )}
                  <Field type='text' name='Email' placeholder='Email' />
                 {touched.Email && errors.Email && (
                <p className="error">{errors.Email}</p>
                )}
                  <Field type='text' name='Password' placeholder='Password' />
                 {touched.Password && errors.Password && (
                <p className="error">{errors.Password}</p>
                )}
                
                <label className="checkbox-container">
                Terms Of Service
                <Field
                    type="checkbox"
                    name="TOS"
                    checked={values.TOS}
                />
                <span className="checkmark" />
                </label>

                <button type="submit">Submit</button>

                 {forms.map(form => (
                 <p key={form.id}>
                 {form.Name}
                 <br/>
                 {form.Email}
                 <br/>
                 {form.Password}
                 </p>
                 ))}
                
            </Form>
    </div>
)
};

const FormikAppForm = withFormik({
    mapPropsToValues({ Name, Email, Password, TOS}){
        return {
            Name: Name || "",
            Email: Email || "",
            Password: Password || "",
            TOS: TOS || false
        };
    },

    validationSchema: Yup.object().shape({
    Name: Yup.string().required(),
    Email: Yup.string().required(),
    Password: Yup.string().required(),
    TOS: Yup.bool().oneOf([true], 'Field must be checked')
  }),

    handleSubmit(values, { setStatus }) {
        axios
        .post("https://reqres.in/api/users/", values)
        .then(res => {
            setStatus(res.data);
        })
        .catch(err => console.log(err.response));
    }
})(AppForm);

export default FormikAppForm