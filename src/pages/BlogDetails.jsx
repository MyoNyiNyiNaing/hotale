import { BsChevronRight, BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../assets/logo.png";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import Button from "../utils/Button";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

import { VscQuote } from "react-icons/vsc";
import { SlTag } from "react-icons/sl";
import { GrNext } from "react-icons/gr";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
const BlogDetails = () => {
  const { id } = useParams();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const [offsetLeft, setOffsetLeft] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [active, setActive] = useState(0);
  const location = useLocation();
  const blogRef = useRef(null);
  useEffect(() => {
    if (location.pathname === `/blogDetails/${id}`) {
      setActive(blogRef.current.offsetLeft);
      setOffsetLeft(blogRef.current.offsetLeft);
    }
  }, []);

  window.scrollTo({
    top: 0,
  });

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
          className={`min-h-screen bg-[#1f1f1f] w-full absolute py-20 px-10 left-0 z-30 lg:top-0 transition-all duration-500 ${
            mobileNav ? "translate-y-0 top-7" : "-translate-y-full top-0"
          }`}
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
        <div className="bg-bannerBg overflow-hidden bg-cover max-h-[65vh] md:min-h-[600px] bg-no-repeat relative mt-20 lg:m-0">
          <div className=" text-white">
            <div className="max-w-[1300px] mx-auto pt-8 px-10 space-y-10 hidden lg:block">
              <div className=" flex items-center justify-between">
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

              <div className=" flex items-center justify-between">
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
                    ref={blogRef}
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
                <div className="flex items-center gap-8 text-white  pb-1">
                  <div className=" flex items-center gap-2">
                    <div className="">USD</div>
                    <IoMdArrowDropdown />
                  </div>
                  <div className=" cursor-pointer text-[13px] font-[600] tracking-[2px]">
                    <Button text="BOOK NOW" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-fit md:min-h-screen lg:min-h-full px-5 text-center text-white h-[300px] flex flex-col items-center justify-center space-y-5 md:max-w-[80%] mx-auto">
            <h1 className=" text-[40px] md:text-[50px] font-[400]">
              Cities To Visit For Your First Time In Europe
            </h1>
            <div className="cursor-pointer">
              Dec 17, 2021 <span className="px-3">•</span> James Doe{" "}
              <span className="px-3">•</span> Article, Hotel
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-12 gap-8 my-10 max-w-[1300px] mx-auto">
          <div className="col-span-12 lg:col-span-8 text-[#656565]">
            <p className="leading-8 text-lg">
              <span className="font-bold">
                Far far away, behind the word mountains
              </span>
              , far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the
              coast of the Semantics, a large language ocean. A small river
              named Duden flows by their place and supplies it with the
              necessary regelialia. It is a paradisematic country, in which
              roasted.
            </p>
            <div className="text-[#424242] my-10">
              <VscQuote className="text-5xl float-left mr-5" />
              <p className=" italic text-3xl font-amiri font-normal leading-10 flex">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows.
              </p>
            </div>
            <div>
              <img
                src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2020/10/shutterstock_307470824-600x401.jpg"
                alt=""
                className=" xl:float-left h-[300px] mr-6 mb-6"
              />
              <p className="text-lg">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia,
                <span className=" underline">
                  {" "}
                  there live the blind texts. Separated they live in
                  Bookmarksgrove
                </span>{" "}
                right at the coast of the Semantics, a large language ocean. A
                small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted. It with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth. Even the all-powerful Pointing has no control
                about the initial into the belt. The Big Oxmox advised her not
                to do so, because there were thousands of bad Commas, wild
                Question Marks and devious Semikoli, but the Little Blind Text
                didn’t listen. She packed her seven versalia, put her initial
                into the belt and made
              </p>
            </div>
            <div className="my-10 border-b pb-10 clear-left">
              <h1 className="font-bold text-3xl text-black">
                Some Useful Travel Tips
              </h1>
              <ul className=" list-disc list-inside px-5 my-8">
                <li className="mb-2 text-lg ">Travel Planning</li>
                <li className="mb-2 text-lg ">Staying Like a Local </li>
                <li className="mb-2 text-lg ">How to do the budget</li>
                <li className="mb-2 text-lg ">Food when travel</li>
              </ul>
              <p className="text-lg leading-8">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted.
              </p>
              <div className="grid grid-cols-12 gap-5 my-10">
                <div className="col-span-6 md:col-span-4">
                  <img
                    src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/jason-king-533730-unsplash-1229x1536.jpg"
                    alt=""
                    className="h-[300px] md:h-[350px] w-[250px] object-cover"
                  />
                </div>
                <div className="col-span-6 md:col-span-4">
                  <img
                    src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2020/10/shutterstock_1069630346-1536x1024.jpg"
                    alt=""
                    className="h-[300px] md:h-[350px] w-[250px] object-cover"
                  />
                </div>

                <div className="col-span-12 md:col-span-4">
                  <img
                    src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/pascal-diekmann-707233-unsplash-1229x1536.jpg"
                    alt=""
                    className=" h-[350px] w-full md:w-[250px] "
                  />
                </div>
              </div>
              <p className="text-lg leading-8">
                The Big Oxmox advised her not to do so, because there were
                thousands of bad Commas, wild Question Marks and devious
                Semikoli, but the Little Blind Text didn’t listen. She packed
                her seven versalia, put her initial into the belt and made
                herself on the way. When she reached the first hills of the
                Italic Mountains, she had a last view back on the skyline of her
                hometown Bookmarksgrove, the headline of Alphabet Village and
                the subline of her own road, the Line.
              </p>
            </div>
            <div className="my-10">
              <div>
                <h3 className="uppercase text-sm font-semibold tracking-[1.5px] mb-2 text-[#b1b1b1]">
                  Previous Post
                </h3>
                <h1 className=" text-black font-semibold text-xl leading-8">
                  Where to travel in 2022: 10 places you
                  <br />
                  need to go in 2022!
                </h1>
              </div>
              <div className="flex flex-col items-start gap-5 md:flex-row justify-between md:items-center md:gap-0 my-10">
                <div className="flex items-center gap-5 text-lg ">
                  <SlTag />
                  <p className=" border-b-2 text-black">Nature</p>
                  <p className=" border-b-2 text-black">Tips</p>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex gap-3 items-center text-white">
                    <div className="w-10 h-10 bg-black flex items-center justify-center rounded-full cursor-pointer text-lg">
                      <FaFacebookF />
                    </div>
                    <div className="w-10 h-10 bg-black flex items-center justify-center rounded-full cursor-pointer text-lg">
                      {" "}
                      <FaLinkedinIn />
                    </div>
                    <div className="w-10 h-10 bg-black flex items-center justify-center rounded-full cursor-pointer text-lg">
                      <FaPinterestP />
                    </div>
                    <div className="w-10 h-10 bg-black flex items-center justify-center rounded-full cursor-pointer text-lg">
                      <FaTwitter />
                    </div>
                    <div className="w-10 h-10 bg-black flex items-center justify-center rounded-full cursor-pointer text-xl">
                      <MdEmail />
                    </div>
                  </div>
                  <div className=" border-l-2 pl-5 font-semibold text-[#202020]">
                    <p>0 Shares</p>
                  </div>
                </div>
              </div>
              <div className="my-20">
                <div className=" flex flex-col md:flex-row items-center md:items-start gap-8 shadow-xl p-10 rounded">
                  <img
                    src="https://secure.gravatar.com/avatar/e93616c6d8116aa5375e95e0458ce064?s=180&d=mm&r=g"
                    alt=""
                    className=" rounded-full h-[90px]"
                  />
                  <div>
                    <h3 className="uppercase text-sm font-semibold tracking-[1.5px] text-[#b1b1b1]">
                      Written By
                    </h3>
                    <h1 className=" text-black font-semibold text-xl leading-8">
                      Jame Doe
                    </h1>
                    <p className="text-lg mt-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className=" text-black font-bold text-3xl mb-10">
                  Related Posts
                </h1>
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-11 md:col-span-6">
                    <div className="flex flex-col gap-8">
                      <div className="overflow-hidden bg-black">
                        <img
                          src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2020/10/shutterstock_560973166-700x450.jpg"
                          alt=""
                          className="w-full h-full transition-all duration-500 cursor-pointer hover:scale-110 hover:opacity-70"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-xs text-[#656565] mb-3">
                          DEC 17, 2021
                        </p>
                        <h1 className="font-semibold text-xl text-black transition-all duration-50 cursor-pointer hover:text-[#6d6d6d]">
                          My 6 Biggest Travel Surprises
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-11 md:col-span-6">
                    <div className="flex flex-col gap-8">
                      <div className="overflow-hidden bg-black">
                        <img
                          src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/pexels-photo-871053-700x450.jpeg"
                          alt=""
                          className="w-full h-full transition-all duration-500 cursor-pointer hover:scale-110 hover:opacity-70"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-xs text-[#656565] mb-3">
                          DEC 17, 2021
                        </p>
                        <h1 className="font-semibold text-xl text-black transition-all duration-50 cursor-pointer hover:text-[#6d6d6d]">
                          Why I Quit My Job To Be A Less Occasional Traveller In
                          2019
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className=" text-black font-bold text-3xl mb-10">
                Leave a Reply
              </h1>
              <div className="grid grid-cols-12 gap-3">
                <textarea
                  name=""
                  id=""
                  cols="120"
                  rows="8"
                  placeholder="Comment*"
                  className="border p-5 outline-none col-span-12"
                ></textarea>
                <input
                  type="text"
                  placeholder="Name*"
                  className="col-span-6 border px-5 py-3 outline-none"
                />
                <input
                  type="text"
                  placeholder="Email*"
                  className="col-span-6 border px-5 py-3 outline-none"
                />
                <input
                  type="text"
                  placeholder="Website"
                  className="col-span-12 border px-5 py-3 outline-none"
                />
              </div>
              <div className="flex items-center gap-2 mt-3">
                <input type="checkbox" name="save" id="save" />
                <label htmlFor="save" className="text-lg">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <button className=" bg-black text-white py-4 px-8 my-8 font-bold text-sm">
                Post Comment
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-4">
            <div>
              <h1 className="text-xl font-medium mb-6">Text Widget</h1>
              <p className="leading-8 text-lg text-[#656565]">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence.
              </p>
            </div>
            <div className="my-10">
              <h1 className="text-xl font-medium mb-6">Recent Articles</h1>
              <div className=" flex flex-col gap-8">
                <div className="flex gap-5">
                  <div className="w-16 h-16">
                    <img
                      src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2020/10/aaron-huber-401200-unsplash-150x150.jpg"
                      alt=""
                      className=" rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className=" font-normal text-base text-[#a8a8a8]">
                      Dec 17, 2021
                    </h3>
                    <p className=" font-semibold text-lg text-black">
                      My 6 Biggest Travel Surprises
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className=" w-16 h-16 overflow-hidden">
                    <img
                      src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2020/10/roan-lavery-sEcYfPfKOhw-unsplash-150x150.jpg"
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className=" font-normal text-base text-[#a8a8a8]">
                      Dec 17, 2021
                    </h3>
                    <p className=" font-bold text-lg text-black leading-8">
                      Tips For Picking Vacation Accommodation
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className=" w-16 h-16 overflow-hidden">
                    <img
                      src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/pexels-photo-25284-150x150.jpg"
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className=" font-normal text-base text-[#a8a8a8]">
                      Dec 17, 2021
                    </h3>
                    <p className=" font-bold text-lg text-black leading-8">
                      What to expect on an African Safari?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-medium mb-6">Tag Cloud</h1>
              <div className="grid grid-cols-12 gap-2">
                <button className="col-span-3 py-2 bg-[#ececec] text-sm font-bold text-[#656565] transition-all duration-500 hover:text-black">
                  Article
                </button>
                <button className="col-span-3 py-2 bg-[#ececec] text-sm font-bold text-[#656565] transition-all duration-500 hover:text-black">
                  Asia
                </button>
                <button className="col-span-3 py-2 bg-[#ececec] text-sm font-bold text-[#656565] transition-all duration-500 hover:text-black">
                  Hotel
                </button>
                <button className="col-span-3 py-2 bg-[#ececec] text-sm font-bold text-[#656565] transition-all duration-500 hover:text-black">
                  Nature
                </button>
                <button className="col-span-3 py-2 bg-[#ececec] text-sm font-bold text-[#656565] transition-all duration-500 hover:text-black">
                  Resort
                </button>
                <button className="col-span-3 py-2 bg-[#ececec] text-sm font-bold text-[#656565] transition-all duration-500 hover:text-black">
                  Spa
                </button>
                <button className="col-span-3 py-2 bg-[#ececec] text-sm font-bold text-[#656565] transition-all duration-500 hover:text-black">
                  Tips
                </button>
                <button className="col-span-3 py-2 bg-[#ececec] text-sm font-bold text-[#656565] transition-all duration-500 hover:text-black">
                  Tour
                </button>
                <button className="col-span-3 py-2 bg-[#ececec] text-sm font-bold text-[#656565] transition-all duration-500 hover:text-black">
                  Travel
                </button>
              </div>
            </div>
            <div className="my-10">
              <h1 className="text-xl font-medium mb-6">Post Category</h1>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-lg border-b pb-3">
                  <GrNext className="text-sm" />
                  <p>Blog</p>
                </div>
                <div className="flex items-center gap-3 text-lg border-b pb-3">
                  <GrNext className="text-sm" />
                  <p>Planning</p>
                </div>
                <div className="flex items-center gap-3 text-lg border-b pb-3">
                  <GrNext className="text-sm" />
                  <p>Tips</p>
                </div>
                <div className="flex items-center gap-3 text-lg border-b pb-3">
                  <GrNext className="text-sm" />
                  <p>Uncategorized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogDetails;
