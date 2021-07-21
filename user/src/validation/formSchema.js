/**
 * Tom Bielawski
 * Lambda School WEB45
 * 2.3.3 Onboarding project formSchema.js
 * 7/21/2021
 **/

//Validation schema 
import * as yup from "yup";

const formSchema = yup.object().shape
({
    //Name constraints
    name: yup
        .string()
        .trim()
        .required('Name is Required'),

    //Email constraints
    email: yup
        .string()
        .trim()
        .email()
        .required('Email is Required'),

    //Password constraints
    password: yup
        .string()
        .trim()
        .min(3)
        .required('Password is required'),

    //TOS constraints 
    terms: yup
        .boolean()
        .oneOf([true], 'Please accept terms of service')      
});

//Export statement
export default formSchema;