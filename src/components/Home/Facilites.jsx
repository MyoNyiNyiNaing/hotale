import React, { useEffect } from "react";
import TitlePara from "../../utils/TitlePara";
import parking from "../../assets/Home/parking.png";
import safe from "../../assets/Home/safe.png";
import swim from "../../assets/Home/swim.png";
import spa from "../../assets/Home/spa.png";
import gym from "../../assets/Home/gym.png";
import wifi from "../../assets/Home/wifi.png";
import breakfast from "../../assets/Home/breakfast.svg";
import workspace from "../../assets/Home/workspace.png";
import play from "../../assets/Home/play.png";
import BtnAbout from "../BtnAbout";
import { delay, motion } from "framer-motion";
import "venobox/dist/venobox";
import "venobox/dist/venobox.min.css";
import venobox from "venobox";

import cook1 from "../../assets/about/cook1.webp"
import bar from "../../assets/about/bar.webp"
import spa1 from "../../assets/about/spa.webp"
import homeBig from "../../assets/Home/homeBig.webp"
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const leftVariants = {
  hidden: { opacity: 0, x: -75 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const rightVariants = {
  hidden: { opacity: 0, x: 75 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const topVariants = {
  hidden: { opacity: 0, y: -75 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const bottomVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const Facilites = () => {
  useEffect(() => {
    new venobox({
      selector: ".youtube-link",
    });
  }, []);
  return (
    <div
      className="bg-none lg:bg-[url('https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/11/Group-36.jpg')] bg-no-repeat mt-20"
      style={{ backgroundPosition: "top center" }}
    >
      <div className="max-w-[1300px] mx-auto">
        <TitlePara
          title={"Hotel Facilites"}
          para={
            "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."
          }
        />
        {/* <div className="h-[900px] bg-[#F8F8F8] w-[600px] rounded-l-3xl absolute right-5 -z-50 hidden lg:block"></div> */}

        <motion.div className="md:w-full lg:w-[80%] mx-auto">
          <div className="grid grid-cols-10 gap-8">
            <motion.div
              viewport={{ once: true, amount: 1 }}
              initial="hidden"
              whileInView="visible"
              variants={bottomVariants}
              transition={{ delay: 1 }}
              className="col-span-10 md:col-span-2"
            >
              <div className="flex flex-col gap-5 items-center">
                <img src={parking} className="w-16" />
                <p className="font-medium text-xl capitalize">Parking</p>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 1 }}
              initial="hidden"
              whileInView="visible"
              variants={topVariants}
              transition={{ delay: 1 }}
              className="col-span-10 md:col-span-2"
            >
              <div className="flex flex-col gap-5 items-center">
                <img src={safe} className="w-16" />
                <p className="font-medium text-xl capitalize">safe</p>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 1 }}
              initial="hidden"
              whileInView="visible"
              variants={bottomVariants}
              transition={{ delay: 1.5 }}
              className="col-span-10 md:col-span-2"
            >
              <div className="flex flex-col gap-5 items-center">
                <img src={swim} className="w-16" />
                <p className="font-medium text-xl capitalize">Swimmimg Pool</p>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 1 }}
              initial="hidden"
              whileInView="visible"
              variants={topVariants}
              transition={{ delay: 2 }}
              className="col-span-10 md:col-span-2"
            >
              <div className="flex flex-col gap-5 items-center">
                <img src={spa} className="w-16" />
                <p className="font-medium text-xl capitalize">spa</p>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 1 }}
              initial="hidden"
              whileInView="visible"
              variants={bottomVariants}
              transition={{ delay: 2.5 }}
              className="col-span-10 md:col-span-2"
            >
              <div className="flex flex-col gap-5 items-center">
                <img src={gym} className="w-16" />
                <p className="font-medium text-xl capitalize">gym</p>
              </div>
            </motion.div>
            <div className="hidden md:block md:col-span-2"></div>
            <div className="col-span-10 md:col-span-2">
              <motion.div
                viewport={{ once: true, amount: 1 }}
                initial="hidden"
                whileInView="visible"
                variants={topVariants}
                transition={{ delay: 3 }}
                className="flex flex-col gap-5 items-center"
              >
                <img src={wifi} className="w-16" />
                <p className=" capitalize text-xl font-medium">Free wifi</p>
              </motion.div>
            </div>
            <motion.div
              viewport={{ once: true, amount: 1 }}
              initial="hidden"
              whileInView="visible"
              variants={bottomVariants}
              transition={{ delay: 3.5 }}
              className="col-span-10 md:col-span-2"
            >
              <div className="flex flex-col gap-5 items-center">
                <img src={breakfast} className="w-16" />
                <p className="font-medium text-xl capitalize">breakfast</p>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 1 }}
              initial="hidden"
              whileInView="visible"
              variants={topVariants}
              transition={{ delay: 4 }}
              className="col-span-10 md:col-span-2"
            >
              <div className="flex flex-col gap-5 items-center">
                <img src={workspace} className="w-16" />
                <p className="font-medium text-xl capitalize">workspace</p>
              </div>
            </motion.div>
            <div className="hidden md:block  md:col-span-2"></div>
          </div>
        </motion.div>
      </div>
      <div style={{backgroundImage: `url(${homeBig})`}} className="w-full h-[500px] mt-28 rounded-tr-[60px] rounded-bl-[60px] flex justify-center items-center bg-center">
        <a
          className="youtube-link"
          data-autoplay="true"
          data-vbtype="video"
          href="https://www.youtube.com/watch?v=US7bGTUkBfg"
        >
          <img src={play} alt="" className=" h-20 cursor-pointer" />
        </a>
      </div>
      <div className="max-w-[1300px] mx-auto">
        <TitlePara
          title="Visit Our Famous Facilites"
          para="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."
        />
        <div className=" md:mx-10 md:space-y-10 relative ">
          <div className="bg-none lg:bg-[url('https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/grey-color.jpg')] bg-no-repeat bg-center w-full h-full bg-cover top-24 absolute -z-50"></div>
          {/* photo one  */}
          <div className=" py-[50px] grid md:grid-cols-12 gap-10 md:gap-20">
            <div className=" overflow-hidden col-span-5 lg:col-span-7">
              <img
                className=" w-full object-cover  rounded-[20px] "
                src={cook1}
                alt=""
              />
            </div>
            <motion.div
              viewport={{ once: true, amount: 0.5 }}
              initial="hidden"
              whileInView="visible"
              variants={rightVariants}
              className=" space-y-10 col-span-4 lg:col-span-5"
            >
              <h1 className=" text-[30px] font-[500] tracking-[1px]">
                3 Michelin Stars Restaurant, Vézère
              </h1>
              <p className=" text-[18px] text-[#898989] fw-[400] leading-[35.7px]">
                A brasserie inspired by French cuisine, a fresh and modern place
                to visit and enjoy dishes always handmade of the best
                ingredients of the season.
              </p>
              <BtnAbout />
            </motion.div>
          </div>
          {/* photo two  */}
          <div className=" py-[50px] md:grid md:grid-cols-12 flex flex-col-reverse gap-10 md:gap-20">
            <motion.div
              viewport={{ once: true, amount: 0.5 }}
              initial="hidden"
              whileInView="visible"
              variants={leftVariants}
              className=" space-y-10 col-span-4 lg:col-span-5"
            >
              <h1 className=" text-[30px] font-[500] tracking-[1px]">
                The Penthouse Bar, An iconic american bar
              </h1>
              <p className=" text-[18px] text-[#898989] fw-[400] leading-[35.7px]">
                The cozy bar area accompanying the Penthouse is a classic
                cocktail bar at it’s finest. Our experienced bartenders are here
                to offer you both the classic bewerages and the newest global
                trends.
              </p>
              <BtnAbout />
            </motion.div>
            <div className=" overflow-hidden col-span-5 lg:col-span-7">
              <img
                className=" w-full object-cover rounded-[20px] "
                src={bar}
                alt=""
              />
            </div>
          </div>
          {/* photo three  */}
          <div className=" py-[50px] grid md:grid-cols-12 gap-10 md:gap-20 relative">
            {/* <div className="h-[400px] bg-[#F8F8F8] w-[80%] rounded-r-3xl  absolute left-32 top-28 -z-50 hidden lg:block"></div> */}

            <div className=" overflow-hidden col-span-5 lg:col-span-7">
              <img
                className=" w-full object-cover  rounded-[20px] "
                src={spa1}
                alt=""
              />
            </div>
            <motion.div
              viewport={{ once: true, amount: 0.5 }}
              initial="hidden"
              whileInView="visible"
              variants={rightVariants}
              className=" space-y-10 col-span-4 lg:col-span-5"
            >
              <h1 className=" text-[30px] font-[500] tracking-[1px]">
                The Spa. Refresh Yourself
              </h1>
              <p className=" text-[18px] text-[#898989] fw-[400] leading-[35.7px]">
                Whether you are in search of a well-appointed gym or a pampering
                moment on the massage table and inside the warm saunas, you can
                always find a place for yourself at our spa.
              </p>
              <BtnAbout />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilites;
