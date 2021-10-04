import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="footer ">
        <div className="container">
          <div className="box-container row d-flex  footer-link">
            <div className="box col-md-3 col-12">
              <h3>our branches</h3>
              <NavLink to="/">
                {" "}
                <i className="fas fa-map-marker-alt footer-link"></i> india{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-map-marker-alt footer-link"></i> USA{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-map-marker-al footer-link"></i> france{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-map-marker-alt footer-link"></i> japan{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-map-marker-alt footer-link"></i> russia{" "}
              </NavLink>
            </div>

            <div className="box col-md-3 col-12">
              <h3>quick links</h3>
              <NavLink to="/">
                {" "}
                <i className="fas fa-arrow-right footer-link"></i> home{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-arrow-right footer-link"></i> services{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-arrow-right footer-link"></i> about{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-arrow-right footer-link"></i> portfolio{" "}
              </NavLink>

              <NavLink to="/">
                {" "}
                <i className="fas fa-arrow-right footer-link"></i> contact{" "}
              </NavLink>
            </div>

            <div className="box col-md-3 col-12">
              <h3>our services</h3>
              <NavLink to="/">
                {" "}
                <i className="fas fa-check"></i> web design{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-check"></i> digital marketing{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-check"></i> email marketing{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-check"></i> content marketing{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fas fa-check"></i> seo marketing{" "}
              </NavLink>
            </div>

            <div className="box col-md-3 col-12">
              <h3>follow us</h3>
              <NavLink to="/">
                {" "}
                <i className="fab fa-facebook-f"></i> facebook{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fab fa-twitter"></i> twitter{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fab fa-instagram"></i> instagram{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fab fa-linkedin"></i> linkedin{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <i className="fab fa-pinterest"></i> pinterest{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
