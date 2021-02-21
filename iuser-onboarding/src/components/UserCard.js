import React from 'react'

export default function UserCard(props){
    
    const { id, first_name, last_name, title, createdAt, email } = props.submitee[0]
    console.log("These are userCard props: ", props.submitee[0].first_name)
    return(
        <div className="usercard-info">
            <h1>
                This is UserCard.js
            </h1>
            <div className="user-information" key={id}>
              <p className="user-name">{first_name} {last_name}</p>
              <p>{email}</p>
              <p>{title}</p>
              <p>{createdAt}</p>
            </div>
            
        </div>

         
 
    )
}