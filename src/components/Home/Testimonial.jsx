import React from "react";
import TitlePara from "../../utils/TitlePara";
import { VscQuote } from "react-icons/vsc";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "./customSplide.css";
const Testimonial = () => {
  const testimonials = [
    {
      id: 0,
      image:
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/customer1-150x150.jpg",
      para: `A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.I am alone, and feel the charm of existence.`,
      name: "Joan Smith",
      job: "Solo Traveler",
    },
    {
      id: 1,
      image:
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/customer03-150x150.jpg",
      para: `A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.I am alone, and feel the charm of existence.`,
      name: "William Jones",
      job: "Solo Traveler",
    },
    {
      id: 2,
      image:
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/customer02-150x150.jpg",
      para: `A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.I am alone, and feel the charm of existence.`,
      name: "Ralph Clark",
      job: "Solo Traveler",
    },
    {
      id: 3,
      image:
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/customer1-150x150.jpg",
      para: `A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.I am alone, and feel the charm of existence.`,
      name: "Christopher Lopez",
      job: "Solo Traveler",
    },
    {
      id: 4,
      image:
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/customer02-150x150.jpg",
      para: `A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.I am alone, and feel the charm of existence.`,
      name: "Louis Lewis",
      job: "Solo Traveler",
    },
    {
      id: 5,
      image:
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/customer1-150x150.jpg",
      para: `A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.I am alone, and feel the charm of existence.`,
      name: "Christopher Lopez",
      job: "Solo Traveler",
    },
    {
      id: 6,
      image:
        "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/customer02-150x150.jpg",
      para: `A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.I am alone, and feel the charm of existence.`,
      name: "Ralph Clark",
      job: "Solo Traveler",
    },
  ];
  return (
    <div
      className="relative my-10 bg-none lg:bg-[url('https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/bg-testimonail.jpg')] bg-no-repeat pb-16 max-w-[1300px] mx-auto"
      style={{ backgroundPosition: "top center" }}
    >
      <TitlePara
        title="Testimonial"
        para="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."
      />
      <div className="container mx-auto">
        <Splide
          id="testimonial"
          options={{
            autoplay: true,
            type: "loop",
            cover: false,
            perPage: 2,
            breakpoints: {
              1200: { arrows: false },
              800: { perPage: 1 },
              640: {},
            },
            rewind: true,
            arrows: false,
            gap: "1rem",
          }}
        >
          {testimonials.map((testimonial) => {
            return (
              <SplideSlide key={testimonial.id}>
                <div className="py-16 mx-3 rounded-tl-[50px] rounded-br-[50px] flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 bg-white shadow-xl my-10">
                  <div className="relative">
                    <div className="w-24 h-24 overflow-hidden rounded-full ">
                      <img
                        src={testimonial.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <VscQuote className="absolute top-0 -right-3 text-3xl" />
                  </div>
                  <div className="w-[65%] flex flex-col gap-5">
                    <p className="text-[#656565] text-lg leading-8">
                      {testimonial.para}
                    </p>
                    <div>
                      <h1 className="text-lg font-semibold">
                        {testimonial.name}
                      </h1>
                      <p className="text-sm font-medium text-[#313131]">
                        {testimonial.job}
                      </p>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Testimonial;
{
  /* <div className="flex justify-center items-center gap-5 py-10 w-[80%] mx-auto">
        <div className="py-16 rounded-tl-[50px] rounded-br-[50px] flex justify-center gap-8 bg-white shadow-xl">
          <div className="relative">
            <div className="w-24 h-24 overflow-hidden rounded-full ">
              <img
                src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/customer1-150x150.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <VscQuote className="absolute top-0 -right-3 text-3xl" />
          </div>
          <div className="w-[65%] flex flex-col gap-5">
            <p className="text-[#656565] text-lg leading-8">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence.
            </p>
            <div>
              <h1 className="text-lg font-semibold">Joan Smith</h1>
              <p className="text-sm font-medium text-[#313131]">
                Solo Traveler
              </p>
            </div>
          </div>
        </div>
        <div className="py-16 rounded-tl-[50px] rounded-br-[50px] flex justify-center gap-8 bg-white shadow-xl">
          <div className="relative">
            <div className="w-24 h-24 overflow-hidden rounded-full ">
              <img
                src="https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/customer1-150x150.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <VscQuote className="absolute top-0 -right-3 text-3xl" />
          </div>
          <div className="w-[65%] flex flex-col gap-5">
            <p className="text-[#656565] text-lg leading-8">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence.
            </p>
            <div>
              <h1 className="text-lg font-semibold">Joan Smith</h1>
              <p className="text-sm font-medium text-[#313131]">
                Solo Traveler
              </p>
            </div>
          </div>
        </div>
      </div> */
}
