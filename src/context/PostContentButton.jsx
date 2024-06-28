import { useContext } from "react"
import { UserContext } from "../utils/contexts/UserContext"



export const PostContentButton = () => {
    const {displayName,setUserData} = useContext(UserContext);
    return <div>
        {displayName}
        <button onClick={() => {
            setUserData((data) => ({...data , displayName:"hans landa"}))
        }}>Update displayName</button>
    </div>
}