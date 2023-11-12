import React from "react";
import TitlePara from "../../utils/TitlePara";
import { BsSend } from "react-icons/bs";
import Gallery from "./Gallery";
const NewsLetter = () => {
  return (
    <div className="my-10 relative -mt-10">
      <TitlePara
        title="Newsletter"
        para="Subscribe the newsletter to get updated to news and promotions"
      />
      <div className="h-[400px] bg-[#F8F8F8] w-full rounded-3xl absolute left-0 top-32 -z-50 hidden lg:block"></div>

      <div className=" mx-auto text-center">
        <div className=" flex items-center gap-3 justify-center">
          <input
            type="text"
            required
            placeholder="Your Email Address"
            className=" shadow-[0_10px_45px_rgba(0,0,0,.1)] text-[#898989] fw-[400] w-[70%] sm:w-[380px] h-[76px] rounded-[20px] py-[6px] px-[25px] outline-none text-[17px]"
          />
          <button className=" bg-black text-white w-[76px] h-[76px] rounded-[20px] flex items-center justify-center text-xl">
            <BsSend />
          </button>
        </div>
      </div>
      <Gallery />
    </div>
  );
};

export default NewsLetter;
