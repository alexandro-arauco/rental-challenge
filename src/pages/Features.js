import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function Features() {
  const features = [
    {
      icon: "fa-shield",
      title: "Secure Payments",
      description: "All transactions are secured with blockchain technology and encrypted payment methods.",
    },
    {
      icon: "fa-search",
      title: "Easy Search",
      description: "Find your perfect property with our advanced search filters and location-based recommendations.",
    },
    {
      icon: "fa-certificate",
      title: "Verified Properties",
      description: "Every property is verified and authenticated to ensure quality and legitimacy.",
    },
    {
      icon: "fa-headset",
      title: "24/7 Support",
      description: "Get assistance anytime with our round-the-clock customer support team.",
    },
    {
      icon: "fa-chart-line",
      title: "Market Insights",
      description: "Access real-time market data and analytics to make informed investment decisions.",
    },
    {
      icon: "fa-handshake",
      title: "Trusted Partners",
      description: "Work with verified real estate agencies and trusted property developers.",
    },
  ];

  return (
    <div className="features" id="features">
      <Container>
        <AnimationTitles
          title="Why Choose Our Platform"
          className="title mx-auto text-center"
        />
        <p className="gray-50 text-center mb-5">
          Discover the features that make us the leading rental platform in the
          market.
        </p>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black-100 border-0 h-100 feature-card">
                  <Card.Body className="p-4">
                    <div className="feature-icon mb-3">
                      <i className={`fa-solid ${feature.icon}`}></i>
                    </div>
                    <Card.Title className="text-white mb-3">
                      {feature.title}
                    </Card.Title>
                    <Card.Text className="gray-50 mb-0">
                      {feature.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Features;

