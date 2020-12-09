import React from 'react';
import { User } from './App';

function Users(props: { user: User }): JSX.Element {
  return (
    <div>
      <p>First Name: </p>
      <p>Last Name: </p>
      <p>Email: </p>
    </div>
  );
}

export default Users;
