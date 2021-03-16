import React from 'react';


export const Users = (props) => {
  const {user} = props;
  return (
    <h1>{user.map(e => <h1>{e.name}</h1>)}</h1>
  );
};
