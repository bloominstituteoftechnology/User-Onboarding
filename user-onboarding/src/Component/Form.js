import React from "react";
import {Formik, Form, Field} from "formik";

const FormByFormik = () => {

    return (
        <Formik>
            <Form>
                <Field name="name" placeholder="name"></Field>
                <Field name="email" placeholder="email"></Field>
                <Field name="password" placeholder="password"></Field>
            <Field name="checkbox" type="checkbox" ></Field>
            </Form>
        </Formik>
        

    )
}

export default FormByFormik;