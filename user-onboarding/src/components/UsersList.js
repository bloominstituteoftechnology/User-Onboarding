import React from "react";
import { css, cx } from "emotion";

const UsersList = (props) => {
  const { users, setUserForEditing } = props;
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
      <div
        className={css`
          list-style: none;
          justify-content: flex-start;
        `}
      >
        {users.map((user) => {
          return (
            <div
              className={css`
                display: flex;
                justify-content: flex-end;
                padding: 10px;
              `}
            >
              <div className={css``}>{user.email} </div>
              <div>
                <button
                  className={css`
                    margin-left: 20px;
                    background-color: gold;
                    align-self: auto;
                  `}
                  onClick={() => setUserForEditing(user)}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;
