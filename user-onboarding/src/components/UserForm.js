import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from "axios";
import * as Yup from "yup";

const UserForm = ({errors, touched, values, status}) => {

    const [userName, setUserName] = useState([]);

    useEffect (() =>{
        status && setUserName (userName => [...userName, status]);
    },[status]);


    return (
        <div>
            <h1> User Onboarding </h1>
           <Form>
               <Field type="text"name="user" placeholder="Username"/>
               {touched.user && errors.user && (
                <p className="error">{errors.user}</p>
                )}


               <Field type="text"name="email" placeholder="Enter Email"/>
               {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
                )}


               <Field type="text"name="password" placeholder="Enter Password"/>
               {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
                )}


               <label>
                   {" "}
                <Field
                type="checkbox"
                name="terms"
                checked={values.terms}
                />
                <span/>
                </label> 

                <button type="submit">Submit</button>

           </Form>



        {userName.map(memberId =>(
            <div key= {userName.Id}>
                <p> Username: {memberId.user}</p>
                <p> Username: {memberId.email}</p> 
            </div>

        ))}


        </div>
    );
}

const FormikUserForm = withFormik({

    mapPropsToValues({user, email, password, terms}) {
      return {
        user: user || "",
        email: email || "",
        password: password || "",
        terms: terms || false,
      };
    },

    validationSchema: Yup.object().shape({
      user: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string(),
      terms: Yup.string().required(),
     options: Yup.string().notOneOf(["Choose an option"]).required("Please select one")
    }),

    handleSubmit(values, { setStatus }) {
      axios
        .post("https://reqres.in/api/users/", values)
        .then(response => {
          setStatus(response.data);
          console.log(response);
        })
        .catch(error => console.log(error.response));
    }
  })(UserForm); 



export default FormikUserForm; 