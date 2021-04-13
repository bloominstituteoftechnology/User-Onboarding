import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <div>
        <h1> iUser Onboarding - Advanced React Forms </h1>
         <h1>PT 25 Lambda School</h1>
        <nav>
            <Link to="/"> Home </Link>
            <Link to="/login"> Log In </Link>
            <Link to="/users"> USERS </Link>
        </nav>
          
        </div>

         
 
    )
}