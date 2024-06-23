import { useContext } from "react";
import { PostContentButton } from "./PostContentButton";
import { UserContext } from "../utils/contexts/UserContext";

export const PostContent = ({data}) => {
    const userContextData = useContext(UserContext);
  return <div>
       <PostContentButton data = {data} />
       {userContextData.email}
    </div>;
};
