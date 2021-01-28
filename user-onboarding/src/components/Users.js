import React from "react";

function Users(props) {
  const errorMessage = props.errors[props.name];
  return (
    <div>
      <label htmlFor="name">
        {props.label}
        <input {...props} />
      </label>
      {errorMessage.length !== 0 && <p>{errorMessage}</p>}
    </div>
  );
}

export default Users;
