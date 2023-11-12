import React from "react";
import TitlePara from "../../utils/TitlePara";
import { HiOutlineChevronRight, HiOutlineClock } from "react-icons/hi";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "./customSplide.css";
import { motion } from "framer-motion";

import newoffer1 from "../../assets/Home/newoffer/newoffer1.webp"
import newoffer2 from "../../assets/Home/newoffer/newoffer2.webp"
import newoffer3 from "../../assets/Home/newoffer/newoffer3.webp"
import newoffer4 from "../../assets/Home/newoffer/newoffer4.webp"
import newoffer5 from "../../assets/Home/newoffer/newoffer5.webp"
import newoffer6 from "../../assets/Home/newoffer/newoffer6.webp"
import newoffer7 from "../../assets/Home/newoffer/newoffer7.webp"
import newoffer8 from "../../assets/Home/newoffer/newoffer8.webp"

const bottomVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const NewsOffers = () => {
  const news = [
    {
      id: 0,
      img: newoffer1,
      title: "Tips For Picking Vacation Accommodation",
      date: "DEC 17, 2021",
    },
    {
      id: 1,
      img: newoffer2,
      title: "What to expect on an African Safari?",
      date: "DEC 17, 2021",
    },
    {
      id: 2,
      img: newoffer3,
      title: "My 6 Biggest Travel Surprises",
      date: "DEC 17, 2021",
    },
    {
      id: 3,
      img: newoffer4,
      title: "10 Tips for Taking Your First Solo Trip",
      date: "DEC 17, 2021",
    },
    {
      id: 4,
      img: newoffer5,
      title: "Why I Quit My Job To Be A Less Occasional Traveller In 2019",
      date: "DEC 17, 2021",
    },
    {
      id: 5,
      img: newoffer6,
      title: "Where To Travel In Asia From January To Junev",
      date: "DEC 17, 2021",
    },
    {
      id: 6,
      img: newoffer7,
      title: "Cities To Visit For Your First Time In Europe",
      date: "DEC 17, 2021",
    },
    {
      id: 7,
      img: newoffer8,
      title: "Where to travel in 2022: 10 places you need to go in 2022!",
      date: "DEC 17, 2021",
    },
  ];
  return (
    <div
      className="max-w-[1300px] mx-auto h-[1150px] bg-none lg:bg-[url('https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/home-resort-news-bg.png')] bg-no-repeat"
      style={{ backgroundPosition: "bottom center" }}
    >
      <TitlePara
        title="News & Offers"
        para="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."
      />
      <div className="flex justify-center items-center flex-col gap-10 relative">
        <motion.div
          viewport={{ once: true, amount: 0.5 }}
          initial="hidden"
          whileInView="visible"
          variants={bottomVariants}
          className="w-[85%] mx-auto"
        >
          <Splide
            options={{
              perPage: 3,
              perMove: 1,
              gap: "2rem",
              arrows: true,
              autoplay: true,
              type: "loop",
              cover: false,
              pagination: false,
              breakpoints: {
                1200: {
                  // arrows: false,
                  perPage: 3,
                },
                800: {
                  perPage: 2,
                  arrows: false,
                },
                640: { perPage: 1 },
              },
            }}
            id="customArrow"
          >
            {news.map((n) => {
              return (
                <SplideSlide key={n.id}>
                  <div className="h-[600px] w-full overflow-hidden rounded-2xl relative bg-black group cursor-pointer">
                    <img
                      src={n.img}
                      alt=""
                      className="h-[100%] w-full transition-all duration-500 hover:scale-105 group-hover:opacity-50"
                    />
                    <div className="absolute bottom-10 px-5 font-semibold text-white text-center w-full opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <h1 className="text-2xl mb-3">{n.title}</h1>
                      <p className=" text-sm flex gap-2 items-center justify-center">
                        <HiOutlineClock className="text-lg" /> {n.date}
                      </p>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </motion.div>
        <p className="flex gap-2 items-center  border-b  border-[#dadada] pb-2 uppercase text-sm font-semibold transition-all duration-500 cursor-pointer hover:border-black">
          Read the blogs <HiOutlineChevronRight className="text-xl" />
        </p>
      </div>
    </div>
  );
};

export default NewsOffers;
