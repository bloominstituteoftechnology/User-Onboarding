import Axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import UserForm from './UserForm';
import Users from './Users';

export interface User {
  first_name: string;
  last_name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    Axios.get('https://reqres.in/api/users').then((res: AxiosResponse) => {
      console.log(res.data.data);
      setUsers(res.data.data);
    });
  }, []);

  const addUser = (user: User): void => {
    const ammendedUserArr = [user, ...users];

    setUsers(ammendedUserArr);
  };

  console.log(users);

  return (
    <Container className="App">
      <h1>USER-ONBOARDING</h1>
      <UserForm addUser={(input: User) => addUser(input)} />
      <Users user={users[0]} />
    </Container>
  );
}

export default App;
