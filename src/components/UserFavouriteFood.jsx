import { createElement } from "react";

export function UserFavouriteFood () {
    return createElement("section" , null , 
        <div>
            <span>More Favourite Foods:</span>
            <ol>
                <li>Kadhai Paneer</li>
                <li>Sahi Paneer</li>
                <li>Chinese Noodles</li>
            </ol>
        </div>
    )
}