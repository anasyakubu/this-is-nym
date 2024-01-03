import React from "react";
import AboutHeader from "../section/AboutHeader/AboutHeader";
import OurMission from "../section/OurMission/OurMission";
import Footer from "../components/Footer";
import Journey from "../section/Journey/Journey";

const About = () => {
  return (
    <div className="About">
      <AboutHeader />
      <OurMission />
      <Journey />
      <Footer />
    </div>
  );
};

export default About;
