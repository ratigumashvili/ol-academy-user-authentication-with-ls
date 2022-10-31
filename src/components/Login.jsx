import { useState } from "react";
import { Form, Row, Col, Input, Label, Button } from "reactstrap";

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

      const getUser = (email) => users?.filter((item) => item.email === email);
      const newUser = getUser(email);
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
      <Form onSubmit={handleLogin}>
        <Row>
          <Col sm="12" md="6">
            <Label for="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              value={registeredUser.email}
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
              value={registeredUser.password}
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        <Button color="primary" className="my-4" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
