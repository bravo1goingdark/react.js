import { UserContext } from "../utils/contexts/UserContext";
import { PostContainer } from "../context/PostContainer";
import { useEffect, useState } from "react";
import { useFetchUser } from "../utils/hooks/useFetchUser";

export const Context = () => {
  const {fetchedUser , loading ,err} = useFetchUser(1);
  const [user, setUserData] = useState({
    // id: 1,
    // username: "ashutosh",
    // email: "kumarashutosh34269@gmail.com",
    // displayName: "don@9852",
  });
  console.log(fetchedUser);
  useEffect(() => {
    // check err should be !err 
    if (fetchedUser && !loading && err) {
      setUserData(fetchedUser);
    }

  }, [fetchedUser , loading , err]);

  return (
    <>
      <UserContext.Provider value={{ ...user, setUserData } }>
        <PostContainer />

      </UserContext.Provider>
    </>
  );
};
