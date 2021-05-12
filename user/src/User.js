import React from 'react'

function User({ details }) {
    if (!details) {
      return <h3>Fetching details...</h3>
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

  export default User