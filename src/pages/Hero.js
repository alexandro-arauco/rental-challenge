import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero-section position-relative">
      <Container className="d-flex flex-column justify-content-center align-items-center text-center py-5 py-md-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title mb-4">Welcome to Our Service</h1>
          <p className="hero-subtitle mb-5">Your solution for modern web experiences</p>
          <Button className="hero-cta-btn px-5 py-3 fs-5 fw-bold">
            Get Started
          </Button>
        </motion.div>
      </Container>
    </div>
  );
}

export default Hero;

