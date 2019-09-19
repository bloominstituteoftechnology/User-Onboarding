import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";

const FormyForm = ({ touched, status, errors, values }) => {
  const [users, setUsers] = useState([]);
  const [number, setNumber] = useState(1);
  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
      setNumber(number + 1);
    }
  }, [status]);
  return (
    <>
      <div className="formy-mainDiv">
        <Form className="formy-subForm">
          Name:
          <Field
            type="text"
            name="name"
            placeHolder="Name"
            className="formy-input"
          />
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}
          Age:
          <Field
            type="text"
            name="age"
            placeHolder="Age"
            className="formy-input"
          />
          {touched.age && errors.age && <p className="error">{errors.age}</p>}
          Password:
          <Field
            type="password"
            name="password"
            placeHolder="Password"
            className="formy-input"
          />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          E-Mail:
          <Field
            type="email"
            name="email"
            placeHolder="E-Mail"
            className="formy-input"
          />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
          TOS:
          <label className="checkbox-container">
            <Field type="checkbox" name="checkb" checked={values.tos} />
            {touched.checkb && errors.checkb && (
              <p className="error">{errors.checkb}</p>
            )}
            <span className="checkmark" />
          </label>
          <Field name="waffles" className="food-select" component="select">
            <option>What's Your Favourite Waffle?</option>
            <option value="herbivore">Strawberry!</option>
            <option value="carnivore">Blueberry!</option>
            <option value="omnivore">Plain w/ Syrup!</option>
          </Field>
          <button className="btn">Submit!</button>
        </Form>
      </div>
      <div className="gridCardyCards">
        {users.map(user => (
          <div className="cardy-card">
            <Card key={user.id}>
              <CardHeader tag="h3">Name: {user.name}</CardHeader>
              <CardBody>
                <CardTitle>E-Mail: {user.email}</CardTitle>
                <CardImg
                  name="img"
                  className="card-img"
                  top
                  src={`https://api.adorable.io/avatars/${number}`}
                  alt="Adorable Avatar's API"
                />

                <CardText>Age: {user.age}</CardText>
                <CardText>Password: {user.password}</CardText>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

const FormikFormyForm = withFormik({
  mapPropsToValues({ name, password, email, waffles, age, img, checkb }) {
    return {
      name: name || "",
      password: password || "",
      email: email || "",
      checkb: checkb || "",
      waffles: waffles || "",
      age: age || "",
      img: img || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is a Required Field !"),
    password: Yup.string().required("Password is a Required Field !"),
    age: Yup.string().required("Age is a Required Field !"),
    email: Yup.string().required("E-Mail is a Required Field !"),
    checkb: Yup.string().required("Please Accept the Terms Of Service !")
  }),
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log("This is the res:", res);
        setStatus(res.data);
      })
      .catch(err => {
        console.log("This is the err res:", err.res);
      });
  }
})(FormyForm);
console.log("This is the HOC", FormikFormyForm);
export default FormikFormyForm;
