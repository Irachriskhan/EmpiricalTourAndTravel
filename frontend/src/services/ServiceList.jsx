// import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    id: 1,
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: `Weather in Rwanda`,
  },
  {
    id: 2,
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Check our best tour guides",
  },
  {
    id: 3,
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Customize your trip as you want",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
