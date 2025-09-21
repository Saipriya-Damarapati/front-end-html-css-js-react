import React, { useState } from "react";
import Greeting from "./features/Greeting";

const App = () => {
  const[isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial'}}>
      <Greeting isLoggedIn={isLoggedIn} />
      {
        isLoggedIn ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <button onClick={handleLoginClick}>Login</button>
        )
      }
    </div>
  );
}

export default App;