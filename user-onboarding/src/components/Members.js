import React from 'react'

export default function Member(props){
    const {details}=props
    if(!details){
        return<h3>Getting Member details...</h3>
    }
    return(
        <div key={details.id} className='member container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            
        </div>
    )
}