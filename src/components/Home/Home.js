import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ServiceContext } from "../../App";
import "./Home.css";
// import banner from '../../images/slider1_01.jpg'

const Home = () => {
  const [services] = useContext(ServiceContext);
  const homeServices = services.slice(0, 6);
  return (
    <div>
      <div className="banner ">
        <div className="banner-content">
          <h1 className="mb-2">
            Learn on your own,
            <br /> Build confidence.
          </h1>
          <p>
            Acquire the most important skills of the present time by enrolling
            in online courses,
            <br /> training and career track programs of your choice.
          </p>
          <button className="banner-btn">SingUp</button>
          <button className="banner-btn">Login</button>
        </div>
      </div>
      <div className="container mb-5">
        <h1 className="text-center mt-5 text-danger ">
          Explore Our Latest Services
        </h1>
        <hr className="w-50 mx-auto" />
        <div className="row d-flex g-5 mt-5">
          {homeServices?.map((service) => (
            <div className="service-div col-md-4 col-12">
              <img src={service.image} alt="" />
              <h5 className="mt-4">{service.title}</h5>
              <span>Started on {service.date}</span>
              <span className="ms-5">{service.duration}</span>
              <br />
              <button className="service-btn">Enroll Now</button>
            </div>
          ))}
        </div>
        <div className="text-center mt-5 ">
          <Link to="/services">
            <button className="explore-btn">Explore All Services</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
