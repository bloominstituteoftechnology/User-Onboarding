import React from "react";

export default function User({ users }) {
  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <h2>{user.first_name}</h2>
            <h2>{user.last_name}</h2>
            <p>{user.email}</p>
            <p>{user.password}</p>
          </div>
        );
      })}
    </div>
  );
}
