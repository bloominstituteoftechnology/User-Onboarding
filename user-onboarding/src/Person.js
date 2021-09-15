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
      <p>Terms of Service: {details.terms}</p>

      {
        !!details.accept === true &&
        <div>
          Terms of Service:
          <ul>
            {details.accept.map((x, idx) => <li key={idx}>{x}</li>)}
          </ul>
        </div>
      }

    </div>
  )
}

export default Person