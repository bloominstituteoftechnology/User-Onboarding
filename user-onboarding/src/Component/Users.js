import React from "react";
import styled from "styled-components";
const UserStyled = styled.div`
  background-color: #7b920a;
  color: white;
  margin: 1em;
  padding: 1em;
`;

//New users to be displayed when posted to API
const Users = props => {
  const { userList } = props;
  //map through the user array
  return userList.map(user => {
    return (
      // render the new users
      <UserStyled id={user.id}>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>{user.password}</div>
      </UserStyled>
    );
  });
};

export default Users;
