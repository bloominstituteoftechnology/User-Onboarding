import React from 'react'

const Employee = details => {
  if (!details) {
    return <h3>Working fetching your employee&apos;s details...</h3>
  }

  return (
      <>
      <div>
          
      </div>
    <div className='employee-container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
      {/* <p>Union status: {details.unionStatus}</p> */}

      {
        !!details.termsOfAgreement && !!details.termsOfAgreement.length &&
        <div>
          termsOfAgreement:
          <ul>
            {details.termsOfAgreement.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
    </>
  )
}

export default Employee
