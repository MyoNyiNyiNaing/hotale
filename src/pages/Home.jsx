import React from "react";
import Hero from "../components/Home/Hero";
import OurRooms from "../components/Home/OurRooms";
import Facilites from "../components/Home/Facilites";
import Testimonial from "../components/Home/Testimonial";
import NewsOffers from "../components/Home/NewsOffers";
import NewsLetter from "../components/Home/NewsLetter";
import { motion } from "framer-motion";
import Banner from "../utils/Banner";

const Home = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <Banner />
      <Hero />
      <OurRooms />
      <Facilites />
      <Testimonial />
      <NewsOffers />
      <NewsLetter />
    </motion.div>
  );
};

export default Home;
