import { UserContext } from "../utils/contexts/UserContext";
import { PostContainer } from "../context/PostContainer";
import { useState } from "react";

export const Context = () => {
  const [user, setUserData] = useState({
    id: 1,
    username: "ashutosh",
    email: "kumarashutosh34269@gmail.com",
    displayName: "don@9852",
  });

  return (
    <>
      <UserContext.Provider value={{ ...user, setUserData } }>
        <PostContainer />
      </UserContext.Provider>
    </>
  );
};
