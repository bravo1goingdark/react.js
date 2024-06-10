import PropTypes from "prop-types";

export const User = ({user}) => {
    return (
        <>
            <span>User Id :{user.id} </span> <br />
            <span>Username :{user.username} </span> <br />
            <span>User Email : {user.email}</span> <br />
            <br />
        </>
    );
}

User.propTypes = {
    user : PropTypes.shape({
        id : PropTypes.number.isRequired,
        username : PropTypes.string.isRequired,
        email : PropTypes.string.isRequired
    })
}