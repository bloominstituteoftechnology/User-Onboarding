import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';

const Form = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        termsOfService: false
    });
    return (
        <div className='Form-Container'>

        </div>
    );
};

export default Form;