import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map(user => {
        return console.log("TEST", user);
      })}
    </div>
  );
};

export default UserList;
