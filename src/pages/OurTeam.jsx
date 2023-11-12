import React, { useState } from "react";
import OurTeamCard from "../components/OurTeamCard";
import { BsSend } from "react-icons/bs";
import OurTeamBanner from "../components/OurTeamBanner";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import { teamMembers } from "../utils/teamMember";
import { AnimatePresence, motion } from "framer-motion";

const OurTeam = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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
        className="pb-20 overflow-hidden"
      >
        <OurTeamBanner
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
          openSignUpModal={openSignUpModal}
          setOpenSignUpModal={setOpenSignUpModal}
        />
        <div className=" lg:max-w-[1300px] lg:mx-auto mt-20 md:mx-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers?.map((member, i) => (
            <OurTeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
        {/* contact section  */}
        <div className=" mx-auto text-center mt-20">
          <h1 className=" font-allison text-[55px] font-[400] leading-[50px]">
            Newsletter
          </h1>
          <div className=" bg-gray-100 pt-5 pb-20 rounded-[20px] space-y-10 px-5 sm:px-10">
            <p className=" text-[18px] text-[#898989] fw-[400] leading-[30px]">
              Subscribe the newsletter to get updated to news and promotions
            </p>
            <div className=" flex items-center gap-3 justify-center">
              <input
                type="text"
                required
                placeholder="Your Email Address"
                className=" shadow-[0_10px_45px_rgba(0,0,0,.1)] text-[#898989] fw-[400] w-[170px] sm:w-[380px] h-[76px] rounded-[20px] py-[6px] px-[25px] outline-none text-[17px]"
              />
              <button className=" bg-black text-white w-[76px] h-[76px] rounded-[20px] flex items-center justify-center text-xl">
                <BsSend />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OurTeam;
