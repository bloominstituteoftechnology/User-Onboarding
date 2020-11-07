import React from "react";

function DisplayUsers(props) {
  console.log(props);
  return (
    <div>
      <h2>{`${props.users.name} just signed up!`}</h2>
    </div>
  );
}

export default DisplayUsers;
