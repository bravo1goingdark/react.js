export const Render = () => {
    const isAuthenticated = true;
    // "VERIFIED" , "NOT_VERIFIED" , "ACCOUNT_DISABLED"
    const USER_STATUS = null;

    // return isAuthenticated ? <h1>Your are logged In</h1>: <h1>You are not logged In</h1>

    if (USER_STATUS === "VERIFIED" ) {
        return (
            <span style={{color : 'green' , fontWeight : 'bolder'}}>You are verified and click to enter dashboard</span>
        );
    } else if (USER_STATUS === "NOT_VERIFIED" ) {
        return (
            <span style={{color : 'red' , fontWeight : 'bolder'}}>You are not verified! please verify yourself</span >
        );
    } else if (USER_STATUS === "ACCOUNT_DISABLED" ) {
        return (
            <span style={{color : 'greenyellow' , fontWeight : 'bolder'}}> Your account is disabled! contact sys admin </span>
        );
    } 
    return (
        <span style={{color : 'beige' , fontWeight : 'bolder'}}>Not a valid status</span>
    );
}