import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect } from "react";
import "./customSplide.css";
import { IoLogoInstagram } from "react-icons/io";
import "venobox/dist/venobox";
import "venobox/dist/venobox.min.css";
import venobox from "venobox";
const Gallery = () => {
  const photos = [
    {
      id: 0,
      img: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/shutterstock_1061669315-600x600.jpg",
    },
    {
      id: 1,
      img: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/roberto-nickson-YCW4BEhKluw-unsplas-600x600.jpg",
    },
    {
      id: 2,
      img: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/shutterstock_789623335-600x600.jpg",
    },
    {
      id: 3,
      img: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/mutzii-1057982-unsplash-600x600.jpg",
    },
    {
      id: 4,
      img: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/shutterstock_1386982532-600x600.jpg",
    },
    {
      id: 5,
      img: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/jen-p-541467-unsplash-600x600.jpg",
    },
    {
      id: 6,
      img: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/12/shutterstock_1298236804-600x600.jpg",
    },
  ];
  useEffect(() => {
    new venobox({
      selector: ".image-link",
      numeration: true,
      infinigall: true,
      share: true,
      spinner: "rotating-plane",
    });
  }, []);
  return (
    <div className="w-[85%] mx-auto my-10">
      <Splide
        id="customArrow"
        options={{
          perPage: 4,
          perMove: 1,
          pagination: false,
          autoplay: true,
          type: "loop",
          cover: false,
          breakpoints: {
            1200: {
              perPage: 3,
            },
            800: {
              arrows: false,
              perPage: 2,
            },
            640: { perPage: 1 },
          },
        }}
      >
        {photos.map((photo) => {
          return (
            <SplideSlide key={photo.id}>
              <a className="image-link" data-gall="gallery01" href={photo.img}>
                <img src={photo.img} />
              </a>
            </SplideSlide>
          );
        })}
      </Splide>
      <div className="flex items-center justify-center gap-3 mt-14 font-semibold uppercase text-sm cursor-pointer">
        <IoLogoInstagram className="text-2xl" />
        Follow Us On Instagram
      </div>
    </div>
  );
};

export default Gallery;
