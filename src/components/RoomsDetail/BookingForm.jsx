import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import DatePickerReservation from "../DatePicker";

const BookingForm = () => {
  const [roomNum, setRoomNum] = useState(1);
  const [roomToggle, setRoomToggle] = useState(false);
  const [roomSizeToggle, setRoomSizeToggle] = useState(true);

  const [guestToggle, setGuestToggle] = useState(false);
  const [adultNum, setAdultNum] = useState(2);
  const [childrenNum, setChildrenNum] = useState(0);
  const [enquiryToggle, setEnquiryToggle] = useState(true);

  return (
    <>
      <div className="sticky top-[100px] ">
        <div className="flex gap-4">
          <h3 className={enquiryToggle?"text-[20px] text-black font-[600] mb-[20px] select-none border-b-2 border-b-black transition ease-in duration-100":"text-[20px] text-gray-300 font-[600] mb-[20px] select-none"} onClick={()=> setEnquiryToggle(true)}>
            Book your room
          </h3>
          <h3 className={enquiryToggle?"text-[20px] text-gray-300 font-[600] mb-[20px] select-none":"text-[20px] text-black font-[600] mb-[20px] select-none border-b-2 border-b-black transition ease-in duration-100"} onClick={()=> setEnquiryToggle(false)}>
            Enquiry
          </h3>
        </div>
        {enquiryToggle?<div>
          <div className="w-full px-5 mb-10">
            <div>
              {/* MUI DatePicker  */}
              <div className="mb-3 w-full">
                <h1 className="text-lg text-[#656565]">Check In</h1>
                <DatePickerReservation />
              </div>
              <div className="mb-3 w-full">
                <h1 className="text-lg text-[#656565]">Check Out</h1>
                <DatePickerReservation />
              </div>

              <div className="mb-3 relative">
                <h1 className="text-lg text-[#656565]">Room</h1>
                <div className="flex justify-between bg-[#f5f5f5] py-[25px]">
                  <span className="ms-[25px]">{roomNum}</span>
                  <AiFillCaretDown
                    onClick={() => setRoomToggle(!roomToggle)}
                    className="cursor-pointer text-2xl text-[#6e6969de] me-[12px]"
                  />
                </div>
              </div>

              <div className="mb-3 relative">
                <h1 className="text-lg text-[#656565]">Guests</h1>
                <div className="flex justify-between bg-[#f5f5f5] py-[25px]">
                  <div className="flex gap-3 ms-[25px]">
                    <div className="flex gap-2">
                      <span>adults</span>
                      <span>{adultNum}</span>
                    </div>
                    <div className="flex gap-2">
                      <span>children</span>
                      <span>{childrenNum}</span>
                    </div>
                  </div>
                  <AiFillCaretDown
                    onClick={() => setGuestToggle(!guestToggle)}
                    className="cursor-pointer text-2xl text-[#6e6969de] me-[12px]"
                  />
                </div>
                {guestToggle ? (
                  <GuestModal
                    adultNum={adultNum}
                    setAdultNum={setAdultNum}
                    setChildrenNum={setChildrenNum}
                    childrenNum={childrenNum}
                  />
                ) : (
                  ""
                )}
              </div>
              <button className="uppercase transition ease-in-out delay-100 duration-300 hover:bg-black hover:text-white w-[100%] h-[50px] text-[#0c0c0c] border-2 border-[#0c0c0c] rounded-[5px]">
                book now
              </button>
            </div>
          </div>
        </div>:<div>
            <form>
                <div className="flex flex-col">
                    <label className="text-[16px] mb-[10px] text-[#656565]">Full Name*</label>
                    <input type="text" className="bg-[#f5f5f5] text-[#4b4b4b] py-[12px] px-[17px] outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label className="text-[16px] mb-[10px] text-[#656565]">Email Address*</label>
                    <input type="text" className="bg-[#f5f5f5] text-[#4b4b4b] py-[12px] px-[17px] outline-none"/>
                </div>
                <div className="flex flex-col mb-8">
                    <label className="text-[16px] mb-[10px] text-[#656565]">Your Enquiry</label>
                    <textarea type="text" className="bg-[#f5f5f5] text-[#4b4b4b] py-[12px] px-[17px] outline-none"/>
                </div>
                <div className="mb-8">
                <input type="checkbox" />
                <label className="text-[16px] text-[#656565]">* I agree with Terms of Service and Privacy Statement.</label>
                </div>
                <button type="submit" className="uppercase transition ease-in-out delay-100 duration-300 hover:bg-black hover:text-white w-[100%] h-[50px] text-[#0c0c0c] border-2 border-[#0c0c0c] rounded-[5px]">
                submit enquiry
              </button>
            </form>
        </div>}
        
        
        
      </div>
    </>
  );
};

export default BookingForm;
