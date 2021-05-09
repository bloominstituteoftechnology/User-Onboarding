import React from 'react';

const Test = ({location, match, history}) => {
  console.clear();

  // props.location container info about where we are at
  console.log('location: ', location);

  // props.match contains info about how the route matched the current location
  console.log('match: ', match);

  // props.history contains methods to change location imperatively (similar to HTML5 history API)
  console.log('history: ', history);

  console.log('location.state: ', location.state);
  
  return (
    <div>Test Component</div>
  );
};
export default Test;