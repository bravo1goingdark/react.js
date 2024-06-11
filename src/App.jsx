import { LoginForm } from "./components/LoginForm";
import { UserProfile } from "./components/UserProfile";
import { Render } from "./components/condRendering";

import { UserDetail } from "./components/dynamicRendring";
import { RegisterForm } from "./components/state";

export default function App () {
    const callme = () => {
        return alert("Hello World");
    }
    return (
        <div>
            <h1>Root Component</h1>
            {/* <LoginForm /> */}
            <RegisterForm />
            <Render />
            {/* Passing email as props */}
            <UserProfile 
               username = "Ashutosh" 
               age = {20} 
               email = "ak0704176@gmail.com"
               callme = {callme}
               isMarried = {true}
               favFood = {[{name : "Pizaa",id : 1234},{name : "shushi",id : 6498}]}
            />

            <UserDetail />
        </div>
    );
}