import React from "react";
import { Link } from "react-router-dom";
import FacilitiesInfo from "../../Headers/FacilitiesInfo/FacilitiesInfo";
import HeaderMain from "../../Headers/HeaderMain/HeaderMain";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AboutCompany from "../AboutCompany/AboutCompany";
import OurTeam from "../OurTeam/OurTeam";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import './Main.css';

const Main = () => {
  return (
    <div>
      <div className="Nav-header container-fluid">
        <Navbar></Navbar>
        <HeaderMain></HeaderMain>
      </div>
      <section className="d-flex justify-content-center mt-3">
        <Services></Services>
      </section>
      <section className="d-flex justify-content-center mt-5">
        <OurTeam></OurTeam>
      </section>
      <section className=" mt-5">
        <Reviews></Reviews>
      </section>
      <section className="mt-5">
        <AboutCompany></AboutCompany>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Main;
