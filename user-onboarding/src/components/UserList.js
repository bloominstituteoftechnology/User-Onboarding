import React from 'react'; 
import UserCard from './UserCard';


function UserList(props) {

    return(
        <div>
            {props.users.map((item, index) => {
                return (
                    <UserCard key={index} user={item} />
                )
            })}
                
        </div>
    )
    
}   
  

export default UserList;