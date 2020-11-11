import './App.css';
import * as yup from 'yup';
import axios from 'axios';
import Form from './Form';
import {useState} from 'react';

const initialFormValues={
  name:'',
  email:'',
  password:'',
  termsOfService:false
}

const initialUsers=[];

function App() {
  //set a default state
  const [ formValues, setFormValues]  = useState( initialFormValues );

  //set default users state, its empty but we will add users based on form information
  const[ users, setUsers ] = useState(initialUsers);
  

  return (
    <div className="App">
      <Form
      values={formValues}
      ></Form>
     
    </div>
  );
}

export default App;
