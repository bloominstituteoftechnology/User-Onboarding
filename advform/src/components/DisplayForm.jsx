import React from "react";

const DisplayForm = props => {
    console.log('THE PROPS YOU NEED:', props);
return (
    <div className="note-list">
      {props.displayUser.map(addAUser => (
        <div className="note" key={addAUser.id}>
          <h2>{addAUser.name}</h2>
          <h2>{addAUser.email}</h2>
          <h2>{addAUser.password}</h2>
        </div>
      ))}
    </div>
  );
};

export default DisplayForm;
