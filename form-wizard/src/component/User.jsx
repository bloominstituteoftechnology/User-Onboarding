import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <img src={details.avatar} alt=""/>
      <h2>Name: {details.first_name} {details.last_name} </h2>
      <p>Email: {details.email}</p>
    </div>
  )
}

export default User
