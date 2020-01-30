import React, {useState} from "react";

import "./App.css";
import UserOnboardingForm from "./components/UserOnboardingForm";
import UserList from "./components/UserList";

function App() {

  const [userList, setUserList] = useState([]);
  return (
    <div className="App">
      <UserOnboardingForm userList={userList} />
      <UserList userList={userList} setUserList={setUserList}/>
    </div>
  );
}

export default App;
