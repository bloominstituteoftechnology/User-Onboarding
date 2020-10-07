import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardText,
} from "reactstrap";
import "./MyForm.css";
import * as yup from "yup";
import axios from "axios";

export default function MyForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: true,
  });
  const [buttonDisable, setButtonDisabled] = useState(true);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });
  const [users, setUsers] = useState([]);
  const InputChange = (event) => {
    event.persist();
    const newData = {
      ...formState,
      [event.target.name]:
        event.target.name === "checkbox"
          ? event.target.checked
          : event.target.value,
    };
    validateChange(event);
    setFormState(newData);
  };
  const formSchema = yup.object().shape({
    name: yup.string().required("Name field is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
    terms: yup.boolean().oneOf([true], "Please agree with terms of service"),
  });
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);
  const validateChange = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(
        event.target.name === "terms"
          ? event.target.checked
          : event.target.value
      )
      .then((valid) => {
        setErrors({ ...errors, [event.target.name]: "" });
      })
      .catch((error) => {
        setErrors({ ...errors, [event.target.name]: error.errors[0] });
      });
  };
  const formSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        const newUser = response.data;
        const newUsers = [...users, newUser];
        setUsers(newUsers);
        setFormState({
          name: "",
          email: "",
          password: "",
          terms: true,
        });
      })
      .catch((error) => console.log(error.response));
  };
  return (
    <div className="myform">
      <Form onSubmit={formSubmit}>
        <FormGroup>
          <Label for="name">Name: </Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            value={formState.name}
            onChange={InputChange}
          />
          {errors.name.length > 0 ? (
            <p className="error">{errors.name}</p>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label for="email">Email: </Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            value={formState.email}
            onChange={InputChange}
          />
          {errors.email.length > 0 ? (
            <p className="error">{errors.email}</p>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label for="pasword">Password: </Label>
          <Input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            value={formState.password}
            onChange={InputChange}
          />
          {errors.password.length > 0 ? (
            <p className="error">{errors.password}</p>
          ) : null}
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              name="terms"
              id="terms"
              value={formState.terms}
              onChange={InputChange}
            />{" "}
            Agree terms of service
          </Label>
          {errors.terms.length > 0 ? (
            <p className="error">{errors.terms}</p>
          ) : null}
        </FormGroup>
        <Button type="submit" disabled={buttonDisable}>
          Submit
        </Button>
      </Form>
      {users.length > 0
        ? users.map((user) => {
            return (
              <Card key={user.id}>
                <CardBody>
                  <CardText>Created at: {user.createdAt} </CardText>
                  <CardText>Email: {user.email} </CardText>
                  <CardText>ID: {user.id} </CardText>
                  <CardText>Name: {user.name} </CardText>
                  <CardText>Password: {user.password} </CardText>
                  <CardText>Agree to terms: {user.terms} </CardText>
                </CardBody>
              </Card>
            );
          })
        : null}
    </div>
  );
}
