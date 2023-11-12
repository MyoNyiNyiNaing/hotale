import React, { useEffect, useRef, useState } from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoMenuSharp } from "react-icons/io5";
import logo from "../assets/logo.png";
import Button from "../utils/Button";
import { NavLink, useLocation, useParams } from "react-router-dom";
import CustomDropdown from "../utils/CustomDropdown";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsChevronRight } from "react-icons/bs";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [accordian, setaccordian] = useState(false);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [active, setActive] = useState(0);
  const { id } = useParams();

  const location = useLocation();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const roomRef = useRef(null);
  const reservationRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/home") {
      setActive(0);
      setOffsetLeft(0);
    } else if (
      location.pathname === "/about-us" ||
      location.pathname === "/our-team" ||
      location.pathname === "/hotel-review"
    ) {
      setActive(aboutRef.current.offsetLeft);
      setOffsetLeft(aboutRef.current.offsetLeft);
    } else if (
      location.pathname === "/rooms" ||
      location.pathname === `/roomsDetails/${id}`
    ) {
      setActive(roomRef.current.offsetLeft);
      setOffsetLeft(roomRef.current.offsetLeft);
    } else if (location.pathname === "/reservation") {
      setActive(reservationRef.current.offsetLeft);
      setOffsetLeft(reservationRef.current.offsetLeft);
    } else if (
      location.pathname === "/blogs" ||
      location.pathname === `/blogDetails/${id}`
    ) {
      setActive(blogRef.current.offsetLeft);
      setOffsetLeft(blogRef.current.offsetLeft);
    } else if (location.pathname === "/contact") {
      setActive(contactRef.current.offsetLeft);
      setOffsetLeft(contactRef.current.offsetLeft);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      }
      window.scrollY < 300 && setShowNav(false);
      setMobileNav(false);
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
      <div
        className={`bg-[#000] fixed top-0 left-0 transition-all duration-500 w-full text-[#fff] z-40 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center max-w-[1200px] mx-auto px-5 xl:px-0 py-5 relative z-50">
          <img src={logo} className="h-[37px]"></img>
          <div
            onMouseLeave={() => setOffsetLeft(active)}
            className=" relative hidden lg:flex gap-10 text-white tracking-widest text-[13px] font-semibold "
          >
            <div
              style={{ transform: `translateX(${offsetLeft}px)` }}
              className=" absolute mt-[30px] transition duration-300 w-[18px] h-[2px] bg-white"
            ></div>
            <NavLink
              to={"/"}
              className=" pb-1"
              onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
              ref={homeRef}
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
                ref={aboutRef}
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
              ref={roomRef}
            >
              ROOMS
            </NavLink>
            <NavLink
              to={"/reservation"}
              className=" pb-1"
              onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
              ref={reservationRef}
            >
              RESERVATION
            </NavLink>
            <NavLink
              to={"/blogs"}
              className=" pb-1"
              onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
              ref={blogRef}
            >
              BLOG
            </NavLink>
            <NavLink
              to={"/contact"}
              className=" pb-1"
              onMouseEnter={(e) => setOffsetLeft(e.target.offsetLeft)}
              ref={contactRef}
            >
              CONTACT
            </NavLink>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-white">
            <div className=" flex items-center gap-2">
              <div className="">USD</div>
              <IoMdArrowDropdown />
            </div>
            <div>
              <Button text="BOOK NOW" />
              {/* <button className=" bg-transparent border-2 text-white border-white px-5 py-3 font-semibold text-[13px] tracking-[2px]">BOOK NOW</button> */}
            </div>
          </div>
          <div className="flex lg:hidden items-center gap-3">
            <p
              className="px-4 border-r"
              onClick={() => setOpenLoginModal(!openLoginModal)}
            >
              Login
            </p>
            <p onClick={() => setOpenSignUpModal(!openSignUpModal)}>Sign Up</p>
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
          className={`min-h-screen bg-[#1f1f1f] w-full absolute py-8 px-5 left-0 transition-all duration-500 ${
            mobileNav ? "translate-y-0 top-[70px]" : "-translate-y-full top-0"
          } `}
        >
          <div className="h-screen flex flex-col justify-start items-start gap-5 text-white">
            <NavLink
              to={"/"}
              className="border-b border-b-[#656565] w-full pb-2"
            >
              Home
            </NavLink>
            <div
              className={`w-full overflow-hidden border-b border-b-[#656565] transition-all duration-300 ${
                accordian ? "h-[190px]" : "h-[35px]"
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
      </div>
    </>
  );
};

export default Header;
