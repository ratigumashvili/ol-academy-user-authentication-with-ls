import { useState } from "react";

const Register = ({ handleNavigation }) => {
  const [errMsg, setErrMsg] = useState(false);
  const [users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = userInput;

  const checkEmail = (newEmail) =>
    users?.some((user) => user.email === newEmail);

  const handleInputChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value.trim() });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      email: email,
      password: password,
      id: Date.now(),
    };

    if (!name || !email || !password) {
      setErrMsg("Fields should not be empty");
      return;
    }
    if (checkEmail(newUser.email)) {
      setErrMsg("Email allready registered");
      return;
    }
    setErrMsg("");
    setUsers([...users, newUser]);

    localStorage.setItem("userdata", JSON.stringify(users));
    setUserInput({
      name: "",
      email: "",
      password: "",
    });
    // handleNavigation();
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
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Register;
