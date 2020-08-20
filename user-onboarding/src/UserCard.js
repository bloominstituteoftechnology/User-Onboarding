import React from "react";

function User(props) {
  const { details,deleteUser,editUser } = props;

  if (!details) {
    return <h3>Fetching User Data...</h3>;
  }
  return (
    <div className="cardContainer">
      <div className="userCard">
        <h3>
          User: {details.first_name} {details.last_name}
        </h3>
        <p>Email: {details.email}</p>
        <button className={`editBtn${details.id}`} onClick={() => deleteUser(details.id)}>Delete</button>
        <button className={`deleteBtn${details.id}`} onClick={() => editUser(details.id)}>Edit</button>
      </div>
    </div>
  );
}

export default User;
