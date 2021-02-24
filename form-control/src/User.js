import React from "react";

const User = ({ user }) => {
  const dogs = ["Labs", "Poodles", "Bulldogs"];

  return (
    <div>
      <h1>{user.name}</h1>
      <p>
        {" "}
        Your friend {user.name}.{" "}
        {user.favDog ? `they like ${dogs[user.favDog]}` : "They dont like dogs"}{" "}
        and his password is {user.password ? user.password : "N/A"}{" "}
      </p>
      {user.pic ? <img src={user.pic} alt="user pic" /> : "NO PIC GIVEN"}
    </div>
  );
};

export default User;
