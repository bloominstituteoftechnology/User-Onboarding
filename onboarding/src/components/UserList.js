export default function UserList(props) {
  const { newUser } = props;
  console.log(newUser)
  return (
    <div>
    <p>{newUser.map(e => <p>{e.name}</p>)}</p>
    </div>
  );
}
