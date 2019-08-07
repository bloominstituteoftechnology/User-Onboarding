import React, { Component } from 'react';
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {Formik,} from "formik"; 

class Form extends Component {
    
    render() { 
        notify = () => toast("Wow so easy !");
        return ( 
            <Formik>

            </Formik>
         );
    }
}
 
export default Form;