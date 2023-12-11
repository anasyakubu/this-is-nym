import React from "react";
import AboutHeader from "../section/AboutHeader/AboutHeader";
import OurMission from "../section/OurMission/OurMission";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="About">
      <AboutHeader />
      <OurMission />
      <Footer />
    </div>
  );
};

export default About;
