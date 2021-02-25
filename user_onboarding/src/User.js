import React from 'react'

export default function User({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }
console.log(details)
  return (
    <div className='friend container'>
      <h4>{`${details.first_name} ${details.last_name}`}</h4>
      <pre>Email: {details.email}</pre>
      <pre>Password: {details.password}</pre>
      <pre>TOS: {details.tos}</pre>
    </div>
  )
}

