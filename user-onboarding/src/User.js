import React from "react";

export default function User({ details }){

    if (!details) {
        return <h3>Working...</h3>
      }


    return(
        <div>
        <h2>{details.username}</h2>
        <p>Email: {details.email}</p>
        </div>
    )
}