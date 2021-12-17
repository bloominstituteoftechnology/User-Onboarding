import React from "react";

export default function User(props){
const { user } = props;

console.log(props);

    return (
        <>
        <div className='user'>
            <h3>Name: {user.name}</h3>
            <h3>Email: {user.email}</h3>
        </div>
        <h2></h2>
        </>
    )
}