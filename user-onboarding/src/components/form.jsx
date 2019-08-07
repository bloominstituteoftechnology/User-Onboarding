import React, { Component } from 'react';
import {Formik, Field, Form} from "formik";

class Form extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <Forik initialValues={{
                    email:"",
                    password:"",
                    tos:false,
                    }}
                    onSubmit={(values)}
                    />
            </React.Fragment>
         );
    }
}
 
export default Form;
