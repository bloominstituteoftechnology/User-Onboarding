import React from "react";
import { css, cs } from "emotion";

const UserCard = (props) => {
  const { deleteUser, user, setUserForEditing } = props;
  return (
    <div
      className={
        ("user-card",
        css`
          border: 1px solid lightgray;
          border-radius: 5px;
          padding: 20px;
          margin: 10px 0;
          display: flex;
          justify-content: space-between;
          box-shadow: 5px 5px 5px lightgray;
        `)
      }
    >
      <div className="info-container">
        <div
          className={
            ("some-claas",
            css`
              font-size: 1em;
              font-weight: bold;
            `)
          }
        >
          {user.name}
        </div>
        <p>{user.role}</p>
        <p>{user.goals}</p>
        <button
          className={css`
            margin-left: 20px;
            background-color: gold;
            margin-left: auto;
          `}
          onClick={() => setUserForEditing(user)}
        >
          Edit
        </button>
      </div>
      <div
        className={
          ("right-card-container",
          css`
            display: flex;
            flex-direction: column;
          `)
        }
      >
        <div
          className={
            ("image",
            css`
              align-self: end;
            `)
          }
        >
          <img
            src="https://source.unsplash.com/random/100x100"
            alt=""
            className={css`
              border-radius: 50%;
            `}
          />
          <button
            className={css`
              margin-left: 20px;
              background-color: red;
              margin-left: auto;
              display: block;
              /* align-self: end; */
            `}
            onClick={() => deleteUser(user)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
