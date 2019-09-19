import React from "react";
import { Formik } from "formik";

const Form = () => (
  <div>
    <h1>My Form</h1>

    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={props => (
        <form onSubmit={props.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
            placeHolder="Name"
          />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button type="submit">✔️</button>
        </form>
      )}
    />
  </div>
);

export default Form;
