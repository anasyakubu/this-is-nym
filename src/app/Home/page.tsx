import React from "react";
import HomeHeader from "../section/HomeHeader/HomeHeader";
import WhyUs from "../section/WhyUs/WhyUs";
import Services from "../section/Services/Services";
import KeyPoint from "../section/KeyPoint/KeyPoint";
// import Quotes from "../section/Quotes/Quotes";
import Stats from "../section/Stats/Stats";
import Partners from "../section/Partners/Partners";
import Testimonial from "../section/Testimonial/Testimonial";
import Footer from "../components/Footer";
import FooterTwo from "../components/FooterTwo";
// import Video from "../section/Video/Video";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Services />
      <WhyUs />
      <KeyPoint />
      <Stats />
      <Partners />
      <Testimonial />
      {/* <FooterTwo /> */}
      <Footer />
      {/* <Video /> */}
      {/* <Quotes /> */}
    </div>
  );
};

export default Home;
