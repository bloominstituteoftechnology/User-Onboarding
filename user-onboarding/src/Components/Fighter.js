
import React from 'react'
import styled from 'styled-components'
// import neo from './images/neo.png'

const FighterCard = styled.div`
    background-color:white;
    padding: 5%;
    margin: 1% 2%;
    border-radius: 20px;
    background-image: url(${neo});
    background-position: 5%;
    background-repeat: no-repeat;
    background-size: auto 90%;
    min-width: 30%;
    height: 20vh;
`

const Name = styled.h1`
    margin: 0;
    padding: 0 0 0 150px;
`

const Email = styled.p`
    margin: 0;
    padding: 1.25rem 0 0 150px;
`

const Fighter = props => {

    const {fighter} = props

    return (
        <FighterCard>
            <Name>{fighter.first_name}</Name>
            <Email>{fighter.email}</Email>
        </FighterCard>
    )
}

export default Fighter