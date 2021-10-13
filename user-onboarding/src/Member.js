import React from 'react'

function Member({ details }) {
  if (!details) {
    return <h3>Trying to gather  your team member&apos;s details...</h3>
  }

  return (
    <div className='member container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
      <p>Preference: {details.preference}</p>
      

      {
        !!details.hobbies && !!details.hobbies.length &&
        <div>
          Hobbies:
          <ul>
            {details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default Member;