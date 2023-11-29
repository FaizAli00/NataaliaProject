import React from "react";
import Slider from "react-slick";
import Products from "./newArrivals/NewArrivals";
import { Link } from "react-router-dom";

const Homepage = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slickArrow: false,
  };

  return (
    <>
      <style>
        {`
          .slick-prev,
          .slick-next {
            display: none !important;
          }
        `}
      </style>
      <div className="flex flex-col mx-auto justify-center w-full relative">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="h-screen w-full bg-red-500 relative">
            <img
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1560915109-f54ff3d7664c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <Link to="/register">
            <button className="get-started-button absolute top-[80%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-black px-6 py-3 text-lg font-semibold rounded-full hover:bg-[#ff7200] hover:text-white transition-all duration-300 delay-200 cursor-pointer">
              Get Started
            </button>
            </Link>
          </div>

          {/* Slide 2 */}
          <div className="h-screen w-full bg-red-500 relative">
            <img
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1596725649320-7f257a9da04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHdvbWFuJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <Link to="/register">
            <button className="get-started-button absolute top-[80%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-black px-6 py-3 text-lg font-semibold rounded-full hover:bg-[#ff7200] hover:text-white transition-all duration-300 delay-200 cursor-pointer">
              Get Started
            </button>
            </Link>
          </div>

          {/* Slide 3 */}
          <div className="h-screen w-full bg-red-500 relative">
            <img
              className="w-full h-full"
              src="https://plus.unsplash.com/premium_photo-1664297557877-0c12e6ff97a1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <Link to="/register">
              <button className="get-started-button absolute top-[80%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-black px-6 py-3 text-lg font-semibold rounded-full hover:bg-[#ff7200] hover:text-white transition-all duration-300 delay-200 cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>
        </Slider>
      </div>
      <Products />
    </>
  );
};

export default Homepage;
