import React from "react";
import footerLogo from "../assets/footer-logo.png";
import footerBanner from "../assets/footer-banner.png";
import footerCard from "../assets/footer-cards.png";
import { FaFacebookF, FaPinterestP, FaTiktok, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#000] text-[#fff] rounded-3xl px-8 md:px-20 pt-20 pb-10 mb-5 mt-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6 xl:col-span-3 flex flex-col gap-8">
          <img src={footerLogo} alt="" width="110" height="27" />
          <div className="flex gap-5 items-center text-base">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
            <FaTiktok />
          </div>
          <button className="self-start px-4 py-2 bg-[#333]">USD</button>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-3">
          <h1 className=" font-semibold uppercase tracking-widest text-base">
            Contact
          </h1>
          <div className=" mt-6 text-lg">
            <p className=" text-para mb-5">
              <span className="font-semibold text-[#fff]">T</span>: 1-634-567-34
            </p>

            <p className=" text-para mb-5">
              <span className="font-semibold text-[#fff]">E</span>:
              Book@Hotel.co
            </p>

            <p className=" text-para mb-5">
              <span className="font-semibold text-[#fff]">F</span>: 1-634-567-35
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-3">
          <h1 className="font-semibold uppercase tracking-widest">
            Hotel Address
          </h1>
          <p className="mt-6 text-lg leading-8">
            Hotale Av.
            <br />
            del Ejercito, 2, 1900
            <br /> Madrid, Spain
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-3">
          <img src={footerBanner} alt="" />
          <img
            src={footerCard}
            alt=""
            width={160}
            height={15}
            className="ml-3 md:ml-7 mt-6"
          />
        </div>
      </div>
      <div className="flex lg:flex-row mt-16 flex-col gap-4 items-center">
        <ul className="uppercase flex items-center gap-5 text-sm flex-1">
          <li>Home</li>
          <li>About</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </ul>
        <p className="text-lg text-[#939393]">
          Copyright © GoodLayers. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
