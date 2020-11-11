import React from "react";

export default function Input(props) {
  return (
    <label htmlFor="name">
      {props.label}
      <input {...props} />
    </label>
  );
}
