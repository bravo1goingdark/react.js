import { User } from "./UserDetail";

export const UserDetail = () => {
    const mockUser = [{
        id : 1,
        username : "Ashutosh Kumar",
        email : "kumarashutosh34169@gmail.com"
      }, {
        id : 2,
        username : "Aakash Singh Rathore",
        email : "kumaraakash34169@gmail.com"
      },{
        id : 3,
        username : "Mayank shekhar",
        email : "kumarmayank4169@gmail.com"
      } , {
        id : 4,
        username : "sunny mastergamer",
        email : "kumarsunny34169@gmail.com"
      }
    ]

    return  (
        <div>
            {/* dynamic rendering */}
            {mockUser.map(user => {
                return (
                    // key prop is necessary , it helps react identify each react element
                // <React.Fragment key = {user.id}>       
                //   <span>User Id :{user.id} </span> <br />
                //   <span>Username :{user.username} </span> <br />
                //   <span>User Email : {user.email}</span> <br />
                //   <br />
                // </React.Fragment>

                <User key={user.id} user = {user} />
                );
            })}
        </div>
    );
}