import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Field } from "formik";

/*
handle submit 
validation 
toastify
*/

class Form extends Component {
  
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleSubmit(e){
    e.preventDefault();
    console.log("submitted");
}
  render() {
    return (
        <React.Fragment>
        <Formik 
        initialValues={{
            email:"",
            password:"",
            termsOfService:false,
        }}

            render={() => {
               return (
                    <form onSubmit={this.handleSubmit}>
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
                        <button type="submit" className="btn btn-primary">Submit</button>
                 </form>
               )
            }}
        />
        
       
        <ToastContainer />
      </React.Fragment>
    );
  }
}

export default Form;
