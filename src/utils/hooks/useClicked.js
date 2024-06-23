import { useEffect } from "react";

// for creating custom hooks use camelcase function name
// preceed any custom hooks with use --> common convention

export const useClicked = () => {
    const handleClick = () => {
        console.log("Window Resized");
    }
    useEffect(() => {
        window.addEventListener("resize", handleClick);

        return () => {
            window.removeEventListener("resize" , handleClick);
            console.log("Event Listner Removing....")
        }
    },[])
}

export const customUseState = (defaultValue ) => {
    let state = defaultValue;

    function setterFunction(newValue) {
        state = newValue;
    }


    return [defaultValue , setterFunction];

}