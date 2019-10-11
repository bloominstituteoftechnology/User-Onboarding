import React from 'react';
import FormikOnboardingForm from "./components/Form.js";
import UserList from "./components/UserList.js";

function App() {
  const [users, setUsers] = React.useState([]);
  return (
    <div className="App">
      <FormikOnboardingForm users={users} setUsers={setUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
