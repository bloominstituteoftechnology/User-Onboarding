import React from 'react';

// Import stylesheet
import './User.css';

function User( props) {
    const { details } = props;

    if (!details) {
        return <h2>Working on fetching current users...</h2>
    }

    return (
        <section>
            <h2>{details.username || details.first_name + ' ' + details.last_name}</h2>
            <p>Email: {details.email}</p>
        </section>
    )
}

export default User;