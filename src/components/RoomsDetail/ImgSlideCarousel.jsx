import React, { useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const ImgSlideCarousel = () => {
  //   const [width, setWidth] = useState(0);
  //   const carousel = useRef();

  //   useEffect(() => {
  //     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  //   }, [width]);
  const sliderRef = useRef();

  useEffect(() => {
    if (sliderRef.current) {
      console.log(sliderRef.current);
    }
  });

  const images = [
    {
      id: 1,
      url: "https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2020/10/shutterstock_560973166.jpg",
    },
    {
      id: 2,
      url: "https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2021/12/shutterstock_324822821.jpg",
    },
    {
      id: 3,
      url: "https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2021/12/andrii-podilnyk-766487-unsplash-scaled.jpg",
    },
    {
      id: 4,
      url: "https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2021/12/shutterstock_1298236804.jpg",
    },
    {
      id: 5,
      url: "https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2021/12/single-room-gallery-img.jpg",
    },
    {
      id: 6,
      url: "https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2021/12/shutterstock_1354405256.jpg",
    },
    {
      id: 7,
      url: "https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2020/10/roberto-nickson-emqnSQwQQDo-unsplash-scaled.jpg",
    },
    {
      id: 8,
      url: "https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2020/10/paul-postema-mr0Dp231IEw-unsplash.jpg",
    },
  ];
  return (
    <div>
      <m.div
      //   ref={carousel}
      // className="overflow-x-scroll cursor-grab"
      >
        <m.div
        //   className="flex gap-2 w-full cursor-grab"
        //   drag="x"
        //   dragConstraints={{ right: 0, left: -width }}
        >
          <Splide
            ref={sliderRef}
            hasTrack={false}
            className=""
            options={{
              autoWidth: true,
              autoplay: true,
              type: "loop",
              cover: false,
              focus: 0,
              omitEnd: true,
              gap: 20,
              arrows: false,
              pagination: false,
            }}
          >
            <SplideTrack>
              {images.map((img) => {
                return (
                  <SplideSlide>
                    <m.div key={img?.id} className="">
                      <img
                        src={img?.url}
                        className=" h-[250px] md:h-[500px] object-cover pointer-events-none"
                      />
                    </m.div>
                  </SplideSlide>
                );
              })}
              <div class="my-slider-progress w-full">
                <div class="my-slider-progress-bar bg-blue-400"></div>
              </div>
            </SplideTrack>
          </Splide>
        </m.div>
      </m.div>
    </div>
  );
};

export default ImgSlideCarousel;
