import React, { useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import { BsDashLg, BsPeople } from "react-icons/bs";
import { GiResize } from "react-icons/gi";
import DatePickerReservation from "../components/DatePicker";
import { AiFillCaretDown } from "react-icons/ai";
import AddRoomModal from "./../components/ReservationModals/AddRoomModal";
import GuestModal from "../components/ReservationModals/GuestModal";
import RoomSizeModal from "../components/ReservationModals/RoomSizeModal";
import FacilitiesModal from "../components/ReservationModals/FacilitiesModal";
import { Link } from "react-router-dom";
import { rooms } from "../utils/rooms";

import AboutUsBanner from "../components/AboutUsBanner";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import { AnimatePresence, motion } from "framer-motion";

const Reservation = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const [roomNum, setRoomNum] = useState(1);
  const [roomToggle, setroomToggle] = useState(false);

  const [guestToggle, setGuestToggle] = useState(false);
  const [adultNum, setAdultNum] = useState(2);
  const [childrenNum, setChildrenNum] = useState(0);

  const [roomSizeToggle, setRoomSizeToggle] = useState(true);
  const [facilitiesToggle, setFacilitiesToggle] = useState(true);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <motion.div
      className="overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {openLoginModal && <LoginModal setOpenLoginModal={setOpenLoginModal} />}
        {openSignUpModal && (
          <SignupModal setOpenSignUpModal={setOpenSignUpModal} />
        )}
      </AnimatePresence>
      {/* banner */}
      <div>
        <AboutUsBanner
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
          openSignUpModal={openSignUpModal}
          setOpenSignUpModal={setOpenSignUpModal}
        >
          <div className=" text-center text-white h-[300px] lg:mb-10 flex flex-col items-center justify-center space-y-5 md:max-w-[60%] mx-auto">
            <h1 className=" text-[40px] md:text-[70px] font-[400]">
              Search Room
            </h1>
          </div>
        </AboutUsBanner>
      </div>

      <div className="w-full">
        <div className="flex flex-wrap justify-center gap-5 w-[100%] md:max-w-[1300px] mx-auto py-[60px]">
          {/* availability */}
          <div className="w-full md:w-[270px] mb-10">
            <h3 className="text-[26px] text-[#0c0c0c] font-[600] mb-[20px]">
              Check Availability
            </h3>

            <div>
              {/* MUI DatePicker  */}
              <div className="mb-5 w-full">
                <h1 className="text-lg text-[#656565]">Check In</h1>
                <DatePickerReservation />
              </div>
              <div className="mb-5 w-full">
                <h1 className="text-lg text-[#656565]">Check Out</h1>
                <DatePickerReservation />
              </div>

              <div className="mb-5 relative">
                <h1 className="text-lg text-[#656565]">Room</h1>
                <div className="flex justify-between bg-[#f5f5f5] py-[25px]">
                  <span className="ms-[25px]">{roomNum}</span>
                  <AiFillCaretDown
                    onClick={() => setroomToggle(!roomToggle)}
                    className="cursor-pointer text-2xl text-[#6e6969de] me-[12px]"
                  />
                </div>
                {roomToggle ? (
                  <AddRoomModal roomNum={roomNum} setRoomNum={setRoomNum} />
                ) : (
                  ""
                )}
              </div>

              <div className="mb-8 relative">
                <h1 className="text-lg text-[#656565]">Guests</h1>
                <div className="flex justify-between bg-[#f5f5f5] py-[25px]">
                  <div className="flex gap-3 ms-[25px]">
                    <div className="flex gap-2">
                      <span>adults</span>
                      <span>{adultNum}</span>
                    </div>
                    <div className="flex gap-2">
                      <span>children</span>
                      <span>{childrenNum}</span>
                    </div>
                  </div>
                  <AiFillCaretDown
                    onClick={() => setGuestToggle(!guestToggle)}
                    className="cursor-pointer text-2xl text-[#6e6969de] me-[12px]"
                  />
                </div>
                {guestToggle ? (
                  <GuestModal
                    adultNum={adultNum}
                    setAdultNum={setAdultNum}
                    setChildrenNum={setChildrenNum}
                    childrenNum={childrenNum}
                  />
                ) : (
                  ""
                )}
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-semibold">Room Size</h1>
                  <BsDashLg
                    className="me-[20px] cursor-pointer"
                    onClick={() => setRoomSizeToggle(!roomSizeToggle)}
                  />
                </div>
                {roomSizeToggle ? <RoomSizeModal /> : ""}
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-semibold">Facilities</h1>
                  <BsDashLg
                    className="me-[20px] cursor-pointer"
                    onClick={() => setFacilitiesToggle(!facilitiesToggle)}
                  />
                </div>
                {facilitiesToggle ? <FacilitiesModal /> : ""}
              </div>
              <a href="#">
                <button className="uppercase w-[100%] h-[50px] text-[#0c0c0c] border-2 border-[#0c0c0c] rounded-[5px]">
                  search room
                </button>
              </a>
            </div>
          </div>

          {/* rooms */}
          <div className="w-full md:w-[60%] mx-0 px-[15px]">
            {rooms.map((room) => {
              return (
                <Link  key={room?.id} to={`/roomsDetails/${room?.id}`}>
                  
                    <div className="flex flex-wrap w-full items-center gap-2 md:gap-0 pb-[60px]">
                      <div className="w-full lg:w-[40%]">
                        <div className="relative">
                          <img className="w-full" src={room?.img} />
                          {room?.promo ? (
                            <div className="bg-red-500 text-white w-auto px-4 py-2 rounded-sm absolute  top-3 right-3">
                              <span>{room?.promo}% OFF</span>{" "}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="w-full lg:w-[60%] ps-0 md:ps-[40px] flex flex-col gap-5 justify-center">
                        <h3 className="text-[30px] font-[500] jost">
                          {room.name}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-5 ">
                          <div className="flex items-center gap-3">
                            <IoBedOutline className="text-[28px] text-gray-700" />
                            <span className=" text-[#848484]">
                              {room?.beds}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <BsPeople className="text-[28px] text-gray-700" />
                            <span className=" text-[#848484]">
                              {room?.guests} Guests
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <GiResize className="text-[28px] text-gray-700" />
                            <span className=" text-[#848484]">
                              {room?.area}
                            </span>
                          </div>
                        </div>

                        <div>
                          <p className="text-[#656565]">
                            Hotale Suites has been honored with the prestigious
                            Five-Star Award by Forbes.
                          </p>
                        </div>

                        <div className="flex flex-wrap-reverse gap-4 justify-between">
                          <Link
                            to={`/roomsDetails/${room?.id}`}
                            className=" hover-underline-animation_room gap-2"
                          >
                            <div className="flex items-center gap-1 w-[100vh] md:w-auto">
                              <button className="uppercase font-[600] tracking-[2px] text-[13px]">
                                book now
                              </button>
                              <IoIosArrowForward />
                            </div>
                          </Link>

                          <div>
                            <span className="text-[25px] font-[500]">
                              From
                              <span className=" text-sm line-through">
                                {room?.promo ? "$" + room.price : ""}
                              </span>
                              $
                              {room?.promo
                                ? room?.price -
                                  (room?.price * room?.promo) / 100
                                : room?.price}
                            </span>
                            <span className="text-base text-[#949494]">
                              /night
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reservation;
