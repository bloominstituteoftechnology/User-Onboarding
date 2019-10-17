import React, {useState} from 'react';
// import axios from "axios";
import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";

function UserForm() {
    // const [user, setUser] = useState([])
    return (
        <div>
            <Form>
                <Field type="text" name="name" placeholder="name"/>

            </Form>
        </div>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({name}){
        return{
            name: name || "",
        }
    }
})(UserForm);
export default FormikUserForm;
