import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background: lightgray;
  width: 100px;
`;

const UserCard = ({ user }) => {
  return (
    <Div className="userCard">
      <h2>{user.name}</h2>
      <h4>{user.email}</h4>
    </Div>
  );
};

export default UserCard;
