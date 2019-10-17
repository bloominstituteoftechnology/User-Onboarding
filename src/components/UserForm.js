import React, {useState} from 'react';
// import axios from "axios";
import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";

function UserForm({values}) {
    // const [user, setUser] = useState([])
    return (
        <div>
            <Form>
                <Field type="text" name="name" placeholder="name"/>
                <Field type="text" name="email" placeholder="email"/>
                <Field type="text" name="password" placeholder="password"/>
                <label>
                    
                    Terms of Service
                    <Field type="checkbox" name="termsOfService" checked="{values.termsOfService}" />

                </label>
            </Form>
        </div>
    )
}

const FormikUserForm = withFormik ({
    mapPropsToValues({name, email, password, termsOfService }){
        return{
            name: name || "",
            email: email || "",
            password: password || "",
            termsOfService: termsOfService || false,
        };
    }
})(UserForm);
export default FormikUserForm;
