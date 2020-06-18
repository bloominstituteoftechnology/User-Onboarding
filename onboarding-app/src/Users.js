import React from "react";
import { Card } from "./Styles";

export default function User(props) {
  const { details } = props;

  return (
    <Card>
      <div>
        <h2>{details.name}</h2>
        <h4>{details.role}</h4>
        <span>{details.email}</span>
      </div>
    </Card>
  );
}
