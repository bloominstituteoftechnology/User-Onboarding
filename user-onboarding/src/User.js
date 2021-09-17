import React from 'react';

function User({ details }) {
  if (!details) {
    return <h3>Working fetching the User&apos;s details...</h3>
  }

  return (
    <div className='user container'>
      <h2>Name: {details.first_name} {details.last_name} </h2>
      <p>Email: {details.email}</p>
      <p>Password: confidential </p>

{/*       
      <p>Your Hobbies: {details.hobbies}</p>

      {
        !!details.hobbies && !!details.hobbies.length &&
        <div className='terms-conditional'>
          Terms of Service:
          <ul>
            {details.hobbies.map((likes, idx) => <li key={idx}>{likes}</li>)}
          </ul>
        </div>
      } */}

    </div>
  )
}

export default User