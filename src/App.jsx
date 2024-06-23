import { Form } from "./components/Form";
import { UserProfile } from "./components/UserProfile";
import { UserState } from "./components/UserState";
import { Render } from "./components/condRendering";
import { Context } from "./components/context";

import { UserDetail } from "./components/dynamicRendring";
import { RegisterForm } from "./components/state";
import { FormUseEffect } from "./components/useEffect";
import { PostContainer } from "./context/PostContainer";
import { UserContext } from "./utils/contexts/UserContext";
import { useClicked } from "./utils/hooks/useClicked";

export default function App() {
  const callme = () => {
    return alert("Hello World");
  };
  return (
    <div>
      <h1>Root Component</h1>

      <Context />

      {/* <FormUseEffect /> */}
      {/* <LoginForm /> */}
      {/* <UserState />
            <RegisterForm />
            <Render /> */}
      {/* Passing email as props */}
      {/* <UserProfile 
               username = "Ashutosh" 
               age = {20} 
               email = "ak0704176@gmail.com"
               callme = {callme}
               isMarried = {true}
               favFood = {[{name : "Pizaa",id : 1234},{name : "shushi",id : 6498}]}
            /> */}

      {/* <UserDetail /> */}
    </div>
  );
}
