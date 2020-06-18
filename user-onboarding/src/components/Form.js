import React from 'react'
import { Form, Button, Input, FormGroup, FormFeedback, Label } from 'reactstrap'
import formSchema from '../validation/formSchema'
import * as Yup from 'yup'

export default function UserForm(props) {
  const {
    values,
    onSubmit,
    onInputChange,
    onCheckboxChange,
    disabled,
    errors,
  } = props

  /// COME BACK TO THIS LATER
//   if(fullnameErr === false) {
//       fullnameErr = 'invalid'
//   } else { fullnameErr = 'valid' }

//   if(errors.email) {
//       emailErr = 'invalid'
//   } else { emailErr = 'valid' }

//   if(errors.password) {
//       passwordErr = 'invalid'
//   } else {
//       passwordErr = 'valid'
//   }

//   if(errors.terms) {
//       termsErr = 'invalid'
//   } else { termsErr = 'valid' }

  return (
    <Form onSubmit={onSubmit}>
        <h2>Add New User</h2>

        <Button disabled={disabled}>submit</Button>

        <h3>Information</h3>

        <Label for="fullname">Full Name</Label>
        
          <Input
            id='fullname'
            value={values.fullname}
            onChange={onInputChange}
            name='fullname'
            type='text'
          />
          <FormFeedback>{errors.fullname}</FormFeedback>

        <Label for="email">Email</Label>
          <Input
            id='email'
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='email'
          />
          <FormFeedback>{errors.email}</FormFeedback>

        <Label for="password">Password</Label>
          <Input
          id='password'
          value={values.password}
          onChange={onInputChange}
          name='password'
          type='password'
        />
        <FormFeedback>{errors.password}</FormFeedback>

        <Label for="terms">Do you agree to our Terms?</Label>
        <Input
            id="terms"
            type="checkbox"
            onChange={onCheckboxChange}
            name="terms"
            checked={values.terms}
            value={values.terms}
        />
        <FormFeedback>{errors.terms}</FormFeedback>
    </Form>
  )
}