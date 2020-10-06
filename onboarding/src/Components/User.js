import React from 'react';


function User(props) {
  
  return (
    <div className="User" >
      <h2>{props.user.name}</h2>
      <p>email: {props.user.email}</p>
    </div>
  );
}

export default User;
