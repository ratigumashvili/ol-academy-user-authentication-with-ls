import { Button } from "reactstrap";

const EndScreen = ({ loggedInUser, setNavigation }) => {
  const logOut = () => {
    setNavigation("registration");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("lastLoggedInUser");
  };
  return (
    <>
      <h1>EndScreen</h1>
      {loggedInUser && <h2>Hello, {loggedInUser.email}</h2>}
      <Button
        color="danger"
        className="my-4"
        onClick={() => {
          logOut();
        }}
      >
        Go home, your're drunk
      </Button>
    </>
  );
};

export default EndScreen;
