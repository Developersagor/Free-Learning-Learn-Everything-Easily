import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-5 text-danger">
        Meet Our Teachers
        <hr className="w-25 mx-auto" />
      </h2>
      <div className="row">
        <div className="col-md-4 text-center teacher-div">
          <img
            className="img-fluid"
            src="https://i.ibb.co/9GpcvH9/teacher-1-370x370.jpg"
            alt=""
          />
          <h4 className="mt-3">Josie Moreno</h4>
          <p>Instractor</p>
          <div>
            <i className="fab fa-facebook icons"></i>
            <i class="fab fa-instagram-square icons"></i>
            <i class="fab fa-twitter icons"></i>
          </div>
        </div>
        <div className="col-md-4 text-center teacher-div">
          <img
            className="img-fluid"
            src="https://i.ibb.co/hDZ6S3s/teacher-2-370x370.jpg"
            alt=""
          />
          <h4 className="mt-3">Nick Peterson</h4>
          <p>Instractor</p>
          <div>
            <i className="fab fa-facebook icons"></i>
            <i class="fab fa-instagram-square icons"></i>
            <i class="fab fa-twitter icons"></i>
          </div>
        </div>{" "}
        <div className="col-md-4 text-center teacher-div">
          <img
            className="img-fluid"
            src="https://i.ibb.co/WnM6Jb9/teacher-3-370x370.jpg"
            alt=""
          />
          <h4 className="mt-3">Lisa Simmons</h4>
          <p>Instractor</p>
          <div>
            <i className="fab fa-facebook icons"></i>
            <i class="fab fa-instagram-square icons"></i>
            <i class="fab fa-twitter icons"></i>
          </div>
        </div>{" "}
        <div className="col-md-4 text-center teacher-div">
          <img
            className="img-fluid"
            src="https://i.ibb.co/LS2zqkq/teacher-4-370x370.jpg"
            alt=""
          />
          <h4 className="mt-3">Roy Jackson</h4>
          <p>Instractor</p>
          <div>
            <i className="fab fa-facebook icons"></i>
            <i class="fab fa-instagram-square icons"></i>
            <i class="fab fa-twitter icons"></i>
          </div>
        </div>{" "}
        <div className="col-md-4 text-center teacher-div">
          <img
            className="img-fluid"
            src=" https://i.ibb.co/5B5nY6v/teacher-5-370x370.jpg"
            alt=""
          />
          <h4 className="mt-3">Penny Jones</h4>
          <p>Instractor</p>
          <div>
            <i className="fab fa-facebook icons"></i>
            <i class="fab fa-instagram-square icons"></i>
            <i class="fab fa-twitter icons"></i>
          </div>
        </div>{" "}
        <div className="col-md-4 text-center teacher-div">
          <img
            className="img-fluid"
            src="https://i.ibb.co/dtK8mjG/teacher-6-370x370.jpg"
            alt=""
          />
          <h4 className="mt-3">Kylie Martinez</h4>
          <p>Instractor</p>
          <div>
            <i className="fab fa-facebook icons"></i>
            <i class="fab fa-instagram-square icons"></i>
            <i class="fab fa-twitter icons"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
