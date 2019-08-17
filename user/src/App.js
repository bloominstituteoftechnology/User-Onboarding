import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* navlinks */}
      <NavLink to='/register' className='nav'>Register</NavLink> 
      <NavLink to='/login' className='nav'>Login</NavLink>
    
 

      {/* Routes */}
      <Route exact path='/register' component={Register}    />
      <Route path='/login' component={Login} />
    </div>
  );
}

export default App;
