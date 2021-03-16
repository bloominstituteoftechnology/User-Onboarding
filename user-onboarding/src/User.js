import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your member&apos;s details...</h3>
  }

  return (
    <div className='user container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>password: {details.password}</p>
      

      {
        !!details.TermsOfService && !!details.TermsOfService.length &&
        <div>
          TermsOfService:
          <ul>
            {details.TermsOfService.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default User
