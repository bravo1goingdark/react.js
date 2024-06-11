import { useState } from "react";


export const RegisterForm = () => {
    // usestate returns an array which contains value and a setter function
    // it accept an initial state for the value
    // its setter function is officialy calleed as dispatcher function
    // const [username , setUsername] = useState("");
    // const [password , setPassword] = useState("");
    // const [displayname , setDisplayName] = useState("");
    
    // instead of creating multiple state we can pass all formFields as an object 
    const [formFields , setFormFields] = useState({
        username : "",
        password : "",
        displayname : ""
    });

    const isDisabled = !formFields.username || !formFields.password || !formFields.displayname;



    return (
        <form>
            <label htmlFor="username">Username : </label><br />
            {/* instead of directly passing the value as username we can pass in the object.fieldName */}
            <input onChange={(e) => 
                setFormFields((prevState) => ({...prevState ,username : e.target.value }))} 
                id="Username" value={formFields.username} />
            <span>{formFields.username}</span>
            <br />

            <label htmlFor="password">Password :</label><br />
            <input value={formFields.password} type= "password" 
                 onChange={(e) => setFormFields((prevState) => ({...prevState ,password : e.target.value }))} 
                id="password" /> 
            <span>{formFields.password}</span>
            <br />

            <label htmlFor="displayName">DisplayName :</label><br />
            <input value={formFields.displayname} 
                onChange={(e) => setFormFields((prevState) => ({...prevState ,displayname : e.target.value }))} 
                id="displayName" 
            /> 
            <span>{formFields.displayname}</span>
            <br />
            <button disabled = {isDisabled}>sign up</button>
        </form>
    );

}


