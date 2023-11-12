import React, { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineLink, AiOutlineMail } from "react-icons/ai";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import AboutUsBanner from "../components/AboutUsBanner";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import { useParams } from "react-router-dom";
import { teamMembers } from "../utils/teamMember";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

const OurTeamDetail = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  useEffect(() => {
    setPerson(teamMembers.find((member) => member.id == id));
  }, [person]);

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
        className=" pb-20 overflow-hidden"
      >
        <AboutUsBanner
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
          openSignUpModal={openSignUpModal}
          setOpenSignUpModal={setOpenSignUpModal}
        >
          <div className=" min-h-[400px] md:my-12 flex flex-col justify-center items-center">
            <div className=" lg:grid lg:grid-cols-4 md:gap-10 lg:gap-[200px] flex flex-col items-center justify-center">
              <img
                className=" max-w-[200px] md:max-w-[250px] rounded-full lg:col-span-1"
                src={person?.image}
                alt=""
              />
              <div className=" lg:col-span-3">
                <h1 className=" font-[700] text-[30px] md:text-[40px] lg:text-[75px] mb-2 md:mb-4">
                  {person?.name}
                </h1>
                <div className=" bg-white max-w-[100px] h-[3px] mb-4 md:mb-8"></div>
                <h4 className=" font-[500] text-[23px]">{person?.position}</h4>
              </div>
            </div>
          </div>
        </AboutUsBanner>
        <div className=" lg:max-w-[1300px] lg:mx-auto md:mx-10 mt-20 gap-20 grid md:grid-cols-3 lg:grid-cols-4">
          {/* left  */}
          <motion.div
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            className=" space-y-10 md:col-span-1 lg:col-span-1 mx-auto"
          >
            <div>
              <h1 className=" text-[#191919] font-[500] text-[29px] mb-5">
                Contact Info
              </h1>
              <div className=" w-[40px] bg-[#0a0a0a] h-[3px] "></div>
            </div>
            <div className=" space-y-3">
              <div className=" flex items-center gap-3">
                <BsTelephone className=" text-xl text-gray-600" />
                <span className=" text-[18px] font-[400] text-[#898989]">
                  +1-234-2345
                </span>
              </div>
              <div className=" flex items-center gap-3">
                <AiOutlineMail className=" text-xl text-gray-600" />
                <span className=" text-[18px] font-[400] text-[#898989]">
                  name@hotaletheme.co
                </span>
              </div>
              <div className=" flex items-center gap-3">
                <AiOutlineLink className=" text-xl text-gray-600" />
                <span className=" text-[18px] font-[400] text-[#898989]">
                  goodlayers.com
                </span>
              </div>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" p-3 rounded-full bg-black text-white text-lg">
                <FaFacebookF />
              </div>
              <div className=" p-3 rounded-full bg-black text-white text-lg">
                <FaLinkedinIn />
              </div>
              <div className=" p-3 rounded-full bg-black text-white text-lg">
                <FaTwitter />
              </div>
              <div className=" p-3 rounded-full bg-black text-white text-lg">
                <FaInstagram />
              </div>
            </div>
            <button className=" flex items-center gap-3 text-[13px] font-[600] tracking-[1px] uppercase px-[20px] py-[15px] border-2 rounded-[4px] border-black ">
              <HiOutlineNewspaper className=" text-lg" />
              Download cv
            </button>
          </motion.div>
          {/* right  */}
          <div className=" md:col-span-2 lg:col-span-3 space-y-10">
            <div className="">
              <motion.h1
                viewport={{ once: true, amount: 0.5 }}
                initial="hidden"
                whileInView="visible"
                variants={variants}
                className=" text-[#191919] font-[500] text-[29px] mb-5"
              >
                Biography
              </motion.h1>
              <div className=" space-y-5 font-[400] text-[20px] leading-[34px] text-[#262626]">
                <motion.p
                  viewport={{ once: true, amount: 0.5 }}
                  initial="hidden"
                  whileInView="visible"
                  variants={variants}
                >
                  <span className=" font-[600]">
                    Far far away, behind the word mountains,
                  </span>
                  far from the countries Vokalia and Consonantia, there live the
                  blind texts. Separated they live in Bookmarksgrove right at
                  the coast of the Semantics, a large language ocean. A small
                  river named Duden flows by their place and supplies it with
                  the necessary regelialia. It is a paradisematic country, in
                  which roasted.
                </motion.p>
                <motion.p
                  viewport={{ once: true, amount: 0.5 }}
                  initial="hidden"
                  whileInView="visible"
                  variants={variants}
                >
                  The Big&nbsp;
                  <span className=" underline">
                    Oxmox advised her not to do so,
                  </span>
                  because there were thousands of bad Commas, wild Question
                  Marks and devious Semikoli, but the Little Blind Text didn’t
                  listen. She packed her seven versalia, put her initial into
                  the belt and made herself on the way.
                </motion.p>
                <motion.p
                  viewport={{ once: true, amount: 0.5 }}
                  initial="hidden"
                  whileInView="visible"
                  variants={variants}
                >
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth. Even
                  the all-powerful Pointing has no control about the blind texts
                  it is an almost unorthographic life One day however a small
                  line of blind text by the nam
                </motion.p>
              </div>
            </div>
            <motion.div
              viewport={{ once: true, amount: 0.5 }}
              initial="hidden"
              whileInView="visible"
              variants={variants}
            >
              <h1 className=" text-[#191919] font-[500] text-[29px] mb-5">
                Education
              </h1>
              <div className=" font-[400] text-[21px] leading-[34px] text-[#262626] flex flex-col gap-3">
                <div className="flex items-center ">
                  <BsDot className=" text-4xl -ml-4" />
                  School of Architecture & Design, Saint Peter's University 2004
                </div>
                <div className="flex items-center ">
                  <BsDot className=" text-4xl -ml-4" />
                  Design , National College of Art & Design 2006
                </div>
                <div className="flex items-center ">
                  <BsDot className=" text-4xl -ml-4" />
                  Architecture MEng (Hons), Leeds School of Architecture 2009
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OurTeamDetail;
