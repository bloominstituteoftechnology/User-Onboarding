import React from "react";

export default function User(props) {
  const { details } = props;

  return (
    <div>
      <h2>{details.name}</h2>
      <span>{details.email}</span>
    </div>
  );
}
