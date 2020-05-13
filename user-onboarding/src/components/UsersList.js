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
      <ul
        className={css`
          list-style: none;
        `}
      >
        {users.map((user) => {
          return (
            <li>
              {user.email}{" "}
              <span>
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
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
