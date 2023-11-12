import { BiMinus, BiPlus } from "react-icons/bi";

const GuestModalHome = ({
  adultNum,
  childrenNum,
  setAdultNum,
  setChildrenNum,
}) => {
  return (
    <div className=" absolute top-9 -right-[90px] select-none bg-white w-72 rounded-xl z-50">
      <div className="flex justify-between  px-8 py-8">
        <h1 className="uppercase text-[14px] font-semibold">adults</h1>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={adultNum > 0 ? false : true}
            onClick={() => setAdultNum((adultNum -= 1))}
          >
            <BiMinus />
          </button>
          <span>{adultNum}</span>
          <button type="button" onClick={() => setAdultNum((adultNum += 1))}>
            <BiPlus />
          </button>
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div className="flex justify-between  px-8 py-8">
        <h1 className="uppercase text-[14px] font-semibold">Children</h1>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={childrenNum > 0 ? false : true}
            onClick={() => setChildrenNum((childrenNum -= 1))}
          >
            <BiMinus />
          </button>
          <span>{childrenNum}</span>
          <button
            type="button"
            onClick={() => setChildrenNum((childrenNum += 1))}
          >
            <BiPlus />
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default GuestModalHome;
