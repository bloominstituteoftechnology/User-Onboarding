import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your User&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.first_name}</h2>
      <p>Email: {details.email}</p>
      {
        !!details.terms && !!details.terms.length &&
        <div>
          Terms:
          <ul>
            {details.terms.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default User