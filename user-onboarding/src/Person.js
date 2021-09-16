import React from 'react';

function Person({ details }) {
  if (!details) {
    return <h3>Working fetching the Person&apos;s details...</h3>
  }

  return (
    <div className='person container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>

      
      <p>Your Hobbies: {details.hobbies}</p>

      {
        !!details.hobbies && !!details.hobbies.length &&
        <div className='terms-conditional'>
          Terms of Service:
          <ul>
            {details.hobbies.map((likes, idx) => <li key={idx}>{likes}</li>)}
          </ul>
        </div>
      }

    </div>
  )
}

export default Person