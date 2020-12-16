import React from 'react'

function User({ details }){
  if (!details) {
    return <h3>Working on fetching your User&apos; details...</h3>
  }

  return(
    <div className='user container'>
      <h2>User Information</h2>
      <h3>{details.name}</h3>
      <p>Password: {details.password}</p>
      <p>Email: {details.email}</p>
    </div>

  )

}

export default User;