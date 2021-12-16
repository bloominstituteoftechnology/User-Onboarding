import React from 'react'

function User({ details }) {

  return (
    <div>
      <h2>Name {details.first_name}{'  '}{details.last_name}</h2>
      <p>Email: {details.email}</p>
    
      
    </div>
  )
}

export default User