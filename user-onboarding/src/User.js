import React from 'react'

function User({ values }) {
  if (!values) {
    return <h3>Working fetching your User&apos;s details...</h3>
  }

  return (
    <div className='member container'>
      <h2>Name: {values.username}</h2>
      <p>Email: {values.email}</p>
    </div>
  )
}

export default User
