import React, { useState, useEffect } from 'react'

export default function User(props) {
    const { name, email } = props;
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )
}