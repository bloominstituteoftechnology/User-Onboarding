import React from "react";

export default function User({ users }) {
  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <h2>{user.first_name & user.last_name}</h2>
            <p>{user.email}</p>;
          </div>
        );
      })}
    </div>
  );
}
