import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/logo.png";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function NavBar() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        paddingTop: "200px",
      });
    }
  };
  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="me-lg-5">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link
              href="#properties"
              onClick={(e) => handleNavClick(e, "properties")}
            >
              Marketplace
            </Nav.Link>
            <Nav.Link
              href="#testimonials"
              onClick={(e) => handleNavClick(e, "testimonials")}
            >
              Testimonials
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="px-lg-3"
              onClick={(e) => handleNavClick(e, "about")}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#developers"
              onClick={(e) => handleNavClick(e, "developers")}
            >
              Developers
            </Nav.Link>
            <Nav.Link
              href="#contact-us"
              onClick={(e) => handleNavClick(e, "contact-us")}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center order">
          <span className="line d-lg-inline-block d-none"></span>
          <i className="fa-regular fa-heart"></i>
          <Button
            variant="primary"
            className="btn-primary d-none d-lg-inline-block"
          >
            Connect Wallet
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
