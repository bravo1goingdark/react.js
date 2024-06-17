import { useState } from "react";
import PropTypes from 'prop-types';

export const Form = ({setUser}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [counter, setCounter] = useState(3);
  //  adding user
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        const newUser = {
            id:counter,
            username,
            email
        }
        setCounter((currCount) => currCount + 1);
        setUser((currUserState) => [...currUserState , newUser]);
        
      }}>
        
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button>Add User</button>
      </form>
    </div>
  );
};

Form.propTypes = {
    setUser : PropTypes.func.isRequired
}
