import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onChange = evt => {
        const { name, value, type, checked, } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <>
        <form onSubmit={submit}>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
        <div>
        <label>
        Name:
        <input type='text' value={values.name}name='name' onChange={onChange}  />
      </label>
      <label>
        Email:
        <input type='email' value={values.email}name='email' onChange={onChange} />
      </label>
      <label>
        Password:
        <input type='password' value={values.password}name='password' onChange={onChange} />
      </label>
      <label>
        Terms of Service
        <input type='radio' name='serviceTerms' onChange={onChange} checked={values.serviceTerms} />
      </label>
      <button disabled={disabled}>Submit</button>
        </div>
        </form>
      </>
    )
}