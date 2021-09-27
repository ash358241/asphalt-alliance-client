import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

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

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signOutUser = {
          isSignedIn: false,
          name: "",
          email: "",
          password: "",
          error: "",
          photo: "",
        };
        setUser(signOutUser);
        setLoggedInUser({});
        console.log(res);
      })

      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };
  console.log(user)
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ fontWeight: "bold" }}
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
                <Link className="link" to="/home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#services" className="mr-md-5" active>
                <Link className="link" to="/dashboard">
                  Dashboard
                </Link>
              </Nav.Link>
              <Nav.Link href="#services" className="mr-md-5" active>
                <Link className="link" to="/chat">
                  Chat
                </Link>
              </Nav.Link>
              {loggedInUser.isSignedIn ? (
                <Nav.Link href="#services" className="mr-md-5" active>
                  <Link className="link" to="/" onClick={handleSignOut}>
                    Logout
                  </Link>
                </Nav.Link>
              ) : (
                <Nav.Link href="#services" className="mr-md-5" active>
                  <Link className="link" to="/signIn">
                    Login
                  </Link>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
