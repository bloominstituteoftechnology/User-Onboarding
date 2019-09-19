import React from "react";
import styled from "styled-components";
const UserStyled = styled.div`
  background-color: #7b920a;
  color: white;
  margin: 1em;
  padding: 1em;
`;

const Users = props => {
  const { userList } = props;
  return userList.map(user => {
    return (
      <UserStyled id={user.id}>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>{user.password}</div>
        <div>{user.checkbox}</div>
      </UserStyled>
    );
  });
};

export default Users;
