// Here goes the schema for the form
import * as yup from 'yup';

// Before submitting form we want to verify that user has entered all fields

// Simplest way to use Yup
// 1. Define object schema and its validation
// 2. Create validator object using Yup with expected schema and validation
// 3. Use Yup utility function "validate" to verify if object are valid(satisfies schema and validations)

// Below is a validator object for "schema" object
const formSchema = yup.object().shape({
    first_name: yup
        .string() // "first_name" property should be of type string
        .trim()
        .required('First name is required') // "first_name" property is mandatory
        .min(3, 'First name must be at least 3 characters long'),
    last_name: yup
        .string() // "last_name" property should be of type string
        .trim()
        .required('Last name is required') // "last_name" property is mandatory
        .min(5, 'Last name must be at least 5 characters long'),
    email: yup
        .string() // "email" property should be of type string
        .trim()
        .email('Must be a valid email address')
        .required('Email is required'), // "email" property is mandatory
    terms: yup.boolean() // "terms" property should be of type boolean
        .oneOf([true], 'Terms of Services must be accepted')
});
export default formSchema;