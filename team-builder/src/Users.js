import React from 'react'

function Users({ details }) {
  // if (!details) {
  //   return <h3>Working fetching your users&apos;s details...</h3>
  // }

  return (
    <div className='user container'>
      {details.map(detail => {
        return (
          <div>
        <p>Name: {detail.first_name}</p>
        <p>Email: {detail.email}</p>
        <p>Password: {detail.id}</p>
        </div>
        )
      })}
      
      
      {/* {
        !!details.termOfService && !!details.termOfService.length &&
        <div>
          Term of Service:
          
            {details.termOfService.map((like, idx) => <li key={idx}>{like}</li>)}
          
        </div>
      } */}

    </div>
  )
}

export default Users
