import React, { useState } from "react";
import * as yup from 'yup';

export default function Form() {


  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

 let formSchema = yup.object().shape({
     name: yup.string().required('Name is required'),
     email: yup.string().email('email is required'),
     password: yup.password().required('password is required'),

 })





  return (
    <form className="form">
      <label htmlFor="name">Name</label> <input id="name" type="text" value={formState.name}/>
      <label htmlFor="email">Email</label><input id="email" type="text" value={formState.email} />
      <label htmlFor="password">Password</label><input id="password" type="password" value={formState.password} />
      <div className="alignTerms"><input id="terms" type="checkbox" className="checkBox" checked={formState.terms}  />
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
