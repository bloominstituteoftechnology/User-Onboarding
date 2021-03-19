import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Users = (props) => {
  const {user} = props;
  return (
    <div className='mt-5'>
      {user.map((e, i) => {
        return (
          <span
            key={i}
            className='text-primary border h1 py-2 px-5 mx-2'>{e.name}</span>
        )

      })}
    </div>
  );
};
