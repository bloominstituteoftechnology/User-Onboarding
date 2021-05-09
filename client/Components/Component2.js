import React, {useState, useEffect, } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home.js';

// ==============================================

const users = [
  { id: 1, name: 'Emily'},
  { id: 2, name: 'Josh'},
  { id: 3, name: 'Steve'}, 
];

// ==============================================

const fetchUser = id => Promise.resolve( users.find(usr => usr.id == id) );

// ==============================================

const HitDatabase = (props) => {
  const { id } = props.match.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(id).then( usr => setUser(usr) );
  }, [id]);

  if (user)
    return (<div>The name is {user.name}</div>);
  else 
    return (<div>user is falsy!</div>);
};

// ==============================================

const Component2 = () => {
  return (
      <Router>
        <div className="A2">
          <Link to="/">Home</Link>
          <Link to="/test/1">Test 3</Link>
        </div>

        <div className="B2">
          <Route exact path="/"   component={Home}/>
          <Route path="/test/:id" component={HitDatabase}/>
        </div>
      </Router>
  );
};
export default Component2;