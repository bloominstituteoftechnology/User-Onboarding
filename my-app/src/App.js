//When creating npx creat-react-app, make sure to THEN cd into your project 
//folder (here it is my-app), to be able to add dependencies & get everything 
//working correctly

//import React, { useState } from 'react';

//import './App.css';
import Form from './components/Form';
//import formSchema from './components/formSchema';
//import * as yup from 'yup';
//import axios from 'axios'



//The app is rendering the Form component, but the helper functions live inside the individual component. 
//This can make it simpler than passing down the state and functions through props.
//However be aware that if some other file needs access to that state, you may need to move it up into App
//..so that way other child files have access.
function App() {

  return (
    <div className="App">
      <Form stateProps={usersState}>

      </Form>
    </div>
  );
}

export default App;
