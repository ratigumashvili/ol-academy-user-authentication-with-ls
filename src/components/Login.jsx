import { useState } from "react";

const Login = ({ users, setNavigation, setLoggedInUser }) => {
  const [errMsg, setErrMsg] = useState(false);
  const [registeredUser, setRegisteredUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setRegisteredUser({ ...registeredUser, [e.target.name]: e.target.value });
  };

  const { email, password } = registeredUser;

  const handleLogin = (e) => {
    e.preventDefault();

    const checkUserExists = (existingEmail, existingPassword) =>
      users?.some(
        (account) =>
          account.email === existingEmail &&
          account.password === existingPassword
      );

    if (checkUserExists(email, password)) {
      setErrMsg(false);

      const newUser = { email: email };
      setLoggedInUser(newUser);

      localStorage.setItem("loggedIn", true);
      localStorage.setItem("lastLoggedInUser", JSON.stringify(newUser));
      setNavigation("endscreen");
    } else {
      setLoggedInUser("");
      setErrMsg("Username or password is incorrect!");
    }

    setRegisteredUser({ email: "", password: "" });
  };
  return (
    <>
      <h3>Login</h3>
      {errMsg && <p>{errMsg}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={registeredUser.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          autoCapitalize="off"
          value={registeredUser.password}
          onChange={handleInputChange}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
