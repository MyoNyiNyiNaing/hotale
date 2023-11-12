import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const CustomDropdown = ({ offsetLeft, setOffsetLeft }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <NavLink
          to={"/"}
          // onMouseLeave={() => {
          //   setIsDropdownOpen(false);
          // }}
          onMouseEnter={(e) => {
            setIsDropdownOpen(!isDropdownOpen);
            setOffsetLeft(e.target.offsetLeft);
          }}
        >
          PAGES
        </NavLink>

        <div
          onMouseEnter={() => {
            setIsDropdownOpen(true);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsDropdownOpen(false);
            }, 500);
          }}
          className={` ${
            isDropdownOpen ? "opacity-100" : "opacity-0"
          } transition-all duration-500  absolute top-10 bg-white w-52 shadow py-5 px-4 flex flex-col space-y-5 z-[100]`}
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
    </>
  );
};

export default CustomDropdown;
