import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import * as yup from 'yup' ;
import schema from '../validation/form_schema';

const initial_form_values = {
  username: "",
  email: "",
  password: "",
  terms_of_service: false,
}

const initial_persons = [];
const initial_disabled = true;


function App() {
  const [friends, set_friends] = useState(initial_persons);
  const [form_values, set_form_values] = useState(initial_form_values);




  return (
    <div className="App">

    </div>
  );
}






















export default App;
