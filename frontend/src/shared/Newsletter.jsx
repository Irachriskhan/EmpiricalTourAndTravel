import { useState } from "react";
import "./newsletter.css";
import { Container, Col, Row } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";
import { BASE_URL } from "../utils/config";

const Newsletter = () => {
  // State variables for email input and feedback message
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/subscribe`, { method: "POST", body: JSON.stringify({ email }) });
      const result = await response.json();

      if (!response.ok) {
        return alert(result.message);
      }

      setMessage("Thank you for subscribing!");
    } catch (error) {
      console.error("Error submitting email:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  // Event handler to update email state
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful travelling information</h2>
              {/* Form element for email subscription */}
              <form onSubmit={handleSubmit}>
                <div className="newsletter__input">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                  <button type="submit" className="btn newsletter_btn">Subscribe</button>
                </div>
              </form>
              {/* Feedback message */}
              <p>{message}</p>
            </div>
            <p>Join our mailist for more information.</p>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
