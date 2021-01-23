import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';



export default function Input(props) {
  return (

    <label htmlFor="name">
      {`${props.label} `}
      <input {...props}/>
    </label>

  )
}
