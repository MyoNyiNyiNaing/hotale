import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import {
  FaRegEnvelope,
  FaLocationArrow,
  FaEnvelope,
  FaSkype,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import contactBg from "../assets/contactBg.jpg";
import { motion as m } from "framer-motion";

import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import { AnimatePresence, motion } from "framer-motion";
import ContactBanner from "../components/ContactBanner";

const Contact = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const inputStyle = {
    color: "#4e4e4e",
    backgroundColor: "#f2f2f2",
    outline: "none",
    width: "100%",
    padding: "20px 20px",
    marginBottom:"30px"
  };

  return (
    <>
      {/* 
      <m.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}  className=" overflow-hidden"> */}
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
        className="pb-20 overflow-hidden"
      >
        <ContactBanner
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
          openSignUpModal={openSignUpModal}
          setOpenSignUpModal={setOpenSignUpModal}
        />

        {/* title */}
        {/* <div className="flex h-[100%] items-center justify-center">
          <m.div initial={{y:"100"}} whileInView={{y:0}} transition={{duration:2,type:"spring"}} className="text-center">
            <h3 className="text-[40px] md:text-[75px] text-[#fff] font-[600]">Contact us</h3>
            <span className="text-[25px] mt-[15px] text-[#e5e5e5]">
              get in touch
            </span>
          </m.div>
        </div> */}

        <div className="bg-[#191919] px-[50px] pt-[20px] pb-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto md:max-w-[1140px]">
            <m.div
              initial={{ y: "100", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, type: "spring" }}
              className="pt-[50px] px-[20px]"
            >
              <div className="w-[40px] h-[40px] bg-[#fff] box-content p-[20px] rounded-[40px]  mb-[30px]">
                <FiPhone className="text-[40px]  text-[#000] " />
              </div>
              <div className="text-[#fff] flex flex-col gap-5">
                <h1 className="text-[26px] font-[800]">Phone</h1>
                <p className="text-sm ">
                  A wonderful serenity has taken possession of my entire soul,
                  like these.
                </p>
                <a href="#" className="underline decoration-solid">
                  +1-2345-2345
                </a>
              </div>
            </m.div>

            <m.div
              initial={{ y: "-100", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring", delay: 0.5 }}
              className="pt-[50px] px-[20px]"
            >
              <div className="w-[40px] h-[40px] bg-[#fff] box-content p-[20px] rounded-[40px]  mb-[30px]">
                <FaRegEnvelope className="text-[40px]  text-[#000] " />
              </div>
              <div className="text-[#fff] flex flex-col gap-5">
                <h1 className="text-[26px] font-[800]">Email</h1>
                <p className="text-sm">
                  A wonderful serenity has taken possession of my entire soul,
                  like these.
                </p>
                <a href="#" className="underline decoration-solid">
                  Contact@goodlayersthemes.com
                </a>
              </div>
            </m.div>

            <m.div
              initial={{ y: "100", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring", delay: 1 }}
              className="pt-[50px] px-[20px]"
            >
              <div className="w-[40px] h-[40px] bg-[#fff] box-content p-[20px] rounded-[40px]  mb-[30px]">
                <FaLocationArrow className="text-[40px]  text-[#000] " />
              </div>
              <div className="text-[#fff] flex flex-col gap-5">
                <h1 className="text-[26px] font-[800]">Location</h1>
                <p className="text-sm">
                  A4 apt. Flawing Street. The Grand Avenue. Liverpool, UK 33342
                </p>
                <a href="#" className="underline decoration-solid">
                  +1-2345-2345
                </a>
              </div>
            </m.div>
          </div>
        </div>

        {/* form */}
        <div className="grid grid-cols-1 place-items-center mb-20">
          <div className="text-center my-20">
            <h1 className="text-[39px] font-[600]">Leave us your info</h1>
            <span className="text-[19px]">and we will get back to you.</span>
          </div>

          <form>
            <div className="md:w-[100vh] lg:max-w-[760px]">
              <div className="md:flex gap-7 w-full">
                <input
                  type="text"
                  placeholder="Full Name*"
                  style={inputStyle}
                  
                />
                <input type="text" placeholder="Email*" style={inputStyle}/>
              </div>
              <input type="text" placeholder="Subject*" style={inputStyle} />
              <textarea type="text" placeholder="Message*" style={inputStyle} />
            </div>

            <button className="bg-black text-white w-auto rounded-[3px] text-[13px] font-[600] px-[33px] py-[15px] uppercase">
              submit now
            </button>
          </form>
        </div>

        <div className="mb-20">
          <iframe
            className="w-full h-[50vh] md:h-screen 2xl:h-[50vh] saturate-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169896.21834138833!2d-0.3277803942789503!3d51.54588730583371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2smm!4v1686222391767!5m2!1sen!2smm"
          ></iframe>
        </div>

        {/* social media link */}
        <div className="flex justify-center items-center text-[#1e1e1e] text-[20px]">
          <a href="mailto:#">
            <FaEnvelope className="  mr-[40px] cursor-pointer" />
          </a>
          <a href="#">
            <FaFacebookF className="mr-[40px] cursor-pointer" />
          </a>
          <a href="mailto:#">
            <FaSkype className="mr-[40px] cursor-pointer" />
          </a>
          <a href="mailto:#">
            <FaTwitter className="mr-[40px] cursor-pointer" />
          </a>
        </div>
      </motion.div>

      <footer />
    </>
  );
};

export default Contact;
