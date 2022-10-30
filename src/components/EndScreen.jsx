import React from "react";

const EndScreen = ({ loggedInUser, setNavigation }) => {
  const logOut = () => {
    setNavigation("registration");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("lastLoggedInUser");
  };
  return (
    <>
      <h1>EndScreen</h1>
      {loggedInUser && <h2>Hello, {loggedInUser.email}</h2>}
      <button
        onClick={() => {
          logOut();
        }}
      >
        Go home, your're drunk
      </button>
    </>
  );
};

export default EndScreen;
