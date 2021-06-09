/* eslint-disable jsx-a11y/anchor-is-valid */
const User = (props) => {
  const { name, email } = props;
  return (
    <div className="user">
      <h2>{name}</h2>
      <a href="#">{email}</a>
    </div>
  );
};

export default User;
