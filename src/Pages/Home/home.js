import React from "react";
import About from "../../Components/About/about";
import FindJobs from "../../Components/FindJobs/findJobs";
import Hero from "../../Components/Hero/hero";
import NewsLetter from "../../Components/NewsLetter/newsLetter";
import OpenJobs from "../../Components/OpenJobs/openJobs";
import ScrollToTopButton from "../../Components/scrollToTop";
import ServiceLocationsMap from "../../Components/ServiceLocationsMap/serviceLocationsMap";
import Testimonials from "../../Components/Testimonials/testimonials";
import VideoPlayer from "../../Components/Video/video";
import useLocalContext from "../../Hooks/useLocalContext";
import "./home.css";

function Home({ data }) {
  const { auth } = useLocalContext();



  console.log(auth);
  return (
    <div>
      <Hero data={data} />
      <FindJobs data={data} />
      <About />
      <ServiceLocationsMap/>
      <Testimonials />
      <NewsLetter />
      <div className="scrollToTop">
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default Home;
