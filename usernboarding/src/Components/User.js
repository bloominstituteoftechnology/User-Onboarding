import React from 'react';

const User = (props) => {
  const [name, email, password, terms] = props;

  const passwordIsSaved = password.length >= 6 ? true : false;

  return (
    <div id='user=info'>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Password on file? {passwordIsSaved}</div>
      <div>Agreed to terms? {terms}</div>
    </div>
  );
};

export default User;
