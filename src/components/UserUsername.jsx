import PropTypes from "prop-types";
import "../css/username.css"
// can also destructure username from props by passing {username} as argument in UserUsername function
export function UserUsername(props) {
    console.log(props); // print whatever props is passed down in an object
    return(
        // Fragments: <> </>
        <>   
            {/* inner styles  */}
            <b style={{color: "red" , fontSize : "22px"}}>Username: </b>
            {/* Evaluating Props */}
            {/* styles using className */}
            <span className="username">{props.username}</span>  
        </>
    );
}

UserUsername.propTypes = {
    username : PropTypes.string.isRequired
}