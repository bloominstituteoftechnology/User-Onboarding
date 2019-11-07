import React, { useState } from "react";
import './Card.css';

const Card = props => {
    const [users, setUsers] = useState([])
    return (
      <div className="card-container">
        {props.users.map(card => (
          <div className="card" key={card.id}>
            <p>name: {card.name}</p>
            <p>email: {card.email}</p>
            <p>password: {card.password}</p>
          </div>
        ))}
      </div>
    );
  };
  
export default Card;