function User (props){
const {user} = props;
return(
    <div className='user-list'>
        name: {user.name}
        password: {user.password}
        Email: {user.Email}
        serviceTerms: {user.serviceTerms}
    </div>
);
}
export default User;