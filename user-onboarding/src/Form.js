import { useField } from "formik";
import React from "react";

const Form = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <div className={"inputWrapper"}>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input {...field} {...props} />
      {meta.error && meta.touched ? (
        <p className="errors">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default Form;
