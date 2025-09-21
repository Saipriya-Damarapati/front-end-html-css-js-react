import React from 'react';
const Greeting = ( {isLoggedIn}) => {

    if(isLoggedIn) {
        return <h2>Welcome back, Priya</h2>;
    }
    return <h2>Please sign in</h2>;
};

export default Greeting;