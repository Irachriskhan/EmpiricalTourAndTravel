import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";

const Home = () => {
  return (
    <>
      {/* ================= hero section start================ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating memories,
                  <span className="highlight"> You dream it we plan it</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  nulla odit, assumenda natus nostrum culpa tempora, expedita
                  provident quasi ex, delectus veritatis accusamus aliquam
                  asperiores obcaecati mollitia rem hic sit.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ================= hero section end================ */}
      <Container>
        <Row>
          <Col lg="3">
            <h5 className="services__subtitle">What we serve</h5>
            <h2 className="services__title">What we offer our best services</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
