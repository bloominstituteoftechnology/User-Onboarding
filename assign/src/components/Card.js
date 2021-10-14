import React from 'react'

export default function Card (props){
    const { details, } = props

  if (!details) {
    return <h3>Working fetching your team&apos;s details...</h3>
  }

    return (
        <div className='team container'>
            <h2>{details.firstname}, {details.lastname}</h2>
            <p>Email: {details.email}</p>
            <p>Civil: {details.civil}</p>
            <p>Role: {details.role}</p>
            
        {
        !!details.tos && !!details.tos.length &&
        <div>
          TOS:
          <ul>
            {details.tos.map((like, i) => <li i={props.id}>{like}</li>)}
          </ul>
        </div>
        }

        </div>
    )
}
