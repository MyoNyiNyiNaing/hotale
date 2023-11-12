import { BsChevronRight, BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../assets/logo.png";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import Button from "../utils/Button";
import { IoMdArrowDropdown } from "react-icons/io";
// import CustomDropdown from "../utils/CustomDropdown";

import { useEffect, useRef, useState } from "react";


const AboutUsBanner = ({
  openLoginModal,
  setOpenLoginModal,
  openSignUpModal,
  setOpenSignUpModal,
  children,
}) => {
  const {id} = useParams()
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [active, setActive] = useState(0)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const location = useLocation()
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const roomRef = useRef(null);
  const reservationRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(()=> {
    if(location.pathname === "/about-us" || location.pathname === "/our-team" || location.pathname === "/hotel-review"){
        setActive(aboutRef.current.offsetLeft)
        setOffsetLeft(aboutRef.current.offsetLeft)
    }else if(location.pathname === "/rooms" || location.pathname === `/roomsDetails/${id}`){
      setActive(roomRef.current.offsetLeft)
      setOffsetLeft(roomRef.current.offsetLeft)
    }else if(location.pathname === "/reservation"){
      setActive(reservationRef.current.offsetLeft)
      setOffsetLeft(reservationRef.current.offsetLeft)
    }else if(location.pathname === "/blogs"){
      setActive(blogRef.current.offsetLeft)
      setOffsetLeft(blogRef.current.offsetLeft)
    }else if(location.pathname === "/contact"){
      setActive(contactRef.current.offsetLeft)
      setOffsetLeft(contactRef.current.offsetLeft)
    }
  }, [])

  const [mobileNav, setMobileNav] = useState(false);
  const [accordian, setaccordian] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setMobileNav(false);
      }
    });
  }, [scrollY]);

  return (
    <>
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
        className={`min-h-screen bg-[#1f1f1f] w-full absolute lg:hidden py-20 top-6 px-10 left-0 z-30 transition-all duration-500 ${
          mobileNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-screen flex flex-col justify-start items-start gap-5 text-white">
          <NavLink to={"/"} className="border-b border-b-[#656565] w-full pb-2">
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
      <div className="pt-8 px-10 bg-bannerBg overflow-hidden bg-cover rounded-[20px] max-h-[65vh] md:max-h-[100vh] mt-24 lg:m-0 bg-no-repeat relative">
        <div className=" text-white  max-w-[1300px] mx-auto">
          <div className=" space-y-8 hidden lg:block">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-10 text-[15px] font-[400] tracking-[1px]">
                <div className="flex items-center gap-2">
                  <BsTelephone />
                  <span>1-634-567-34</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineMail size={15} />
                  <span>Book@Hotale.co</span>
                </div>
              </div>
              <div className=" flex gap-5 text-[15px] font-[600] tracking-[1px]">
                <button
                  onClick={() => setOpenLoginModal(!openLoginModal)}
                  className=" bg-transparent border-r-2 px-4"
                >
                  Login
                </button>
                <button
                  onClick={() => setOpenSignUpModal(!openSignUpModal)}
                  className=""
                >
                  Sign Up
                </button>
              </div>
            </div>

            <div className=" flex items-center justify-between ">
              <Link to={`/`}>
                <img
                  src={logo}
                  alt=""
                  className="w-[147px] h-[37px] mb-3 cursor-pointer"
                />
              </Link>
              <div
                  onMouseLeave={() => setOffsetLeft(active)}
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
              <div className="flex items-center gap-8 text-white pb-1">
                <div className=" flex items-center gap-2">
                  <div className="">USD</div>
                  <IoMdArrowDropdown />
                </div>
                <Link to={`/reservation`}>
                  <div className=" cursor-pointer text-[13px] font-[600] tracking-[2px]">
                    <Button text="BOOK NOW" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className=" text-center text-white mt-20 space-y-5 md:max-w-[60%] mx-auto">
            <h1 className=" text-[40px] md:text-[98px] font-[400]">Our Team</h1>
            <p className=" text-[31px] font-[400] tracking-[3px]">
              Our staff and fellows are well experienced in hospitality
              industry.
            </p>
          </div> */}
          {children}
        </div>
      </div>
    </>
  );
};

// AboutUsBanner.defaultProps = {
//   text: "About Us",
// };

export default AboutUsBanner;
