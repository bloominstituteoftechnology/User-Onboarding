import React from 'react'
import * as yup from 'yup';
import { withFormik, Form, Field } from 'formik';

function Forms (){

     return(
          <div>Hello I am form</div>
     )
}

const FormikForms = withFormik({
     
})(Forms)
console.log(FormikForms)

export default Forms