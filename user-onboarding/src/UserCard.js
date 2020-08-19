import React from "react";

function User(props) {
  const { details } = props;

  if (!details) {
    return <h3>Fetching User Data...</h3>;
  }
  return (
    <div>
      <h3>
        User: {details.first_name} {details.last_name}
      </h3>
      <p>Email: {details.email}</p>
    </div>
  );
}

export default User;
