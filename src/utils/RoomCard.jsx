import { Link } from "react-router-dom";
import { IoBedOutline } from "react-icons/io5";
import { MdPeopleOutline } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";

const RoomCard = ({ room }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-100 rounded-[20px] shadow ">
      <Link to={`/roomsDetails/${room.id}`} className="relative">
        <img className="rounded-t-[20px]" src={room?.img} alt="" />
        <div className=" absolute  px-[20px] py-[21px] text-[20px] rounded-[10px] bg-black bottom-[10px] left-[25px] font-semibold">
          <span className=" text-white mr-[5px] ">From</span>
          {room?.oldPrice && (
            <span className=" mr-[5px] text-[14px] text-[#a6a6a6] font-normal line-through">
              ${room?.oldPrice}
            </span>
          )}
          <span className=" text-white">${room?.price}</span>
          <span className=" text-white text-[15px] font-normal"> / night</span>
        </div>
        {room?.promo && (
          <div className="absolute top-[12px] right-[12px] bg-[#e45154] py-2 px-[26px] text-white text-[15px] rounded-[5px] uppercase">
            {room?.promo}% OFF
          </div>
        )}
      </Link>
      <div className="px-[40px] py-[45px]">
        <Link to={""}>
          <h5 className="mb-[20px] text-[30px] font-medium transition duration-100 hover:text-[#656565]">
            {room?.name}
          </h5>
        </Link>
        <div className="mb-[30px] font-normal flex gap-4 flex-col md:flex-row">
          <div className=" flex items-center gap-4">
            <IoBedOutline className=" text-[#848484] text-[28px]" />
            <span className="text-[#848484] font-medium">{room?.beds}</span>
          </div>
          <div className=" flex items-center gap-4">
            <MdPeopleOutline className=" text-[#848484] text-[28px]" />
            <span className="text-[#848484] font-medium">
              {room?.guests} Guests
            </span>
          </div>
        </div>
        <Link
          to={`/roomsDetails/${room?.id}`}
          className=" hover-underline-animation_room gap-2 items-center justify-center mb-[30px] py-2 text-sm font-semibold tracking-[2px] text-center text-black uppercase focus:ring-4 focus:outline-none"
        >
          <span>Book Now</span>
          <SlArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
