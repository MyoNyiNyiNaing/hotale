import { IoMdArrowDropdown } from "react-icons/io";
import { BsChevronRight, BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { IoMenuSharp } from "react-icons/io5";
import DatePickerHome from "./homeBanner/DatePickerHome";
import { useEffect, useState } from "react";
import RoomModalHome from "./homeBanner/RoomModalHome";
import GuestModalHome from "./homeBanner/GuestModalHome";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const Banner = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);
  const [accordian, setaccordian] = useState(false);
  useEffect(() => {
    // Use the offsetLeft value in any necessary logic or side effects
    console.log(offsetLeft);
  }, [offsetLeft]);

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const [roomNum, setRoomNum] = useState(1);
  const [roomToggle, setRoomToggle] = useState(false);

  const [adultNum, setAdultNum] = useState(2);
  const [childrenNum, setChildrenNum] = useState(0);
  const [guestToggle, setGuestToggle] = useState(false);
  // console.log(mobileNav);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setMobileNav(false);
      }
    });
  }, [scrollY]);
  return (
    <>
      <AnimatePresence>
        {openLoginModal && <LoginModal setOpenLoginModal={setOpenLoginModal} />}
        {openSignUpModal && (
          <SignupModal setOpenSignUpModal={setOpenSignUpModal} />
        )}
      </AnimatePresence>
      {/* Mobile Navbar */}
      <div className="lg:hidden flex min-w-full items-center justify-between py-5 px-5 xl:px-[120px] text-white bg-black z-50 absolute top-0 left-0">
        <Link to="/">
          <img src={logo} alt="" className="w-[147px] h-[37px]" />
        </Link>
        <div className="flex items-center gap-3">
          <p
            className="border-r px-4 cursor-pointer"
            onClick={() => setOpenLoginModal((pre) => !pre)}
          >
            Login
          </p>
          <p
            className=" cursor-pointer"
            onClick={() => setOpenSignUpModal((pre) => !pre)}
          >
            Sign Up
          </p>
          <div
            className={`${mobileNav ? "mb-4" : "m-0"}`}
            onClick={() => setMobileNav(!mobileNav)}
          >
            <p
              className={`h-1 w-8 bg-white rounded-full transition-all duration-300 ${
                mobileNav ? "rotate-45 translate-y-4" : "rotate-0"
              }`}
            ></p>
            <p
              className={`h-1 w-8 bg-white rounded-full transition-all duration-300 my-1 ${
                mobileNav ? "opacity-0" : "opacity-100"
              }`}
            ></p>
            <p
              className={`h-1 w-8 bg-white rounded-full transition-all duration-300 ${
                mobileNav ? "-rotate-45 origin-top" : "rotate-0"
              }}`}
            ></p>
          </div>
        </div>
      </div>

      {/* Slide Nav */}
      <div
        className={`min-h-screen bg-[#1f1f1f] w-full absolute py-20 px-5 left-0 z-30 lg:top-0 transition-all duration-500 ${
          mobileNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-screen flex flex-col justify-start items-start gap-5 text-white">
          <NavLink to={"/"} className="border-b border-b-[#656565] w-full pb-2">
            Home
          </NavLink>
          <div
            className={`w-full overflow-hidden border-b border-b-[#656565] transition-all duration-300 ${
              accordian ? "h-[190px]" : "h-[40px]"
            } `}
            onClick={() => setaccordian(!accordian)}
          >
            <h1 className="mb-5 flex justify-between items-center">
              Pages{" "}
              <BsChevronRight
                className={`transition-all duration-300 ${
                  accordian ? "rotate-90" : "rotate-0"
                }`}
              />
            </h1>
            <div className="flex flex-col gap-5 px-5">
              <NavLink to={"/about-us"}>About</NavLink>
              <NavLink to={"/our-team"}>Our Team</NavLink>
              <NavLink to={"/hotel-review"}>Hotel Review</NavLink>
            </div>
          </div>
          <NavLink
            to={"/rooms"}
            className="border-b border-b-[#656565] w-full pb-2"
          >
            Rooms
          </NavLink>
          <NavLink
            to={"/reservation"}
            className="border-b border-b-[#656565] w-full pb-2"
          >
            Reservation
          </NavLink>
          <NavLink
            to={"/blogs"}
            className="border-b border-b-[#656565] w-full pb-2"
          >
            Blog
          </NavLink>
          <NavLink
            to={"/contact"}
            className="border-b border-b-[#656565] w-full pb-2"
          >
            Contact
          </NavLink>
        </div>
      </div>
      <div className="relative h-[120vh] md:h-[130vh] xl:max-h-[100vh] mt-24 lg:m-0">
        {/* Laptop Navbar */}
        <div className=" relative top-0 bg-homeBg  w-full h-full bg-center bg-cover bg-no-repeat rounded-[20px]">
          <div className=" relative max-w-[1200px] h-[15%] mx-auto">
            <div className="hidden lg:flex min-w-full items-center justify-between absolute z-50 text-black px-10 xl:px-0 top-8">
              <div className=" text-white flex items-center gap-5">
                <div className="flex items-center gap-2 text-[15px]">
                  <BsTelephone />
                  <span>1-634-567-34</span>
                </div>
                <div className="flex items-center gap-2 text-[15px]">
                  <HiOutlineMail size={15} />
                  <span>Book@Hotale.co</span>
                </div>
              </div>
              <div className=" text-white flex gap-5">
                <button
                  onClick={() => setOpenLoginModal((pre) => !pre)}
                  className=" bg-transparent border-r-2 px-4 font-medium"
                >
                  Login
                </button>
                <button
                  className="font-medium"
                  onClick={() => setOpenSignUpModal((pre) => !pre)}
                >
                  Sign Up
                </button>
              </div>
            </div>

            <div className="hidden lg:flex min-w-full items-center absolute z-50 text-black px-10 xl:px-0   justify-between top-20">
              <Link to="/">
                <img src={logo} alt="" className="w-[147px] h-[37px] mb-3" />
              </Link>

              <div
                onMouseLeave={() => setOffsetLeft(0)}
                className=" relative flex gap-10 text-white tracking-widest text-[13px] font-semibold "
              >
                <div
                  style={{ transform: `translateX(${offsetLeft}px)` }}
                  className=" absolute mt-[30px] transition duration-300 w-[18px] h-[2px] bg-white"
                ></div>
                <NavLink
                  to={"/"}
                  className=" pb-1"
                  onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
                >
                  HOME
                </NavLink>
                <div className="">
                  <NavLink
                    className=" pb-6"
                    to={`/`}
                    onMouseEnter={(e) => {
                      setIsDropdownOpen(true);
                      setOffsetLeft(e.target.offsetLeft);
                    }}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    PAGES
                  </NavLink>
                  {/* dropdown  */}
                  <div
                    onMouseEnter={() => {
                      setIsDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      setTimeout(() => {
                        setIsDropdownOpen(false);
                      }, 500);
                    }}
                    className={`${
                      isDropdownOpen ? "block" : "hidden"
                    } cursor-default absolute top-10 transition duration-500 bg-white w-52 shadow py-5 px-4 flex flex-col space-y-5 z-[100]`}
                  >
                    <NavLink
                      to={"/about-us"}
                      className="text-[#757575] font-normal text-[16px] transition-all hover:text-black"
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      to={"/our-team"}
                      className="text-[#757575] font-normal text-[16px] transition-all hover:text-black"
                    >
                      Our Team
                    </NavLink>
                    <NavLink
                      to={"/hotel-review"}
                      className="text-[#757575] font-normal text-[16px] transition-all hover:text-black"
                    >
                      Hotel Reviews
                    </NavLink>
                  </div>
                </div>
                <NavLink
                  to={"/rooms"}
                  className=" pb-1"
                  onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
                >
                  ROOMS
                </NavLink>
                <NavLink
                  to={"/reservation"}
                  className=" pb-1"
                  onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
                >
                  RESERVATION
                </NavLink>
                <NavLink
                  to={"/blogs"}
                  className=" pb-1"
                  onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
                >
                  BLOG
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className=" pb-1"
                  onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
                >
                  CONTACT
                </NavLink>
              </div>
              <div className="flex items-center gap-8 text-white">
                <div className=" flex items-center gap-2">
                  <div className="">USD</div>
                  <IoMdArrowDropdown />
                </div>
                <div>
                  <Button text="BOOK NOW" />
                  {/* <button className=" bg-transparent border-2 text-white border-white px-5 py-3 font-semibold text-[13px] tracking-[2px]">BOOK NOW</button> */}
                </div>
              </div>
            </div>
          </div>

          <div className=" custom-gradient_top h-[344px] top-0 absolute w-full  rounded-[20px]"></div>
          <div className=" custom-gradient_bottom h-[338px] absolute bottom-0  w-full rounded-[20px]"></div>

          <div className="  w-full text-center h-[85%]">
            <div className=" max-w-[1320px] mx-auto flex flex-col items-center lg:pt-[20px] justify-center  px-[20px]">
              <div className="  flex flex-col top-2 absolute md:relative h-[40%] lg:pt-[50px] xl:pt-[90px] 2xl:pt-[150px] items-center justify-center">
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0, rotate: -4 }}
                  transition={{ duration: 1 }}
                  className=" font-allison  text-[65px] md:text-[126px] text-center leading-[100px] pb-[30px] text-[#FFF] -rotate-[4deg]"
                >
                  Book Your Vacation
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className=" text-center text-[#FFFFFF] text-[22px] px-[20px] pb-[30px] mt-0 lg:mt-10 mb-[20px]"
                >
                  Explore new experience with Hotale
                </motion.p>
              </div>

              <form className=" absolute bottom-3 md:bottom-10 2xl:bottom-[15%] flex flex-col xl:flex-row gap-3 flex-wrap">
                <div>
                  <div className="md:flex gap-[10px]">
                    <div className=" md:w-1/2 bg-white py-[15px] px-[25px] rounded-md mb-3 md:mb-0">
                      <div className=" text-[#8f8f8f]">Check In</div>
                      <DatePickerHome />
                    </div>
                    <div className=" md:w-1/2 bg-white py-[15px] px-[25px]  rounded-md">
                      <div className=" text-[#8f8f8f]">Check Out</div>
                      <DatePickerHome />
                    </div>
                  </div>
                </div>

                <div className=" md:w-full xl:w-[121px] bg-white py-[15px] px-[25px] rounded-md">
                  <div
                    onClick={() => setRoomToggle((pre) => !pre)}
                    className=" text-[#8f8f8f] cursor-pointer mb-[5px]"
                  >
                    Room
                  </div>
                  <div className="flex items-center justify-between cursor-pointer">
                    <p>{roomNum}</p>
                    <div>
                      <IoMdArrowDropdown
                        onClick={() => setRoomToggle((pre) => !pre)}
                      />
                    </div>
                  </div>
                  <div className=" relative">
                    {roomToggle ? (
                      <RoomModalHome
                        roomNum={roomNum}
                        setRoomNum={setRoomNum}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className=" bg-white py-[15px] px-[25px]  rounded-md">
                  <div className=" text-[#8f8f8f] mb-[5px]">Guests</div>
                  <div className="flex items-center justify-between">
                    <div className=" w-full flex items-center gap-5 justify-between">
                      <div
                        onClick={() => setGuestToggle((pre) => !pre)}
                        className=" cursor-pointer select-none"
                      >
                        <span className=" mr-4">Adult {adultNum}</span>
                        <span>children {childrenNum}</span>
                      </div>
                      <IoMdArrowDropdown
                        className=" cursor-pointer"
                        onClick={() => setGuestToggle((pre) => !pre)}
                      />
                    </div>
                    <div className=" relative">
                      {guestToggle && (
                        <GuestModalHome
                          adultNum={adultNum}
                          setAdultNum={setAdultNum}
                          setChildrenNum={setChildrenNum}
                          childrenNum={childrenNum}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <button className=" bg-transparent border-2 text-white border-white px-[35px] py-[15px] md:py-[5px] rounded-md font-semibold">
                  SEARCH ROOM
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
