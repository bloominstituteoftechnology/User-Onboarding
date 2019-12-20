import React from 'react';
import ReactDOM from "react-dom";
import OnboardForm from "./Components/OnboardForm";
import {
  withFormik,
  Form,
  Field
} from "formik";
import * as Yup from "yup";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <OnboardForm />

    </div>
  )
}

export default App;
