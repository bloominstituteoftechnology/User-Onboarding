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

    return (
        <>
        <form onSubmit={submit}>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
        <div>
        <label>
        Name:
        <input type='text' value={values.name}name='name' onChange={change}  />
      </label>
      <label>
        Email:
        <input type='email' value={values.email}name='email' onChange={change} />
      </label>
      <label>
        Password:
        <input type='password' value={values.password}name='password' onChange={change} />
      </label>
      <label>
        Terms of Service
        <input type='radio' value={values.serviceTerms}name='serviceTerms' onChange={change} checked='stateNeeded' />
      </label>
      <button disabled={disabled}>Submit</button>
        </div>
        </form>
      </>
    )
}