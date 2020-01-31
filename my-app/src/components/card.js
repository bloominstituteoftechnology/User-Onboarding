import React from 'react';

const Card = (props) => {
    console.log(props);
    return (
      <div className="usersInfo">
        {props.user.map(info => (
          <div >
            <h2 className="users" key={data.id}>{info.username}</h2>
            <p className="email" key={data.email}>{info.email}</p>
            <p className="password" key={data.password}>{info.password}</p>
          </div>
        ))}
      </div>
    )
  };

export default Card;