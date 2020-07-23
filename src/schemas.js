import * as yup from 'yup';


//here is where we define our schema for validating the form input we use the 3rd-party library yup for this purpose 
//we chain methods yup.Object().shape(...)
//shape is passed an object which defines our validation rules 
//this object's structure mirrors the object structure of formValues (where our inputs are in state)
//each key -> value here is a bunch of method chains on the yup library which assert certain rules for each input
//ie. is require, data type, max length, min length, expected value, expect pattern (e.g. email)
export const registerSchema = yup.object().shape({
    username: yup
              .string()
              .required()
              .min(3)
              .max(20),
    email:    yup
              .string()
              .email()
              .required(),
    password:
             yup
             .string()
             .required()
             .min(7),
    TOS:     yup
             .boolean()
             .oneOf([true])
});