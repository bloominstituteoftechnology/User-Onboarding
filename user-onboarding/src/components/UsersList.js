import React from "react";
import { css, cx } from "emotion";

const UsersList = (props) => {
  const { users } = props;
  return (
    <div
      className={css`
        padding: 30px;
        width: 33%;
        background-color: white;
        margin-right: 30px;
      `}
    >
      <h2>Users List</h2>
      <ul>
        {users.map((user) => {
          return <li>{user.email}</li>;
        })}
      </ul>
    </div>
  );
};

export default UsersList;
