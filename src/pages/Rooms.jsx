import React, { useState } from "react";
import RoomCard from "../utils/RoomCard";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import AboutUsBanner from "../components/AboutUsBanner";
import { rooms } from "../utils/rooms";
import { AnimatePresence, motion } from "framer-motion";

const Rooms = () => {
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
      >
        <AboutUsBanner
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
          openSignUpModal={openSignUpModal}
          setOpenSignUpModal={setOpenSignUpModal}
        >
          <div className=" text-center text-white h-[300px] lg:mb-10 flex flex-col items-center justify-center space-y-5 md:max-w-[60%] mx-auto">
            <h1 className=" text-[40px] md:text-[70px] font-[400]">
              Room Grid Style 1
            </h1>
          </div>
        </AboutUsBanner>
        <div className="flex flex-wrap my-20 items-center justify-center gap-10 max-w-[1300px] mx-auto">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Rooms;
