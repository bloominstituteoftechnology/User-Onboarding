import React, { useState, useEffect } from 'react';
import formSchema from './Validation/formSchema.js'
import axios from 'axios'
import * as Yup from 'yup'
import '../App.css'


const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  tos: false
}

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  tos: ''
}

const initialUsers = []
const initialDisabled = true


function App() {
  return (
    
  );
}

export default App;
