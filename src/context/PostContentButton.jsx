import { useContext } from "react"
import { UserContext } from "../utils/contexts/UserContext"



export const PostContentButton = ({data}) => {
    const userContextData = useContext(UserContext);
    return <div>
        {userContextData.displayName}
    </div>
}