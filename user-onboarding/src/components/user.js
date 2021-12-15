import React from 'react'

function User(props) {
  const  { details } = props;
  
  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>
  }

  return (
    <div className='user container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
    </div>
  )
}

export default User;