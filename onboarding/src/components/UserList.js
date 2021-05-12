export default function UserList({ newUser }) {
  console.log(newUser);

  if (newUser.length === 0) {
    return <h1 className='text-center'>Please Enter a New User</h1>
  }





  return (
    <div>
    <p>{newUser.map(user => <p>{user.name}</p>)}</p>
    </div>
  );
}
