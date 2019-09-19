import React from "react";
import { Formik } from "formik";

const Form = () => (
  <div>
    <h1 className="form-title">My Formik Form, Yup!</h1>

    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={props => (
        <form className="form-main" onSubmit={props.handleSubmit}>
          <label>📋 Name: </label>
          <input
            className="input-input"
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
            placeHolder="Name"
          />

          <label>🔑 Password: </label>
          <input
            className="input-input"
            type="password"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.password}
            name="password"
            placeHolder="Password"
          />

          <label>📧 E-Mail: </label>
          <input
            className="input-input"
            type="email"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
            name="email"
            placeHolder="E-Mail"
          />

          <label>🎫 TOS: </label>
          <input className="check-box" name="check" type="checkbox" />

          {props.errors.name && <div id="feedback">{props.errors.name}</div>}

          <button className="btn" type="submit">
            ✔️
          </button>
        </form>
      )}
    />
  </div>
);

export default Form;
