import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Field } from "formik";

/*
 Name
- Email
- Password
- Terms of Service (checkbox)
- A Submit button to send our form data to the server.
*/

class Form extends Component {
  
  render() {
    return (
      <React.Fragment>
        <form>
        <Formik 
        initialValues={{
            email:"",
            password:"",
            termsOfService:false,
        }}
            render={() => {
               return (
                    <React.Fragment>
                   <div className="form-group">
                       <label forHtml="email">Email</label>
                       <Field className="form-control" type="email" name="email" placeHolder="Email" />
                   </div>
                   <div className="form-group">
                       <label htmlFor="password">Password</label>
                       <Field className="form-control" type="password" name="password" placeHolder="Password" />
                   </div>
                   <div className="form-check">
                       
                       <input type="checkbox" className="form-check-input" name="termsOfService" />
                       <label htmlFor="termsOfService" className="form-check-label">I accept the Terms Of Service</label>
                   </div>
                   </React.Fragment>  
               )
            }}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
       
        <ToastContainer />
      </React.Fragment>
    );
  }
}

export default Form;
