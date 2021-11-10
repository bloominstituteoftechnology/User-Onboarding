import React from 'react';
export default function User({details}){
    return(
        <div className="user-container">
            <h3>Hello! {details.first_name} {details.last_name}!</h3>
            <h3>{details.email}</h3>
           
        </div>
    )
}