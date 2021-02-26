import React,{useEffect} from 'react'
import styled from 'styled-components'

const MembersStyle = styled.div`
    border: 4px solid blue;
    width: 200px;
    margin:auto;
    padding:10px;
    margin-top:10px;
`
export default function Friends(props) {
    const {members} = props;
    let count = 0;

    useEffect(()=>{
      console.log(members)
    },[members])

    const show = members.map(member => {
        count +=1;
       

        return(
            <MembersStyle key={count}>
                <p>Name: {member.name}</p>
                <p>Email: {member.email}</p>
                <p>Password: {member.password}</p>
                <p>Agreed with terms: {member.terms ? 'Yes' :'No' }</p>
            </MembersStyle>
        )
    })
    return show
}