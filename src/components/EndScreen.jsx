import React from "react";

const EndScreen = ({ loggedInUser, setNavigation }) => {
  const { name, surname } = loggedInUser[0];
  const logOut = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("lastLoggedInUser");
  };
  return (
    <>
      <h1>EndScreen</h1>
      {loggedInUser && (
        <h3>
          Hello, {name} {surname}
        </h3>
      )}
      <button
        onClick={() => {
          logOut();
          setNavigation("registration");
        }}
      >
        Go home, your're drunk
      </button>
    </>
  );
};

export default EndScreen;
