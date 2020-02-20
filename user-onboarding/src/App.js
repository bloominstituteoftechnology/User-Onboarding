import React from 'react';
import logo from './logo.svg';

import UserForm from './components/UserForm';
import './App.css';

const testInfo = {
  name: "thomas",
  email: "thomas@domain.com",
  termsOfService: true
}
function App() {
  return (
    <div>
      <UserForm {...testInfo} />
    </div>
  );
}

export default App;
