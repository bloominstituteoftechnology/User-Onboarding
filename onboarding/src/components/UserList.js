import { element } from "prop-types";
import UserCard from './UserCard'
import styled from 'styled-components'

const UsersBlock = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    aligns-content: flex-start;
    justify-content: flex-start;
`

const UserList = ({ listOfUsers }) => {

    return(
        <UsersBlock>
        {listOfUsers.map(element => {
            return(
            <UserCard key={element.email} element={element}/>
            )
        })}
        </UsersBlock>

    )
    ;
}

export default UserList