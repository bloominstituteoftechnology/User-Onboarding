import React from 'react';

const User = ({ details }) => {
  if (!details) {
    return <h3>Loading new user information...</h3>;
  }
  return (
    <div>
      <div className='userContainer'>
        <div className='userInfo'>
          <h2>{details.name}</h2>
          <p>Email: {details.email}</p>
          <p>Password: {details.password}</p>
          <p>Status: {details.status}</p>
          <p>Role: {details.role}</p>
          {!!details.terms && !!details.terms.length && (
            <div>
              Accepted Terms:
              <ul>
                {details.terms.map((obj, idx) => (
                  <li key={idx}>{obj}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
