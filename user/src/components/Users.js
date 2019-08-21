import React, { useState, useEffect} from 'react';
import axios from 'axios'
import {axiosWithAuth} from './auth/AxiosAuth';


const Users = () => { 
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
        .then(res => 
            // console.log(res.data))
            setUser(res.data))
            //first_name, last_name, email, id, avatar
        
        .catch(err => console.log(err))
}, [])



return(
    <div>
       <h2>List of School Users</h2> 
        {user.map(data => (
            <p>{data.id}</p>
        ))}
    

    </div>
  
  
)

}
export default Users;
