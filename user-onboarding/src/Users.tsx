import React from 'react';
import { User } from './App';

function Users(props: { user: User }): JSX.Element {
  return (
    <div>
      <p>First Name: {props.user.first_name}</p>
      <p>Last Name: {props.user.last_name}</p>
      <p>Email: {props.user.email}</p>
    </div>
  );
}

export default Users;
