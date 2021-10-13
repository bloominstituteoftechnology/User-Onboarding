import React from 'react'

function Person({ details }) {
  if (!details) {
    return <h3>Working fetching your Person details...</h3>
  }

  return (
    <div className='person container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
    </div>
  )
}

export default Person