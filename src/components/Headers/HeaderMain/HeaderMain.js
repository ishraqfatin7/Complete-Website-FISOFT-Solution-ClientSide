import React from "react";
import "./HeaderMain.css";
import header1 from "../../../images/header-1.jpg";
import header2 from "../../../images/header-2.jpg";
import header3 from "../../../images/header-3.jpg";
import FacilitiesInfo from "../FacilitiesInfo/FacilitiesInfo";

const HeaderMain = () => {
  return (
    <section className="header-container">
      <div className="row">
        <div className="col h-50">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active carousel-fill">
                <img src={header1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text-info">
                    The Software That You Want & Just The Way You Want
                  </h5>
                  <p>Our Software Engineers Will Make Them With Finest Care</p>
                </div>
              </div>
              <div className="carousel-item carousel-fill">
                <img src={header2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text-warning">Need Some Fix Done?</h5>
                  <p className="">We do that too.</p>
                </div>
              </div>
              <div className="carousel-item carousel-fill">
                <img src={header3} className="w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text-danger">Phone Repair</h5>
                  <p>To Make Your Everyday Task Working Again</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
          <FacilitiesInfo></FacilitiesInfo>
      </div>
    </section>
  );
};

export default HeaderMain;
