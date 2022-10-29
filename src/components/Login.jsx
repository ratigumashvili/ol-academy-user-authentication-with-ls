import { useState } from "react";

const Login = () => {
  const [errMsg, setErrMsg] = useState(false);
  const [registeredUser, setRegisteredUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setRegisteredUser({ ...registeredUser, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("userdata"));

    if (
      registeredUser.email === user.email &&
      registeredUser.password === user.password
    ) {
      console.log("Welcome back, ", user.name);
      setErrMsg(false);
    } else {
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
