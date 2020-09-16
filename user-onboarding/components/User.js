import React from "react";

function User({ details }) {
  if (!details) {
    return <h3>Grabbing your user &apos;s details...</h3>;
  }

  return (
    <div className="user container">
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.password}</p>
      <p>Civil: {details.termsofservice}</p>

    </div>
  );
}

export default User;