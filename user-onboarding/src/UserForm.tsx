import Axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import * as yup from 'yup';
import { User } from './App';

interface FormInput extends User {
  password: string;
  agreement: boolean;
}

const UserForm = (props: { addUser: (input: User) => void }): JSX.Element => {
  const [formState, setFormState] = useState<FormInput>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    agreement: false,
  });
  const [errors, setErrors] = useState({
    first_name: false,
    last_name: false,
    email: false,
    password: false,
    agreement: false,
  });

  const [isSubmitEnabled, setSubmitEnabled] = useState<boolean>(false);

  const formSchema = yup.object().shape({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
    agreement: yup.boolean().oneOf([true]),
  });

  useEffect(() => {
    formSchema.isValid(formState).then((valid: boolean) => {
      setSubmitEnabled(valid);
    });
    // eslint-disable-next-line
  }, [formState]);

  const validateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    yup
      .reach(formSchema, e.target.name, null, null)
      .validate(
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
      )
      .then((valid: any) => {
        setErrors({ ...errors, [e.target.name]: '' });
      })
      .catch((err: any) => {
        setErrors({ ...errors, [e.target.name]: err?.errors[0] });
      });
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();

    validateChange(e);
    setFormState({
      ...formState,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const isInvalid = (input: string | boolean): boolean => {
    if (typeof input === 'boolean') {
      return input;
    } else {
      return input.length !== 0;
    }
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    Axios.post('https://reqres.in/api/users', {
      first_name: formState.first_name,
      last_name: formState.last_name,
      email: formState.email,
    }).then((res: AxiosResponse) => {
      console.log(res);
      props.addUser(res.data);
    });
  };

  return (
    <Form
      onSubmit={(evt: React.FormEvent<HTMLFormElement>) => handleSubmit(evt)}
    >
      <Row form>
        <Col>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              type="text"
              name="first_name"
              id="firstName"
              placeholder="First Name"
              value={formState.first_name}
              onChange={inputChange}
              invalid={isInvalid(errors.first_name)}
            />
            <FormFeedback>{errors.first_name}</FormFeedback>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              type="text"
              name="last_name"
              id="lastName"
              placeholder="Last Name"
              value={formState.last_name}
              onChange={inputChange}
              invalid={isInvalid(errors.last_name)}
            />
            <FormFeedback>{errors.last_name}</FormFeedback>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formState.email}
          onChange={inputChange}
          invalid={isInvalid(errors.email)}
        />
        <FormFeedback>{errors.email}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formState.password}
          onChange={inputChange}
          invalid={isInvalid(errors.password)}
        />
        <FormFeedback>{errors.password}</FormFeedback>
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox"
          id="terms"
          name="agreement"
          checked={formState.agreement}
          onChange={inputChange}
          invalid={isInvalid(errors.agreement)}
        />
        <Label for="terms" check>
          I agree to the terms and conditions of FAKEFORM
        </Label>
        <FormFeedback>{errors.agreement}</FormFeedback>
      </FormGroup>
      <Input type="submit" value="submit" disabled={!isSubmitEnabled} />
    </Form>
  );
};

export default UserForm;
