import React from 'react';

const TeamMember = (props) => {
    const { teamMember } = props;
    return (
        <div>
            <h3>{teamMember.first_name} {teamMember.last_name}</h3>
            <p>Email: {teamMember.email}</p>
            <p>Role: {teamMember.role}</p>
        </div>
    )
}

export default TeamMember;