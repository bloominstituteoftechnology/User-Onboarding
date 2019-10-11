import React from "react";

function User(props) {
  const user = props.user
  return (
    <div>
      <h1>{user.username}</h1>
      <p>{user.email}</p>
    </div>
  )
}

export default User;
