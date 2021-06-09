/* eslint-disable jsx-a11y/anchor-is-valid */
const User = (props) => {
  const { name, email } = props;
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{name}</span>
            <p>email: {email}</p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
