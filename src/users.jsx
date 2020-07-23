import React from 'react';
import User from './user';

//Component which is a container for a list of User components. There will be a user component for each user 
const Users = props => {


    return(
        <div>
            {props.users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    )
};

export default Users;