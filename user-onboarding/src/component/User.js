import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your details...</h3>
  }

  return (
    <div className='user-container'>
      <h2>{details.name}</h2>
      <h3>{details.email}</h3>
      <h3>{details.Password}</h3>
    </div>
  )
}

export default User