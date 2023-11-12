import React, { useEffect, useState } from "react";
import AboutUsBanner from "../components/AboutUsBanner";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import { useParams } from "react-router";
import { rooms } from "../utils/rooms";
import { IoBedOutline } from "react-icons/io5";
import { BsDashLg, BsPeople } from "react-icons/bs";
import { TbCircleDotFilled, TbTrees } from "react-icons/tb";
import { GiResize } from "react-icons/gi";
import { hotelAmenities, roomAmenities } from "../utils/amenities";
import RoomSizeModal from "../components/ReservationModals/RoomSizeModal";

import ImgSlideCarousel from "../components/RoomsDetail/ImgSlideCarousel";
import RoomCarousel from "../components/RoomsDetail/RoomCarousel";
import BookingForm from "../components/RoomsDetail/BookingForm";

const RoomsDetails = () => {
  const [room, setRoom] = useState({});
  const { id } = useParams();
  const roomid = parseInt(id);
  useEffect(() => {
    setRoom(rooms.find((el) => el?.id === roomid));
  }, [rooms]);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  return (
    <>
      {openLoginModal && <LoginModal setOpenLoginModal={setOpenLoginModal} />}
      {openSignUpModal && (
        <SignupModal setOpenSignUpModal={setOpenSignUpModal} />
      )}
      <div>
        <AboutUsBanner
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
          openSignUpModal={openSignUpModal}
          setOpenSignUpModal={setOpenSignUpModal}
        >
          <div className=" text-center text-white h-[300px] lg:mb-10 flex flex-col items-center justify-center space-y-5 md:max-w-[60%] mx-auto">
            <h1 className=" text-[40px] md:text-[70px] font-[400]">
              {room?.name}
            </h1>
          </div>
        </AboutUsBanner>

        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-10 my-10 md:my-[80px] md:max-w-[1300px] px-[20px] md:mx-auto">
            <div className="w-full md:w-[70%]">
              <img
                className="w-full mb-10 h-[200px] md:h-[400px] object-cover rounded-3xl"
                src={room?.img}
                alt=""
              />
              <div className="flex flex-wrap justify-between mb-5">
                <h1 className="text-[34px] text-[#0c0c0c] font-[500]">
                  {room?.name}
                </h1>
                <div>
                  <span className="text-[25px] font-[500]">
                    From
                    <span className=" text-sm line-through">
                      {room?.promo ? "$" + room.price + ".00" : ""}
                    </span>
                    $
                    {room?.promo
                      ? room?.price - (room?.price * room?.promo) / 100 + ".00"
                      : room?.price + ".00"}
                  </span>
                  <br />
                  <span className="text-[#949494]">per night</span>
                </div>
              </div>

              {/* room features */}
              <div>
                <h1 className="text-[20px] text-[#656565] mb-10">
                  Room Features
                </h1>
                <hr className="mb-10" />
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-[600px]">
                  <div className="mb-10 flex items-start gap-5">
                    <IoBedOutline className="text-[28px] text-gray-700" />
                    <div className="text-start">
                      <h3 className="text-[19px] font-[600] text-[#383838]">
                        Bed
                      </h3>
                      <span>{room?.beds}</span>
                    </div>
                  </div>
                  <div className="mb-10 flex items-start gap-5">
                    <BsPeople className="text-[28px] text-gray-700" />
                    <div className="text-start">
                      <h3 className="text-[19px] font-[600] text-[#383838]">
                        Max Guest
                      </h3>
                      <span>{room?.guests} Guests</span>
                    </div>
                  </div>
                  <div className="mb-10 flex items-start gap-5">
                    <GiResize className="text-[28px] text-gray-700" />
                    <div className="text-start">
                      <h3 className="text-[19px] font-[600] text-[#383838]">
                        Room Space
                      </h3>
                      <span>{room?.area}</span>
                    </div>
                  </div>
                  <div className="mb-10 flex items-start gap-5">
                    <TbTrees className="text-[28px] text-gray-700" />
                    <div className="text-start">
                      <h3 className="text-[19px] font-[600] text-[#383838]">
                        Room View
                      </h3>
                      <span>{room?.view}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#656565] leading-8 jost mb-10">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth. Even
                    the all-powerful Pointing has no control about the blind
                    texts it is an almost unorthographic life One day however a
                    small line of blind text by the name of Lorem Ipsum decided
                    to leave for the far World of Grammar.
                    <br />
                    <br />
                    The Big Oxmox advised her not to do so, because there were
                    thousands of bad Commas, wild Question Marks and devious
                    Semikoli, but the Little Blind Text didn’t listen. She
                    packed her seven versalia, put her initial into the belt and
                    made herself on the way. When she reached the first hills of
                    the Italic Mountains, she had a last view back on the
                    skyline of her hometown
                  </p>
                </div>
                <hr className="mb-10" />

                {/* amenities  */}
                <div className="mb-[80px]">
                  <h1 className="text-[25px] text-[#383838] font-[500] mb-8">
                    Room Amenities
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {roomAmenities?.map((el) => {
                      return (
                        <div
                          key={el?.id}
                          className="select-none transition ease-in-out delay-50 hover:-translate-y-2 duration-300 w-full p-5 border border-gray-300 rounded-2xl flex items-center gap-3"
                        >
                          <div className="text-gray-600 text-[30px]">
                            {el?.icon}
                          </div>
                          <span className="text-[17px] text-[#848484] font-[500]">
                            {el?.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mb-10">
                  <h1 className="text-[25px] text-[#383838] font-[500] mb-8">
                    Hotel Amenities
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {hotelAmenities?.map((el) => {
                      return (
                        <div
                          key={el?.id}
                          className="select-none transition ease-in-out delay-50 hover:-translate-y-2 duration-300 w-full p-5 border border-gray-300 rounded-2xl flex items-center gap-3"
                        >
                          <div className="text-gray-600 text-[30px]">
                            {el?.icon}
                          </div>
                          <span className="text-[17px] text-[#848484] font-[500]">
                            {el?.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h1 className="text-[25px] text-[#383838] font-[500] mb-5">
                    Hotel Rules
                  </h1>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                      <TbCircleDotFilled className="text-[#222222] text-[14px]" />
                      <span className="text[18px] text-[#656565]">
                        Smoking not allowed
                      </span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <TbCircleDotFilled className="text-[#222222] text-[14px]" />
                      <span className="text[18px] text-[#656565]">
                        Pets not allowed
                      </span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <TbCircleDotFilled className="text-[#222222] text-[14px]" />
                      <span className="text[18px] text-[#656565]">
                        Swimming pool closed from 8.00pm - 6.00am
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[25%]">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>

      {/* image carousel */}
      <div className="mb-20 max-h-fit mx-5">
        <ImgSlideCarousel />
      </div>
      <hr className="mb-10" />

      <div className="mb-0 md:mb-10 mx-5">
        <h1 className="text-center text-[31px] font-[500] text-[#383838] mb-10">
          More Rooms
        </h1>
        <RoomCarousel />
      </div>
    </>
  );
};

export default RoomsDetails;
