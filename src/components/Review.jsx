import React from "react";


const Review = ({review}) => {
  return (
    <div className=" bg-[#2C2D39]">
      <div className=" flex flex-col items-center justify-center min-h-[60vh] md:min-h-[100vh] text-center max-w-[90%] lg:max-w-[60%] mx-auto">
      <p className=" text-[#898989] text-[18px] leading-[30px] mb-5">
        “The rooms were clean, very comfortable, and the staff was amazing. They
        went over and beyond to help make our stay enjoyable. I highly recommend
        this hotel for anyone visiting downtown.”
      </p>
      <h4 className="text-[#fff] text-[18px] font-[500] leading-[30px]">
        {review?.name}
      </h4>
      <h4 className=" text-[#fff] text-[16px] leading-[30px]">{review?.address}</h4>
      </div>
    </div>
  );
};

export default Review;
