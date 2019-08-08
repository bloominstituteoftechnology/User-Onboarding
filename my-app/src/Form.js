import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";
import UserDetails from "./UserDetails";

const MainContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;
const UserContainer = styled.div`
  width: 90%;
  margin: 0 5% 0 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledField = styled(Field)`
  margin: 10px 10px 0 10px;
  height: 40px;
  width: 200px;
`;
const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ErrorMessage = styled.p`
  color: red;
`;
const ErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const StyledButton = styled.button`
  height: 40px;
  width: 200px;
  margin-left: 20px;
`;

const NewUserForm = ({ errors, touched, values, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
      // console.log(users)
    }
  }, [status]);

  return (
    <MainContainer>
      <StyledForm>
        <StyledField type="text" name="name" placeholder="Name" />
        <StyledField type="email" name="email" placeholder="Email" />
        <StyledField type="password" name="password" placeholder="Password" />
        <StyledField component="select" name="role">
          <option value="" label="Please choose role" />
          <option value="User" label="User" />
          <option value="Admin" label="Admin" />
        </StyledField>
        <StyledLabel>
          TOS
          <Field type="checkbox" name="tos" checked={values.tos} />
        </StyledLabel>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      <UserContainer>
        <ErrorMessageContainer>
          {touched.name && errors.name && (
            <ErrorMessage>{errors.name}</ErrorMessage>
          )}
          {touched.email && errors.email && (
            <ErrorMessage>{errors.email}</ErrorMessage>
          )}
          {touched.password && errors.password && (
            <ErrorMessage>{errors.password}</ErrorMessage>
          )}
          {touched.role && errors.role && (
            <ErrorMessage>{errors.role}</ErrorMessage>
          )}
          {touched.tos && errors.tos && (
            <ErrorMessage>{errors.tos}</ErrorMessage>
          )}
        </ErrorMessageContainer>
        {users.map(user => (
          <UserDetails user={user} key={user.email} />
        ))}
      </UserContainer>
    </MainContainer>
  );
};

const FormikNewUserForm = withFormik({
  mapPropsToValues({ name, email, password, tos, role }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tos: tos || false,
      role: role || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email(),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    tos: Yup.boolean().oneOf([true], "Please accept Terms and Conditions"),
    role: Yup.mixed().required("Please select role")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        setStatus(res.data);
        // resetForm();
      })
      .catch(err => console.log("Axios error", err));
  }
})(NewUserForm);

export default FormikNewUserForm;
