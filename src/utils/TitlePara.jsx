import React from "react";

const TitlePara = ({ title, para }) => {
  return (
    <div className=" pb-[90px] pt-[80px]">
      <div className=" mx-auto">
        <div className=" text-center pb-[30px] px-[20px] ">
          <h3 className=" font-allison text-[55px] font-normal w-fit mx-auto">
            {title}
          </h3>
        </div>
        <div className=" px-[20px] text-center text-[21px] text-[#898989] max-w-[720px] mx-auto">
          <p className=" text-center leading-9">
            {para}
          </p>
        </div>
      </div>
    </div>
  );
};

TitlePara.defaultProps = {
  title: "Title",
  para: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of soul.",
};

export default TitlePara;
