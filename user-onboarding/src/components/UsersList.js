import React from "react";
import { css, cx } from "emotion";
import UserCard from "./UserCard";

const UsersList = (props) => {
  const { deleteUser, users, setUserForEditing } = props;
  return (
    <div
      className={css`
        border-radius: 5px;
        padding: 30px;
        width: 33%;
        background-color: white;
        margin-right: 30px;
        color: gray;
      `}
    >
      <h2>Users List</h2>
      <div
        className={css`
          list-style: none;
          justify-content: flex-start;
        `}
      >
        {users.map((user) => {
          return (
            <UserCard
              deleteUser={deleteUser}
              setUserForEditing={setUserForEditing}
              user={user}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;
