// import React from 'react'
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

function About() {
  return (
    <section>
      <Container>
        <Row>
            <Col lg="6" md="6" sm="12" className="mb-4">
                <p>We Provide Best Deals</p>
                <p>Empirical Tour and Travel is a sustainable and responsible tour company that offers unforgettable travel experiences in Dr. Congo and the East African Region. We cater to traveBlers who are interested in safaris, gorilla trekking, cultural tours, sightseeing tours and hiking adventures.</p>
            </Col>
            <Col lg="6" className="pt-5 text-center">
                <div className="tank__you">
                <span>
                    {/* <i className="ri-checkbox-circle-line"></i> */}
                </span>
                <h1 className="mb-3 fw-semibold">Image</h1>
                <h3 className="mb-4">Description.</h3>
                </div>
            </Col>
        </Row>
        <Row>
            <Button className="btn primary__btn w-25">
                <Link to="/home">Back to Home</Link>
            </Button>
        </Row>
      </Container>
    </section>
  )
}

export default About
