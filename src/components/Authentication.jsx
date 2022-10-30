import { useState, useEffect } from "react";
import Register from "./Register";
import Login from "./Login";
import EndScreen from "./EndScreen";

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
      {navigation === "registration" ? (
        <>
          <Register
            setNavigation={setNavigation}
            users={users}
            setUsers={setUsers}
          />
          <p>Allready have an account?</p>
          <button onClick={() => setNavigation("login")}>Login</button>
        </>
      ) : (
        <>
          <Login
            users={users}
            setLoggedInUser={setLoggedInUser}
            setNavigation={setNavigation}
          />
          <p>Do not have an account yet?</p>
          <button onClick={() => setNavigation("registration")}>
            Register
          </button>
        </>
      )}
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default Authentication;
