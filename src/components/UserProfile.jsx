import { UserFavouriteFood } from "./UserFavouriteFood";
import { UserUsername } from "./UserUsername";
import PropTypes from 'prop-types';
import styles from '../css/email.module.css'



export function UserProfile (props) {
    return (
        <div>
            {/* <p>User Name : Ashutosh Kumar</p> */}
            <UserUsername username = {props.username}/>
            <div>
                <b>Email:</b>
                <span className={styles.email}>{props.email} </span>
                <br />
                <b>Age:</b>
                <span>{props.age}</span>
            </div>
            {/* <p>{props.callme()}</p>  */}

            <section>
                <span className={styles.food}>Favourite Foods:</span>
                <br />
                <ul>
                    <li>Pizza</li>
                    <li>Burger</li>
                    <li>Shushi</li>
                </ul>
            </section>
            <UserFavouriteFood />
        </div>
    );
}

// validating props using prop-types
UserProfile.propTypes = {
    username : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
    email : PropTypes.string.isRequired,
    callme : PropTypes.func.isRequired,
    isMarried : PropTypes.bool.isRequired,
    favFood : PropTypes.arrayOf(
        PropTypes.shape({
            name : PropTypes.string.isRequired,
            id : PropTypes.number.isRequired
        })
    )
}