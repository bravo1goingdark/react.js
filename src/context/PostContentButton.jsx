import { useContext } from "react"
import { UserContext } from "../utils/contexts/UserContext"



export const PostContentButton = () => {
    const {id ,name,setUserData} = useContext(UserContext);
    return <div>
        {`ID : ${id}`} <br />
        {name}
        <button onClick={() => {
            setUserData((data) => ({...data , displayName:"hans landa"}))
        }}>Update displayName</button>
    </div>
}