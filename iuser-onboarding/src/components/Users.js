import React from "react";
import { Link } from "react-router-dom";
//import UserCard from "./UserCard";

export default function Users({ submitee }) {
  console.log("These are User props: ", submitee);
  return (
    <div className="user-container">
      {submitee.map((eachSubmitee) => {
        return (
          // Creates a link linking us "to" the path or component to be rendered
          <Link to={`/user/${eachSubmitee.id}`}>
            <div className="user-information" key={eachSubmitee.id}>
              <p className="user-name">
                {eachSubmitee.first_name} {eachSubmitee.last_name}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
