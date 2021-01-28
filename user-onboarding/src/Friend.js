import React from "react"

export default function Friend ({details}){
  if(!details){
    return <h3>Working on retreiving information</h3>
  }




  return(
    <div className="friend-con">
      <h2>{details.first_name}</h2>
      <p>{details.email}</p>
      <p>{details.state}</p>
      <p>{details.food}</p>
    
    </div>
  )



}
