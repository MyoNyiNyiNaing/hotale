import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect } from "react";
import "./customSplide.css";
import { IoLogoInstagram } from "react-icons/io";
import "venobox/dist/venobox";
import "venobox/dist/venobox.min.css";
import venobox from "venobox";
import newletter1 from "../../assets/Home/newletter1.webp"
import newletter2 from "../../assets/Home/newletter2.webp"
import newletter3 from "../../assets/Home/newletter3.webp"
import newletter4 from "../../assets/Home/newletter4.webp"
const Gallery = () => {
  const photos = [
    {
      id: 0,
      img: newletter1,
    },
    {
      id: 1,
      img: newletter2,
    },
    {
      id: 2,
      img: newletter3,
    },
    {
      id: 3,
      img: newletter4,
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
    <div className="w-[85%] mx-auto my-16 ">
      <div className="flex justify-between gap-4">
        {photos.map((photo) => {
          return (
           
              <a  key={photo.id} className="image-link" data-gall="gallery01" href={photo.img}>
                <img src={photo.img} />
              </a>
           
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-3 mt-14 font-semibold uppercase text-sm cursor-pointer">
        <IoLogoInstagram className="text-2xl" />
        Follow Us On Instagram
      </div>
    </div>
  );
};

export default Gallery;
