import { BiMinus, BiPlus } from "react-icons/bi";

const RoomModalHome = ({ roomNum, setRoomNum }) => {
  return (
    <div>
      <div className="  bg-white w-[120%] select-none md:w-[250px] z-50 flex justify-between px-5 py-5 absolute -left-6 top-6 rounded-xl">
        <h1 className="uppercase">room</h1>
        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={roomNum > 1 ? false : true}
            onClick={() => setRoomNum((pre) => pre - 1)}
          >
            <BiMinus />
          </button>
          <span>{roomNum}</span>
          <button type="button" onClick={() => setRoomNum((pre) => pre + 1)}>
            <BiPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomModalHome;
