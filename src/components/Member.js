import React from 'react'

export default function Member({ details }) {
  if (!details) {
    return <h3>Working fetching your member&apos;s details...</h3>;
  }

  return (
    <div className="member container">
      <h2>{details.first_name} {details.last_name}</h2>
      <p>{details.email}</p>
      <p>{details.tosAgree ? 'They have agreed to the T.O.S.' : `They haven't agreed to the T.O.S. yet`}</p>
    </div>
  );

}
