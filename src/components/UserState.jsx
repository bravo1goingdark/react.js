import { useState } from "react"
import { UserDetailState } from "./UserDetailState"
import { Form } from "./Form"


export const UserState = () => {
    const [user , setUser] = useState([
        {
            id : 1,
            username : "Ashutosh Kumar",
            email : "kumarashutosh34169@gmail.com"
        }, {
            id : 2,
            username : "Aakash Singh Rathore",
            email : "kumaraakash34169@gmail.com"
        }
    ])

    return <div>
        <Form setUser = {setUser}/>
        <br />
        {user.map((usereach) => <UserDetailState key={usereach.id} user={usereach} setUsers = {setUser} />)}
    </div>
}