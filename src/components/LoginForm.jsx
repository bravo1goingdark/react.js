// handling events in reactjs


export const LoginForm = () => {
    return(
        <form onSubmit={(e) => {
            e.preventDefault(); // prevent browser default behaviour
            
            // we cannot directly manipulating dom element beacause it goes againt the react core principal
            // const username = document.getElementById("username");
            // const password = document.getElementById("password");

            const username = new FormData(e.target);
            const password = new FormData(e.target);
            console.log(`Username : ${username.get("username")} Password : ${password.get("password")}`)
        }}>
            <label htmlFor="username">Usename : </label><br />
            <input onChange={(e) => {
                // console.log(e.target) // returns the actual html input element
                console.log(e.target.value); // returns the value in that target element
            }} name="username" id="Username" /><br />

            <label htmlFor="password">Password :</label><br />
            <input onChange={(e) => {
                console.log(e.target.value);
            }} type= "password" name="password" id="password" /> <br />
                       
            <button onClick={() => {
                console.log("submited")
            }}> Login</button>
        </form>
    );
}