import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching User details...</h3>
  }

  return (
    <div className='User container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.Password}</p>
      <p>Terms Of Service: {details.TermsOfService}</p>

    </div>
  )
}

export default User
