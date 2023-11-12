import React, { useEffect, useState } from "react";
import AboutUsBanner from "../components/AboutUsBanner";
import SignupModal from "../components/SignupModal";
import LoginModal from "../components/LoginModal";
import HotelReviewCard from "../components/HotelReviewCard";
import { useNavigate } from "react-router-dom";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "./HotelReview.css";
import Review from "../components/Review";
import { topReviews } from "../utils/teamMember";
import { AnimatePresence, motion } from "framer-motion";
import 'venobox/dist/venobox'
import 'venobox/dist/venobox.min.css'
import venobox from 'venobox';


const variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const leftVariants = {
  hidden: { opacity: 0, x: -75 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const rightVariants = {
  hidden: { opacity: 0, x: 75 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const HotelReview = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const navigate = useNavigate();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  useEffect(()=> {
    new venobox({
      selector: '.my-video-links',
    });
  },[])
  return (
    <>
      <AnimatePresence>
        {openLoginModal && <LoginModal setOpenLoginModal={setOpenLoginModal} />}
        {openSignUpModal && (
          <SignupModal setOpenSignUpModal={setOpenSignUpModal} />
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden pb-20"
      >
        <AboutUsBanner
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
          openSignUpModal={openSignUpModal}
          setOpenSignUpModal={setOpenSignUpModal}
        >
          <div className=" text-center text-white min-h-[350px] lg:mb-10 flex flex-col items-center justify-center space-y-5 md:max-w-[60%] mx-auto">
            <h1 className=" text-[40px] md:text-[70px] font-[400]">
              Hotel Review
            </h1>
            <p className=" text-[28px] font-[400] ">
              Hotels for the elite passionate about luxury
            </p>
          </div>
        </AboutUsBanner>
        <motion.div
          viewport={{ once: true, amount: 0.5 }}
          initial="hidden"
          whileInView="visible"
          variants={variants}
          className=" py-[50px] md:py-[75px] flex flex-col items-center gap-5"
        >
          <h1 className=" text-center text-[28px] font-[400] ">
            What Our Clients are saying
          </h1>
          <div className=" bg-[#0a0a0a] w-[100px] h-[3px] mb-4 md:mb-8"></div>
        </motion.div>
        <motion.div
          viewport={{ once: true, amount: 0.5 }}
          initial="hidden"
          whileInView="visible"
          variants={variants}
          className=" top-review-carousel lg:max-w-[1300px] lg:mx-auto pb-[100px] mx-10 relative"
        >
          {/* Slider  */}
          <Splide
            hasTrack={false}
            className=" overflow-visible"
            options={{
              perPage: 3,
              autoplay: true,
              type: "loop",
              cover: false,
              focus: 0,
              omitEnd: true,
              gap: 30,
              arrows: false,
              pagination: true,
              preloadPages: 2,
              classes: {
                pagination: "splide__pagination top-pagination",
                page: "splide__pagination__page top-page",
              },
              breakpoints: {
                780: {
                  perPage: 2,
                },
                540: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideTrack>
              {topReviews?.map((review) => (
                <SplideSlide className="pt-10" key={review.id}>
                  <HotelReviewCard review={review} />
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </motion.div>
        <motion.div
          viewport={{ once: true, amount: 0.5 }}
          initial="hidden"
          whileInView="visible"
          variants={variants}
          className=" py-[50px] md:grid md:grid-cols-2 flex flex-col md:min-h-[100vh]"
        >
          <div className=" h-full">
            <img
              className=" h-full object-cover"
              src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/shutterstock_1386982532.jpg"
              alt=""
            />
          </div>
          {/* <Review/> */}

          <Splide
            className=" overflow-visible"
            options={{
              perPage: 1,
              arrows: false,
              autoplay: true,
              cover: false,
              type: "loop",
              pagination: true,
              classes: {
                pagination: "splide__pagination bottom-pagination",
                page: "splide__pagination__page bottom-page",
              },
            }}
          >
            {topReviews?.map((review) => (
              <SplideSlide key={review.id}>
                <Review review={review} />
              </SplideSlide>
            ))}
          </Splide>
        </motion.div>

        <div className="lg:max-w-[1300px] mx-auto hotel-review relative py-[50px] grid md:grid-cols-2 px-10 gap-20 md:gap-10 overflow-hidden">
          <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            variants={leftVariants}
            className=" space-y-8 w-[90%] lg:mt-20"
          >
            <h1 className=" text-[24px] font-[500] leading-[28px]">
              3 Michelin Stars Restaurant, Vézère
            </h1>
            <div className=" bg-[#0a0a0a] w-[100px] h-[3px] mb-4 md:mb-8"></div>
            <p className=" text-[18px] text-[#898989] fw-[400] leading-[35.7px]">
              A brasserie inspired by French cuisine, a fresh and modern place
              to visit and enjoy dishes always handmade of the best ingredients
              of the season.
            </p>
            <button className=" font-[500] text-[15] uppercase bg-[#181818] hover:bg-gray-500 transition duration-500 rounded text-white py-[13px] px-[29px]">
              learn more
            </button>
          </motion.div>
          <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial="hidden"
            whileInView="visible"
            variants={rightVariants}
            className=" overflow-hidden relative"
          >
            <a  className="my-video-links" data-autoplay="true" data-vbtype="video" href="https://www.youtube.com/watch?time_continue=2&v=US7bGTUkBfg&feature=emb_title">
              <img
                className=" w-full object-cover  rounded-[20px] "
                src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2022/01/review-video-player-bg.jpg"
                alt=""
              />
              <span className=" absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
                <img
                  className=" w-[90px] cursor-pointer"
                  src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/play.png"
                  alt=""
                />
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default HotelReview;
