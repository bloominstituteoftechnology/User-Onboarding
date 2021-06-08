import React from 'react';

const PrintUsers = ({ user }) => {

    

    return(
        <pre>
            {JSON.stringify(user, null, 128)}
        </pre>
    )
}

export default PrintUsers;