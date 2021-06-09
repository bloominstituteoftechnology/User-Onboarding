/* eslint-disable jsx-a11y/anchor-is-valid */
const User = (props) => {
  const { name, email, role } = props;
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey">
          <div className="card-content white-text">
            <span className="card-title">{name}</span>
            <p>{role}</p>
            <p>{email}</p>
          </div>
          <div className="card-action">
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              <a href={`mailto:${email}`}>
                Email {name}
                <i class="material-icons right">send</i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
