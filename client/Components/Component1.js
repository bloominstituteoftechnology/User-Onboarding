import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Test from './Test.js';

const users = [
  { id: 1, name: 'Emily'},
  { id: 2, name: 'Josh'},
  { id: 3, name: 'Steve'}, 
];

const Component1 = () => {
  return (
      <Router>
        <div className="A1">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/test?name=josh#hashing">Test 1</Link>      
          <Link to={{
            pathname: '/test',     // path-name
            search: '?name=steve', // query-string
            hash: '#hashing',
            state: { // can inject arbitrary info here
              from: 'home-page'
            }
          }}>Test 2</Link>

          <Link to="/test/1">Test 3</Link>
        </div>

        <div className="B1">
          <Route exact path="/"   component={Home}/>
          <Route path="/about"    component={About}/>
          <Route exact path="/test"     component={Test}/>
          <Route path="/test/:id" render={(props) => {

            const { id } = props.match.params;
            const user = users.find(usr => usr.id == id);
            console.clear();
            console.log('id: ', id, ',  user: ', user);

            return (<h1>Inline Component</h1>);
          }}/> 
        </div>
      </Router>
  );
};
export default Component1;