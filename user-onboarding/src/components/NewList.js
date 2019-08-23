import React from "react";

const NewList = props => {
  return (
    <div>
      {props.newList.map(member => {
        return (
          <div key={member.id}>
            <br />

            <h2>{member.name}</h2>
            <h3>{member.email}</h3>
            <p>{member.password}</p>

            <br />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default NewList;