import styled from 'styled-components'

const Card = styled.div`
    padding: 0 2%;
    font-size: 1rem;
    max-width: 30%;
    border: 2px solid grey;
    border-radius: 3px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 2% 2% 0 0;
`

const H2 = styled.h2`
    font-size: 1.3em;
    font-variant: small-caps;
    color: orange;

`

const UserCard = ({ element}) =>{
    const { name, email } = element
    return(
        <Card>
            <H2>{name}</H2>
            <p>{email}</p>
        </Card>
    )



}


export default UserCard