
import React from 'react'
import styled from 'styled-components'

import Fighter from './Fighter'

const FighterCard = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`

const Fighters = props => {

    const {fighters} = props
    // console.log(`transferred`, fighters)

    return (
        <FighterCard>
            {fighters.map(fight => {
                return (
                    <Fighter key={fight.id} fighter={fight} />
                )
            })}
        </FighterCard>
    )
}

export default Fighters