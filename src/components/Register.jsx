import { useState } from "react";

const Register = ({ users, setUsers, setNavigation }) => {
  const [errMsg, setErrMsg] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const { name, surname, email, password } = userInput;

  const handleInputChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value.trim() });
  };

  const checkEmail = (newEmail) =>
    users?.some((user) => user.email === newEmail);

  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      surname: surname,
      email: email,
      password: password,
    };

    if (!name || !surname || !email || !password) {
      setErrMsg("Fields should not be empty");
      return;
    }
    if (checkEmail(newUser.email)) {
      setErrMsg("Email allready registered");
      return;
    }
    setErrMsg("");
    setUsers([...users, newUser]);

    localStorage.setItem("userdata", JSON.stringify([...users, newUser]));
    setUserInput({
      name: "",
      surname: "",
      email: "",
      password: "",
    });
    setNavigation("login");
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
          name="surname"
          placeholder="Surname"
          autoComplete="off"
          value={surname}
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
