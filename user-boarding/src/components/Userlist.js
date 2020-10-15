import React from 'react'

export default function UserList({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
    </div>
  )
}

