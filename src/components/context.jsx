import { UserContext } from "../utils/contexts/UserContext";
import { PostContainer } from "../context/PostContainer";
import { useEffect, useState } from "react";
import { useFetchUser } from "../utils/hooks/useFetchUser";
import { Link , useNavigate } from "react-router-dom";

export const Context = () => {
  const {fetchedUser , loading ,error} = useFetchUser(1);
  const [user, setUserData] = useState({
    // id: 1,
    // username: "ashutosh",
    // email: "kumarashutosh34269@gmail.com",
    // displayName: "don@9852",
  });
  const navigate = useNavigate();
  useEffect(() => {
    // check error should be !error 
    if (fetchedUser && !loading && error) {
      setUserData(fetchedUser);
      navigate("/");
    }

   }, [fetchedUser , loading , error , navigate]);

  return (
    <>
      <nav>
        <li><Link style={{color : "white"}} to= '/user'>Users</Link></li>
        <li><Link style={{color : "white"}} to= '/blog'>Blog</Link></li>
        <li><Link style={{color : "white"}} to= '/'>Home</Link></li>
      </nav>
      <label htmlFor="Data">Enter Value</label>
      <input type="text" onChange={(e) => {
        if (e.target.value.length > 5) {
          navigate('/blog');
        }
      }} />
      <UserContext.Provider value={{ ...user, setUserData } }>
        <div>{loading ? "Loading...." : <PostContainer />}</div>
      </UserContext.Provider>
    </>
  );
};
