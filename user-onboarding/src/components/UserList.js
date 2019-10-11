import React from "react";
import User from "./User.js";

export default function UserList(props) {
  const users = props.users;
  return (
    <div> 
      {
        users.map(user => <User key={user.id} user={user} /> )
      }
    </div>
  )
}