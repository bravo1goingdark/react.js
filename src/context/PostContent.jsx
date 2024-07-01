import { useContext } from "react";
import { PostContentButton } from "./PostContentButton";
import { UserContext } from "../utils/contexts/UserContext";

export const PostContent = ({data}) => {
    const {email , setUserData} = useContext(UserContext);

  return <div>
       <PostContentButton data = {data} />
       {email}
       <button onClick={() =>{
        setUserData((data) => ({...data , email:"kumarashutosh@flash.co"}))
       }}>Update</button>
    </div>;
};
