import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from "./Home";
import NewHistory from "./NewHistoryForm";
import CompletedHistory from "./CompletedHistory";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md">
        <NavbarBrand tag={Link} to="/">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/HSTRY-logo.png`}
            alt="Your Logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/new-history">
                New History
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/completed-history">
                Completed History
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <div className="container-fluid mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-history" element={<NewHistory />} />
          <Route path="/completed-history" element={<CompletedHistory />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
