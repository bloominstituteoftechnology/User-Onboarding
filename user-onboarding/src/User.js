import React from 'react'

export default function User({ details }) {
  if (!details) {
    return <h3>Working to fetch your user&apos;s details...</h3>
  }

  return (
    <div className='user container'>
      <h3>First Name: {details.first_name}</h3>
      <h3>Last Name: {details.last_name}</h3>
      <p>Email: {details.email}</p>
    </div>
  )
}