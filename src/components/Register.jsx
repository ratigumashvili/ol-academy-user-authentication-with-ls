import { useState } from "react";

const Register = ({ setNavigation, handleNavigation }) => {
  const [errMsg, setErrMsg] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value.trim() });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (name.length !== 0 && email.length !== 0 && password.length !== 0) {
      localStorage.setItem("userdata", JSON.stringify(user));
      setUser({
        name: "",
        email: "",
        password: "",
      });
      handleNavigation();
      setNavigation("login");
    } else {
      setErrMsg("Fields should not be empty");
    }
  };
  return (
    <>
      <h3>Register</h3>
      {errMsg && <p>{errMsg}</p>}
      <form autoComplete="off" onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="off"
          value={user.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={user.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          autoComplete="off"
          value={user.password}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Register;
