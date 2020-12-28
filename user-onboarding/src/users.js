import React from "react"
import axios from "axios"
import {useState, useEffect } from "react"
export default function Users(props){
    const [usersData,setUsersData] = useState([])

  useEffect(() => {
  axios.get(`https://reqres.in/api/users`)
 .then(data => {
  // usersData = data.data
  // console.log(data)
   setUsersData(data.data.data)
  // console.log(usersData)
}, []);
    
 

  })
  
 
  
    
return (
    <>
   
    {usersData.map((user) =>{
        return (
                <div>
                    <h1>{user.first_name}</h1>
                    <h2>{user.last_name}</h2>
                    <h2>{user.email}</h2>
                

                 </div>
           
        )

        })}


        
      

    </>
)










}