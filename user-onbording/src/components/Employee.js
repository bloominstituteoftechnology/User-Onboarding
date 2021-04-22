import React from 'react'

function Employee({ details }) {
    if (!details) {
      return <h3>Working fetching your friends details...</h3>
    }
  
    return (
      <div className='friend container'>
        <h2>{details.name}</h2>
        <p>Email: {details.email}</p>
        <p>Password: {details.password}</p>
        
  
        {
          !!details.service && !!details.service.length &&
          <div>
            Service:
            <ul>
              {details.service.map((like, idx) => <li key={idx}>{like}</li>)}
            </ul>
          </div>
        }
      </div>
    )
  };
  
  export default Employee
  