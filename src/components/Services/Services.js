import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ServiceContext } from "../../App";
import "./Services.css";

const Services = () => {
  const [services] = useContext(ServiceContext);
  console.log(services);
  return (
    <div>
      <div className="container">
        <h1 className="text-center mt-5 text-danger ">
          Explore Our All Services
        </h1>
        <hr className="w-50 mx-auto" />
        <div className=" row d-flex">
          {services?.map((service) => (
            <div className="service-div col-md-4 col-12 g-5">
              <img src={service.image} alt="" />
              <h5 className="mt-4">{service.title}</h5>
              <span>Started on {service.date}</span>
              <span className="ms-5">{service.duration}</span>
              <br />
              <button className="service-btn">Enroll Now</button>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link to="/home">
            <button className="explore-btn">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
