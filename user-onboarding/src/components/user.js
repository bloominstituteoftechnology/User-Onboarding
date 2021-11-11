import React from "react";

function User({ details }) {
  if (!details) {
    return <h3>Working on fetching those user details for you...</h3>;
  }

  return (
    <div className='user container'>
      <h2>
        Welcome {details.firstName} {details.lastName}
      </h2>
      <p>Contact at {details.email}</p>
      {!!details.tos && !!details.tos.length && (
        <div>
          Terms of Service:
          <ul>
            {details.tos.map((like, idx) => (
              <li key={idx}>{like}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default User;
