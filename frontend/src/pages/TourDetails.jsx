import React from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "./../utils/avgRating";

const TourDetails = () => {
  const { id } = useParams();

  // to be replaced by the API
  const tour = tourData.find((tour) => tour.id === id);
  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    distance,
    maxGroupSize,
  } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <>
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour__content">
              <img src={photo} alt="" />

              <div className="tour__info">
                <h2>{title}</h2>

                <div className="d-flex align-items-center gap-5">
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i
                      className="ri-star-line"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>
                    {calculateAvgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                      "Not rated"
                    ) : (
                      <span>({reviews.length})</span>
                    )}
                  </span>
                  <span>
                    <i className="ri-map-pin-user-fill"></i> {address}
                  </span>
                </div>
                <div className="toru__extra-details">
                  <span>
                    <i className="ri-map-pin-2-fill"></i> {city}
                  </span>
                  <span>
                    <i className="ri-money-dollar-circle-line"></i> {price}
                  </span>
                  <span>
                    <i className="ri-group-fill"></i> {maxGroupSize}
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              {/* ============== Tour review section start ================ */}
              {/* ============== Tour review section end =============== */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TourDetails;
