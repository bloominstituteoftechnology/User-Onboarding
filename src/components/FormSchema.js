import React from 'react';
import * as yup from 'yup';

const FormSchema = yup.object().shape({

    fullname: yup.string().required("A username is required."),

    email: yup.string().email("Must enter a valid email address.").required("An e-mail address is required."),

    password: yup.string().min(6, 'Passwords must be at least 6 chatracters long.').required("Please enter a password."),

    terms: yup.boolean().oneOf([true], "Terms of Service must be accepted."),

});

export default FormSchema