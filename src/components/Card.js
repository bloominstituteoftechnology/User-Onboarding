import React from "react";
import './Card.css';

const Card = props => {
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