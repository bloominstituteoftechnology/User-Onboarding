import React from 'react'

function Member({ details }) {
  if (!details) {
    return <h3>Working fetching your member details...</h3>
  }

  return (
    <div className='member container'>
      <p>First Name: {details.first_name}</p>
      <p>Last Name: {details.last_name}</p>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
    </div>
  )
}

export default Member; 