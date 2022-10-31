import { useState } from "react";
import { Form, Row, Col, Input, Label, Button } from "reactstrap";

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
      <Form onSubmit={handleRegister}>
        <Row>
          <Col sm="12" md="6">
            <Label for="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </Col>
          <Col sm="12" md="6">
            <Label for="surname">Surname</Label>
            <Input
              type="text"
              id="surname"
              name="surname"
              value={surname}
              onChange={handleInputChange}
            />
          </Col>
          <Col sm="12" md="6">
            <Label for="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />
          </Col>
          <Col sm="12" md="6">
            <Label for="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              autoComplete="new-password"
              value={password}
              onChange={handleInputChange}
            />
          </Col>
        </Row>

        <Button color="primary" className="my-4" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Register;
