import PropTypes from "prop-types";
import { useState } from "react";

export const UserDetailState = ({user , setUsers}) => {
    const [isEditing , setIsEditing] = useState(false);
    const [username , setUsername] = useState(user.username);
    const [email , setEmail] = useState(user.email);


    return (
        <>  
            <div>
                <button onClick={() =>setIsEditing((currstate) => !currstate) }>Edit</button>

                <button onClick={() => {
                    setUsers((currenUserState) => {
                       return currenUserState.filter((currUser) => currUser.id !== user.id)
                    });
                }
                }>Delete</button> 

                {isEditing && <><button onClick={() => {
                    setUsers((currenUserState) => {
                        return currenUserState.map((currenUser) => {
                            if (currenUser.id === user.id) {
                                return { ...currenUser, username, email };
                            }
                            return currenUser;
                        });
                    });
                    setIsEditing(false);
                } }>Save</button><br /></>}
            </div>
            <span>User Id :{user.id} </span> <br />

            
            <span>Username :{isEditing ? <input 
                name="username" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}            
            /> : user.username} </span> <br />



            <span>User Email : {isEditing ? <input 
                name="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}            
            /> : user.email}</span> <br />
            <br />
        </>
    );
}

UserDetailState.propTypes = {
    user : PropTypes.shape({
        id : PropTypes.number.isRequired,
        username : PropTypes.string.isRequired,
        email : PropTypes.string.isRequired
    }).isRequired,
    setUsers : PropTypes.func.isRequired
}