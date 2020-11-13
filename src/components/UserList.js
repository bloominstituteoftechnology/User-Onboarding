import React from 'react';

function UserList (props) {
  const {userList} = props;
// console.log(userList[0].id); //TODO userList is an ARRAY!
console.log(userList);

  return (
    <>
      <h2>See our team below!</h2>
      <div className="user-card">
        {userList.map((user, ix) => {
          return (
            <>
              <h4>{user.name}</h4>
              <p className="role">
                You can say hi to {user.name} at {user.email}!
              </p>
            </>
          );
        })}
      </div>
    </>
  );
}

export default UserList;