import React from 'react';

// userinfo is the only prop from App.js that is passed though
function User({ userinfo }) {
  if (!userinfo) {
    return <h3>Retrieving user info...</h3>;
  }
  return (
    <div className='friend container'>
      <h3>
        {userinfo.first_name} {userinfo.last_name} {userinfo.name}
      </h3>
      <p>Email: {userinfo.email}</p>
    </div>
  );
}

export default User;