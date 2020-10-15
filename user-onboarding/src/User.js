import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching user details...</h3>
  }

  return (
    <div>
      <h2>Name: {details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
      
    </div>
  )
}
//<p>Terms: {details.terms === 'true'}</p>
export default User;