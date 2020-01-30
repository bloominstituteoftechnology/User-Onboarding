import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

const UserForm = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log("Status:", status)
        status && setUsers( users => 
            [...users, status])
    },[status]);
    
    return (
    <div className="onboard-form" style={{display: "flex", flexDirection: "row", margin: "10px"}}>
      <div style={{border: "1px solid black", padding: "10px", width: "50%", height: "100%", margin: "5px"}}>
        <Form>
            <label htmlFor="name">Name:</label>
            <br/>
            <Field id="name" type="text" name="name" />
            {touched.name && errors.name &&
            <p className="errors" style={{color: "red", fontSize:"10px"}}>{errors.name}</p>}
            <br/>
            <br/>
            <label html htmlFor="birthday">
            Birthday:
            </label>
            <br/>
            <Field id="birthday" type="text" name="birthday" />
            {touched.birthday && errors.birthday && (
            <p className="errors" style={{color: "red", fontSize:"10px"}}>{errors.birthday}</p>
            )}
            <br/>
            <br/>
            <label html htmlFor="email">
            Email:
            </label>
            <br/>
            <Field id="email" type="text" name="email" />
            {touched.email && errors.email && (
            <p className="errors" style={{color: "red", fontSize:"10px"}}>{errors.email}</p>
            )}
            <br/>
            <br/>
            <label html htmlFor="password">
            Password:
            </label>
            <br/>
            <Field id="password" type="text" name="password" />
            {touched.password && errors.password && (
            <p className="errors" style={{color: "red", fontSize:"10px"}}>{errors.password}</p>
            )}
            <br/>
            <br/>
            <label htmlFor="role">
            Role:
            </label>
            <br/>
            <Field  as="select" id="role" type="text" name="role" >
            <option disabled>Choose an Option</option>
            <option value="FrontEnd Developer">FrontEnd Developer</option>
            <option value="BackEnd Developer">BackEnd Developer</option>
            <option value="UX Developer">UX Developer</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
            </Field>
            {touched.role && errors.role && (
            <p className="errors" style={{color: "red", fontSize:"10px"}}>{errors.role}</p>
            )}
            <br/>
            <br/>
            <label htmlFor="location">
            Location:
            </label>
            <br/>
            <Field id="location" type="text" name="location" />
            {touched.location && errors.location && (
            <p className="errors" style={{color: "red", fontSize:"10px"}}>{errors.location}</p>
            )}
            <br/>
            <br/>
            <label className="checkbox-container" htmlFor="terms-of-service">
            Terms of Service
            <Field
                id="checkbox"
                name="terms"
                type="checkbox"
                check={values.terms}
                required
            />
            </label>
            <br/>
            <br/>
            <button type="submit">Submit</button>
        </Form>
      </div>

      <div style={{border: "1px solid black", padding: "10px", width: "50%", margin: "5px"}}>
        {users.map(user => (
        <div key={user.id}>
            <h4>User: {user.name}</h4>
            <p>Birthday: {user.birthday}</p>
            <p>Email: {user.email}</p>
            <p>{user.role}</p>
            <p>{user.location}</p>
            {/* <p>Password: {user.password}</p> */}
        </div>
        ))}
      </div>
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ name, birthday, email, password, role, location, terms }) {
    return {
      name: name || "",
      birthday: birthday || "",
      email: email || "",
      password: password || "",
      role: role || "",
      location: location || "",
      terms: terms || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is Required."),
    birthday: Yup.string().required("Birthday is Required."),
    email: Yup.string().email().required("Email is Required."),
    password: Yup.string().required("Password is Required."),
    role: Yup.string().required("Role is Required."),
    location: Yup.string().required("Location is Required.")
  }),
  handleSubmit(values, {setStatus}) {
    console.log("submitting", values);
    axios.post(
        "https://reqres.in/api/users", values
        )
        .then(res => {
            console.log("Successful Submittion", res)
            setStatus(res.data)
        })
        .catch(err => console.log(err.response));
  }
})(UserForm);

export default FormikForm;