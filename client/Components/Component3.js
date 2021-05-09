import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import Home from './Home.js';

// ==============================================

const postAllFriends = () => {


  const newFriend = {
    "username": "johndoe",
    "email": "qwerty@q.com",
    "role": "tx",
    "civil": "single",
    "hobbies": ["a", "b"]
  };


  useEffect(() => {
    axios
      .post(`http://localhost:5000/friends`, newFriend)
      .then(response => {
        console.log('response: ', response);
      })
      .catch(error   => console.error('Server Error', error));
  }, []);

};

// ==============================================

const GetAllFriends = () => {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => setFriends(response.data))
      .catch(error   => console.error('Server Error', error));
  }, []);


  // return <div>{friends[0].username}</div>;
  return <div>{friends.map(x => <p key={x.id}>{x.username}</p>)}</div>;
};

// ==============================================

const Component3 = () => {

  

  return (
      <Router>
        <div className="A3">
          <Link to="/">Home</Link>
          <Link to="/friends">/friends</Link>

          <button onClick={postAllFriends}>
            Post Friend
          </button>
        </div>

        <div className="B3">
          <Switch>

            <Route path="/friends">
              <GetAllFriends />
            </Route>
            
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
};
export default Component3;