import { useContext, useState } from "react";
import { PostContent } from "./PostContent";
import { UserContext } from "../utils/contexts/UserContext";

export const PostContainer = () => {
    const [data,setData] = useState("hello world");

    // consuming the context data
    const {username , setUserData} = useContext(UserContext);

    
  return (
  <div>
    <PostContent data = {data}/>
    {username}

    <button onClick={() => {
        setUserData((data) => ({...data , username : "ashutosh kumar"}))
    }}>Click Me</button>
  </div>);
};
