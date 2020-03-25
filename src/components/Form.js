import React from 'react';
import {Formik} from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
    name: Yup.string()
    .min(2,"Too short!")
    .max(50, "Too long!")
    .required("Required!")
})
const Form = () => {
    return (
        <Formik>{() =>
            <form>
                <div>
                    <label>Name: <input type="text"/></label>
                    <br/>
                    <br/>
                    <label>Email: <input type="email"/></label>
                    <br/>
                    <br/>
                    <label>Password: <input type="password"/></label>
                    <br/>
                    <br/>
                    <label>Do you agree to terms of service?: <input type="checkbox"/></label>
                    <br/>
                    <br/>
                    <input type="submit"/>
                </div>
            </form>
            }
        </Formik>
    )
}

export default Form;