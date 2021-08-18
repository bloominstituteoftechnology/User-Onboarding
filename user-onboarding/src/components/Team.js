import React from 'react';
import TeamMember from './TeamMember';

const Team = (props) => {
    const { teamMembers } = props;
    return (
        <div>
            <h2>Here are the Team Members!</h2>
            {teamMembers.map((member, index) => {
                return  <TeamMember teamMember={member} key={index} /> 

            })}
            
        </div>
    )
}

export default Team;