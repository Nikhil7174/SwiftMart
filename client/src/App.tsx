import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { sampleProducts } from "./data";
import Home from "./pages/Home";

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Home />
    </div>
  );
}

export default App;
