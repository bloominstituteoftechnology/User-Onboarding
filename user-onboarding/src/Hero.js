import React from 'react'


export default function Hero ({ details }){
    if (!details) {
        return <h3>Still working on finding hero's for your party!</h3>
    }

    return(
        
        <div>
            <h3>{details.name}</h3>
            <img src={details.avatar} alt={details.name} />
            <p>Email: {details.email}</p>
            <p>roll: {details.roll}</p>
            
        </div>
    )
}