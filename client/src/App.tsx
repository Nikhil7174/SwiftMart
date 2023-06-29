import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
