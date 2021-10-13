import React from "react";

export default function Emp(details) {
    if (!details) {
        return <h3>Finding new employees details!</h3>
    }

    return (
        <div>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
        </div>
    )
}