import React from "react";
// import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import UserOnboardingForm from "../components/UserOnboardingForm";

export default function UserList(props) {
  console.log(props);

  return (
    <div>
      <h1>Users:</h1>

      <div className="users-added">
        {props.userList.map((user) => {
          return <p>{user.name} {user.email}</p>;
        })}
      </div>
    </div>
  );
}
