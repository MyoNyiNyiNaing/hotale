import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Layout from "../pages/Layout";
import OurTeam from "../pages/OurTeam";
import HotelReview from "../pages/HotelReview";
import Rooms from "../pages/Rooms";
import Reservation from "../pages/Reservation";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import RoomsDetails from "../pages/RoomsDetails";
import OurTeamDetail from "../pages/OurTeamDetail";
import { AnimatePresence } from "framer-motion";
import PagesNotFound from "../pages/PagesNotFound";

const Paths = () => {
  const location = useLocation();
  return (
    <div className=" font-jost px-5 py-5 ">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="our-team" element={<OurTeam />} />
            <Route path="our-team-member/:id" element={<OurTeamDetail />} />
            <Route path="hotel-review" element={<HotelReview />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="roomsDetails/:id" element={<RoomsDetails />} />
            <Route path="reservation" element={<Reservation />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blogDetails/:id" element={<BlogDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<PagesNotFound/>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default Paths;
