import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
function Form1() {
    // const [user, setUser] = useState({ username: "", password: "" });

    // const handleChange = event => {
    //     setUser({ ...user, [event.target.name]: event.target.value });
    // };

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     console.log(user.username);
    //     console.log(user.password);
    // };

    return (
        <Form >
            <Field type="text" name="username" placeholder="Username" />
            <br />
            <Field type="password" name="password" placeholder="Password" />
            <br />
            <Field type="email" name="email" placeholder="Email"/>    
            <br />

            <label> Accept
                <input
                    type="checkbox"
                    id="verifyGenderF"
                    name="genderF"
                    value="myGenderF"
                />
            </label>
            <br />
            <button>SignUp</button>

        </Form>
    )
};
   
const FormikForm = withFormik({
    mapPropsToValues({ user, password, email }) {
      return {
        user: user || "",
        password: password || "",
        email:email || ""
      };
    },
  
    handleSubmit(values) {
      console.log(values);
      //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    }
  })(Form1);
  
  export default FormikForm;