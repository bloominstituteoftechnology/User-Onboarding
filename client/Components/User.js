import React from 'react';

const User = ({user}) => {
  const {name, age, email, password, terms_of_service, radio, check1, check2, drop} = user;

  return (
    <>
      <div className="card">
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{email}</h1>
        <h1>{password}</h1>
        <h1>{terms_of_service}</h1>
        <h1>{radio}</h1>
        <h1>{check1}</h1>
        <h1>{check2}</h1>
        <h1>{drop}</h1>
      </div>
    </>
  );
};

export default User;