import React from "react";
import { List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";

const UserContainer = styled.div`
  margin: 60px 15px 0 15px;
`;

const UserDetails = props => {
  return (
    <UserContainer>
      <List>
        <List.Item>
          <List.Icon name="users" />
          <List.Content>{props.user.name}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a href="mailto:jack@semantic-ui.com">{props.user.email}</a>
          </List.Content>
        </List.Item>
        <p>{props.user.role}</p>
        <br />
      </List>
    </UserContainer>
  );
};

export default UserDetails;