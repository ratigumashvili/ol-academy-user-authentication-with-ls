import { useState, useEffect } from "react";
import Register from "./Register";
import Login from "./Login";
import EndScreen from "./EndScreen";

const Authentication = () => {
  const [navigation, setNavigation] = useState("registration");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("userdata")) {
      const usersData = JSON.parse(localStorage.getItem("userdata"));
      setUsers(usersData);
    }
  }, []);

  const [loggedInUser, setLoggedInUser] = useState("");
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

  if (navigation === "endscreen") {
    return (
      <EndScreen loggedInUser={loggedInUser} setNavigation={setNavigation} />
    );
  }

  return (
    <div>
      <h1>Authentication</h1>
      {navigation === "registration" ? (
        <Register
          setNavigation={setNavigation}
          handleNavigation={handleNavigation}
          users={users}
          setUsers={setUsers}
        />
      ) : (
        <Login
          users={users}
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
          setNavigation={setNavigation}
        />
      )}
      <div>
        {notification.text}
        <button onClick={() => handleNavigation()}>
          {notification.button}
        </button>
      </div>
      <div>
        {users?.map((user, i) => (
          <p key={i}>
            <span>
              <b>Name:</b> {user.name}
            </span>{" "}
            <span>
              <b>Email:</b> {user.email}
            </span>
            <span>
              <b>Pass:</b> {user.password}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Authentication;
