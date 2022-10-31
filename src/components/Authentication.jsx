import { useState, useEffect } from "react";
import Register from "./Register";
import Login from "./Login";
import EndScreen from "./EndScreen";
import { Button } from "reactstrap";

const Authentication = () => {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({});
  const [navigation, setNavigation] = useState("registration");

  useEffect(() => {
    if (localStorage.getItem("userdata")) {
      const usersData = JSON.parse(localStorage.getItem("userdata"));
      setUsers(usersData);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      const isUser = JSON.parse(localStorage.getItem("loggedIn"));
      setNavigation("endcreen");
      setIsLoggedIn(isUser);
    } else {
      setNavigation("registration");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("lastLoggedInUser")) {
      const user = JSON.parse(localStorage.getItem("lastLoggedInUser"));
      setLoggedInUser(user);
    } else {
      setLoggedInUser({});
    }
  }, []);

  if (navigation === "endscreen" || isLoggedIn) {
    return (
      <EndScreen
        loggedInUser={loggedInUser}
        setNavigation={setNavigation}
        navigation={navigation}
      />
    );
  }

  return (
    <div>
      <h1>Authentication</h1>
      {navigation === "registration" && (
        <>
          <Register
            setNavigation={setNavigation}
            users={users}
            setUsers={setUsers}
          />
          <span>Allready have an account?</span>
          <Button color="link" onClick={() => setNavigation("login")}>
            <b>Login</b>
          </Button>
        </>
      )}
      {navigation === "login" && (
        <>
          <Login
            users={users}
            setLoggedInUser={setLoggedInUser}
            setNavigation={setNavigation}
          />
          <span>Do not have an account yet?</span>
          <Button color="link" onClick={() => setNavigation("registration")}>
            <b>Register</b>
          </Button>
        </>
      )}
    </div>
  );
};

export default Authentication;
