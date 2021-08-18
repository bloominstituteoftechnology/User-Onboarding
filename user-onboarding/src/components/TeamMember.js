import React from 'react';

const TeamMember = (props) => {
    const { teamMember } = props;
    return (
        <div>
            <h3>{teamMember.first_name} {teamMember.last_name}</h3>
            
        </div>
    )
}

export default TeamMember;