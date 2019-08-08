import React from 'react';

 const User = ({ user }) => {
  return (
    <div className= "user-cards">
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>E-mail: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

 export default User;