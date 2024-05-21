// import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./common-section.css";

// eslint-disable-next-line react/prop-types
const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container>
        <Row>
          <Col lg="12">
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CommonSection;
