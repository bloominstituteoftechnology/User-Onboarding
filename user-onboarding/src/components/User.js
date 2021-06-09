/* eslint-disable jsx-a11y/anchor-is-valid */
const User = (props) => {
  const { name, email } = props;
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{name}</span>
            <p>
              email: {email}
            </p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
