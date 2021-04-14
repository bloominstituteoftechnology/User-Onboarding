import React, { useState } from 'react';
import User from './User.js';

const Users = (props) => {
  const { users } = props;

  return (
    <div className='users-container-wrapper'>
      <h2>Current Users:</h2>
      {users.map((userObj) => {
        return (
          <User
            key={userObj.email}
            name={userObj.name}
            email={userObj.email}
            password={userObj.password}
            terms={userObj.terms}
          />
        );
      })}
    </div>
  );
};

export default Users;
