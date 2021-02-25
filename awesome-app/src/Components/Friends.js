import React from 'react'

export default function Friends(props) {
    const {members} = props;
    

    const show = members.map(member => {
        return(
            <div key={member.id}>
                <p>{member.name}</p>
                <p>{member.email}</p>
                <p>{member.password}</p>
                <p>{member.terms}</p>
            </div>
        )
    })
    return show
}