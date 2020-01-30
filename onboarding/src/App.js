import React, {useState} from "react";

import "./App.css";
import UserOnboardingForm from "./components/UserOnboardingForm";
import UserList from "./components/UserList";

function App() {

  const [userList, setUserList] = useState([
    {
      name: "John Smith",
      email: "J@s.com",
      password: "12345ty",
      terms:false
    },
    {
      name: "Jane Brown",
      email: "J@B.com",
      password: "password1",
      terms:false
    }
  ]);
  return (
    <div className="App">
      <UserOnboardingForm userList={userList} />
      <UserList 
      userList={userList} 
      setUserList={setUserList}/>
    </div>
  );
}

export default App;
