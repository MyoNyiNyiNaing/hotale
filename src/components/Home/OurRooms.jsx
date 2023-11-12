import React from "react";
import TitlePara from "../../utils/TitlePara";
import RoomCard from "../../utils/RoomCard";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "./customSplide.css";
import { rooms } from "../../utils/rooms";
const OurRooms = () => {
  return (
    <>
      <div
        className="bg-none lg:bg-[url('https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/11/Square.png')] bg-no-repeat pb-10 h-[1200px]"
        style={{
          backgroundPosition: "top center",
        }}
      >
        <div className="max-w-[1300px] mx-auto">
          <TitlePara title={"Our Rooms"} />
          <div className="flex flex-col items-center gap-10">
            <div className="w-[85%] mx-auto">
              <Splide
                id="customArrow"
                options={{
                  perPage: 3,
                  perMove: 1,
                  gap: "10px",
                  padding: { left: "20px" },
                  arrows: true,
                  autoplay: true,
                  type: "loop",
                  cover: false,
                  pagination: false,
                  breakpoints: {
                    1200: {
                      // arrows: false,
                      perPage: 2,
                    },
                    800: {
                      arrows: false,
                      perPage: 2,
                      gap: "20px",
                      padding: "10px",
                    },
                    640: { perPage: 1 },
                  },
                }}
              >
                {rooms.map((room) => {
                  return (
                    <SplideSlide className="py-5" key={room.id}>
                      <RoomCard room={room} />
                    </SplideSlide>
                  );
                })}
              </Splide>
            </div>
            <p className="flex gap-2 items-center border-b  border-[#dadada] pb-2 uppercase text-sm font-semibold transition-all duration-500 cursor-pointer hover:border-black">
              View All Rooms <HiOutlineChevronRight className="text-xl" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurRooms;
