import React from "react";

const EndScreen = ({ loggedInUser, setNavigation }) => {
  return (
    <>
      <h1>EndScreen</h1>
      {loggedInUser && <h3>Hello, {loggedInUser[0]?.name}</h3>}
      <button onClick={() => setNavigation("registration")}>
        Go home, your're drunk
      </button>
    </>
  );
};

export default EndScreen;
