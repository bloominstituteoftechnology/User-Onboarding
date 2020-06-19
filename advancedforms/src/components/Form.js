import React, { useState } from "react";
import * as yup from 'yup';

export default function Form(props) {




 let formSchema = yup.object().shape({
     name: yup.string().required('Name is required'),
     email: yup.string().email('email is required'),
     password: yup.string().required('password is required'),
     terms: yup.boolean().oneOf([true], "please agree to terms of use")

 })


  return (
    <form className="form">
      <label htmlFor="name">Name</label> <input id="name" type="text" value={props.formState.name}/>
      <label htmlFor="email">Email</label><input id="email" type="text" value={props.formState.email} />
      <label htmlFor="password">Password</label><input id="password" type="password" value={props.formState.password} />
      <div className="alignTerms"><input id="terms" type="checkbox" className="checkBox" checked={props.formState.terms}  />
     <label htmlFor="terms">Terms of Service</label></div>
      <button type="submit" className="btn">Submit</button>
    </form>
  );
}

// STEP 2 - Implement Form Validation and Error Messaging
// Form validation is one of the facets of an application that
//  makes it feel polished
//  and controlled from a user perspective. With that in mind,
//  implement the following:

//  Using Yup, set up at least two different validations along
//  with custom error messages that will display on screen when
//   validation fails.
