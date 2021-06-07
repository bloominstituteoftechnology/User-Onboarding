import { element } from "prop-types";

const UserList = ({ listOfUsers }) => {

    return(
        <ul>
        {listOfUsers.map(element => {
            return(
            <li key={element.email}>{element.name}</li>
            )
        })}
        </ul>
    )
    ;
}

export default UserList