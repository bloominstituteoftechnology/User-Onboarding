import React from 'react';
import styled from 'styled-components';

import UserForm from './components/UserForm';
import './App.css';

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`

const testInfo = {
  name: "pauleen",
  email: "pauleen@domain.com",
  password: "Bestpassword%123",
  termsOfService: true,
  membership: "gold",
  color: "orange",
  role: "tank"
}


function App() {
  return (
    <Container>
      <UserForm {...testInfo} />
    </Container>
  );
}

export default App;
