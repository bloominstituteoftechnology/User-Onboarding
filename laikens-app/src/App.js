import Form from "./Form";
import { useState} from 'react';
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues = {
  firstName: "",
  Email: "",
  Password: "",
  serviceTerms: false,
};

const yup = require("yup");
const schema = yup.object().shape({
  firstName: yup.string().min(6, 'use more than six characters'),
  Email: yup.string().required('Provide Email'),
  Password: yup.string().required('Provide Password'),
  serviceTerms: yup.string()
});

export default function App() {
  const [form, setForm] = useState(initialFormValues)

  const onChange = e =>{
    const valueToUse = e.target['type'] === 'checkbox' ? !form['serviceTerms'] : e.target['value']
    setForm({...form,[e.target['name']]:valueToUse})
  }
  return (
    <div className="App container d-flex justify-content-center">
      <div className="form-card d-flex justify-content-center">
        <div className="users">
          <h1>Users</h1>
          <p> Add new Users</p>
        </div>
        <Form form={form} onChange ={onChange}/>
      </div>
    </div>
  );
}
