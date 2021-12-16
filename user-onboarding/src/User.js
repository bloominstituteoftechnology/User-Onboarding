import React from 'react'

export default function User({ details }) {
  if (!details) {
    return <h3>Working to fetch your user&apos;s details...</h3>
  }

  return (
    <div className='user container'>
      <p>{`${details.first_name} ${details.last_name}`}</p>
      <p>{details.email}</p>
    </div>
  )
}