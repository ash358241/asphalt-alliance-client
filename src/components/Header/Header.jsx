import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed, setCollapsed] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  return (
    <>
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{fontWeight: 'bold'}}
      variant="dark"
      fixed="top"
      className={isSticky || isCollapsed ? "shadow-sm bg-dark py-2" : "py-4"}
    >
      <Container fluid>
        <Navbar.Brand
          className="ml-md-5"
          style={{ color: "white", fontSize: "1.55rem" }}
        >
          Asphalt Alliance
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setCollapsed(!isCollapsed ? "show" : null)}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
          <Nav className="ms-auto">
            <Nav.Link
              className="mr-md-5"
              onClick={() => window.scrollTo(500, 0)}
              active
            >
              <Link className="link" to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link href="#services" className="mr-md-5" active>
              <Link className="link" to="/dashboard">Dashboard</Link>
            </Nav.Link>
            <Nav.Link href="#services" className="mr-md-5" active>
              <Link className="link" to="/signIn">Login</Link>
            </Nav.Link>
            <Nav.Link href="#services" className="mr-md-5" active>
              <Link className="link" to="/chat">Chat</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
