import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";

const BannerForAll = ({ text, desc }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [offsetLeft, setOffsetLeft] = useState(0);

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  return (
    <>
      <AnimatePresence>
        {openLoginModal && <LoginModal setOpenLoginModal={setOpenLoginModal} />}
        {openSignUpModal && (
          <SignupModal setOpenSignUpModal={setOpenSignUpModal} />
        )}
      </AnimatePresence>
      {/* Mobile Navbar */}
      <div className="lg:hidden flex min-w-full items-center justify-between py-5 px-[40px] xl:px-[120px] text-white bg-black z-50 absolute top-0 left-0">
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
          <IoMenuSharp className="text-3xl" />
        </div>
      </div>
      {/* Desktop Navbar */}
      <div className="relative h-[20vh] mt-28 lg:mt-0 md:min-h-[30vh] lg:h-[65vh]">
        <div className=" absolute top-0 bg-bannerBg w-full h-full bg-center bg-cover bg-no-repeat rounded-[20px]">
          <div className="hidden lg:flex min-w-full items-center justify-between absolute z-50 text-black px-[40px] xl:px-[120px] top-8">
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
                onClick={() => setOpenSignUpModal((pre) => !pre)}
                className=" font-medium"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="hidden lg:flex min-w-full items-center absolute z-50 text-black px-[40px] xl:px-[120px] justify-between top-24">
            <Link to={"/"}>
              <img src={logo} alt="" className="w-[147px] h-[37px] mb-3" />
            </Link>
            <div
              onMouseLeave={() => setOffsetLeft(0)}
              className=" relative flex gap-10 text-white tracking-widest text-[13px] font-semibold "
            >
              <div
                style={{ transform: `translateX(${offsetLeft}px)` }}
                className=" absolute mt-[30px] transition duration-300 w-[30px] h-[2px] bg-white"
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
        {/* <div className=" custom-gradient_top h-[344px] top-0 absolute w-full  rounded-[20px]"></div> */}
        {/* <div className=" custom-gradient_bottom h-[338px] absolute bottom-0  w-full rounded-[20px]"></div> */}

        <div className="absolute h-[20vh] md:h-[30vh] lg:h-[80vh] w-full flex items-center justify-center">
          <div className=" flex flex-col  items-center justify-center ">
            <h1 className=" text-[40px] md:text-[70px] text-white font-light">
              {text}
            </h1>
            <p className=" text-[15px] md:text-[31px] text-white font-light">
              {desc}
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

BannerForAll.defaultProps = {
  text: "About Us",
  desc: "",
};

export default BannerForAll;
