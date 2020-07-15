import React from "react";

export default function UserList(props) {
  return (
    <div className="users-list">
      {props.users.map(user => (
        <div className="users" key={user.id}>
          <h2>{user.username}</h2>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
}