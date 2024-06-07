import { UserFavouriteFood } from "./UserFavouriteFood";

export function UserProfile () {
    return (
        <div>
            <p>User Name : Ashutosh Kumar</p>
            <div>
                <span>Email:</span>
                <span>kumarashutosh34169@gmail.com</span>
            </div>
            <section>
                <span>Favourite Foods:</span>
                <br />
                <ul>
                    <li>Pizza</li>
                    <li>Burger</li>
                    <li>Shushi</li>
                </ul>
            </section>
            <UserFavouriteFood />
        </div>

        

    );
}