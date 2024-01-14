"use client";
import React from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = () => {
  return (
    <div className="flex items-center justify-center">
      <ResponsiveCarousel
        className="lg:w-[55rem] 2xl:w-[68rem]"
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        interval={3000}
        dynamicHeight={true}
      >
        <div>
          <img
            src="https://e-book.npru.ac.th/src/images/banner.jpg"
            alt="Slide 1"
            className="h-[18rem]"
          />
        </div>
        <div>
          <img
            src="https://img2.pic.in.th/pic/Rectangle-2.png"
            alt="Slide 2"
            className="h-[18rem]"
          />
        </div>
      </ResponsiveCarousel>
    </div>
  );
};

export default Carousel;
