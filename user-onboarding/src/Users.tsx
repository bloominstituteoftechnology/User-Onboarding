import React from 'react';
import { User } from './App';

function Users(props: { user: User }): JSX.Element {
  const { user } = props;
  return (
    <div>
      <p>First Name: {user?.first_name}</p>
      <p>Last Name: {user?.last_name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}

export default Users;
