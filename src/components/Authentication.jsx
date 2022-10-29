import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const Authentication = () => {
  const [navigation, setNavigation] = useState("registration");
  const [notification, setNotification] = useState({
    text: "Allready have an account?",
    button: "Login",
  });
  const handleNavigation = () => {
    if (navigation === "registration") {
      setNavigation("login");
      setNotification({
        ...notification,
        text: "Do not have an account yet?",
        button: "Register",
      });
    } else {
      setNavigation("registration");
      setNotification({
        ...notification,
        text: "Allready have an account?",
        button: "Login",
      });
    }
  };

  return (
    <div>
      <h1>Authentication</h1>
      {navigation === "registration" ? (
        <Register
          setNavigation={setNavigation}
          handleNavigation={handleNavigation}
        />
      ) : (
        <Login />
      )}
      <div>
        {notification.text}
        <button onClick={() => handleNavigation()}>
          {notification.button} 123
        </button>
      </div>
    </div>
  );
};

export default Authentication;
