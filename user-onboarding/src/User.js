import React from 'react'

function User({ details }) {
  if(!details) {
    return <h3>Working fetching your member&apos;s details...</h3>
  }

  return (
    <div className='user container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
    
      {
        !!details.TermsOfService && !!details.TermsOfService.length &&
        <div>
          TermsOfService:
          <ul>
            {details.TermsOfService.map((like, id) => <li key={id}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default User
