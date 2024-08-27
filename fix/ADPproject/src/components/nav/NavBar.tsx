import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const AppNavbar: React.FC = () => {
  const navigate = useNavigate();
  const { token, role, setToken, setRole } = useAuth(); // Access the role from the auth context
  const isLoggedIn = Boolean(token);

  const handleLogout = () => {
    setToken(null);
    setRole(null);

    // Redirect to the home or login page
    navigate("/");
  };

  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          ADP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {isLoggedIn ? (
              <>
                {/* Common links for all logged-in users */}
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>

                {role === "applicant" && (
                  <Nav.Link as={Link} to="/jobList">
                    Job List
                  </Nav.Link>
                )}

                {/* Conditional links based on user role */}
                {role === "hiringManager" && (
                  <>
                    <Nav.Link as={Link} to="/hiringManager">
                      Your Jobs
                    </Nav.Link>
                    {/* Add more admin-specific links if needed */}
                  </>
                )}
                {role === "admin" && (
                  <>
                    <Nav.Link as={Link} to="/admin-panel">
                      Admin Panel
                    </Nav.Link>
                    <Nav.Link as={Link} to="/user-management">
                      User Management
                    </Nav.Link>
                    {/* Add more admin-specific links if needed */}
                  </>
                )}

                <Button variant="outline-light" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
