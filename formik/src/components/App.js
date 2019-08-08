import React from 'react';
import './App.css';
import FormikUserForm from './Form';
import User from './User';

 class App extends React.Component {
  constructor() {
    super();

     this.state = {
      users: [],
    };
  }

   updateUser = user => {
    this.setState({ users: [...this.state.users, user] });
  };

   render() {
    return (
      <>
        <FormikUserForm updateUser={this.updateUser} />
        {this.state.users.length > 0 &&
          this.state.users.map(user => {
            return <User user={user} />;
          })}
      </>
    );
  }
}

 export default App;
