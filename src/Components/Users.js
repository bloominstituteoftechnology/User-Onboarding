import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching user&apos;s details...</h3>
  }

  return (
    <div class='user-div'>
      <h2 class='user-name'>{details.name}</h2>
      <p>Email: {details.email}</p>
    </div>
  )
}

export default User;