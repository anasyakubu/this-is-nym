import React from "react";
import HomeHeader from "../section/HomeHeader/HomeHeader";
import WhyUs from "../section/WhyUs/WhyUs";
import Services from "../section/Services/Services";
import KeyPoint from "../section/KeyPoint/KeyPoint";
import Quotes from "../section/Quotes/Quotes";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Services />
      <WhyUs />
      <KeyPoint />
      {/* <Quotes /> */}
    </div>
  );
};

export default Home;
