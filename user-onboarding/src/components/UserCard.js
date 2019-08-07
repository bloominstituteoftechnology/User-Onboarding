import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background: lightgray;
  width: 250px;
  margin: auto;
  border-radius: 30px;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;
const H1 = styled.h1`
  font-style: italic;
`;

const UserCard = ({ user }) => {
  return (
    <Div className="userCard">
      <H1>User Card</H1>
      <h2>{user.name}</h2>
      <h4>{user.email}</h4>
    </Div>
  );
};

export default UserCard;
