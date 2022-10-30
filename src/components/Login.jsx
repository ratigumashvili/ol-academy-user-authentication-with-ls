import { useState } from "react";

const Login = ({ users }) => {
  const [errMsg, setErrMsg] = useState(false);
  const [registeredUser, setRegisteredUser] = useState({
    email: "",
    password: "",
  });
  const [loggedInUser, setLoggedInUser] = useState("");

  const handleInputChange = (e) => {
    setRegisteredUser({ ...registeredUser, [e.target.name]: e.target.value });
  };

  const { email, password } = registeredUser;

  const handleLogin = (e) => {
    e.preventDefault();

    // const users = JSON.parse(localStorage.getItem("userdata"));

    const checkUserExists = (existingEmail, existingPassword) =>
      users?.some(
        (account) =>
          account.email === existingEmail &&
          account.password === existingPassword
      );

    const valueIs = (value) => (object) =>
      Object.values(object).some((v) => v === value);

    if (checkUserExists(email, password)) {
      setLoggedInUser(users.filter(valueIs(email)));
      // console.log("Welcome back, ", loggedInUser[0]?.name);
      setErrMsg(false);
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
      {loggedInUser && <h3>Hello, {loggedInUser[0]?.name}</h3>}
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
