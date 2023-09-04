import React from "react";
import { Link } from "react-router-dom";

export default function PersonalInfo() {
  return (
    <>
      <div className=" xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm w-full mx-auto px-4 ">
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-3/6 px-4 self-center w-full">
            <div>
              <h1 className="font-semibold text-base mb-3 text-[#4a6cf7]">
                Hey There 👋 I am{" "}
                <span className="md:leading-[50px] text-black md:text-5xl sm:leading-[1.25rem] sm:text-3xl font-bold text-3xl block mt-1 ">
                  Daniel Jack
                </span>
              </h1>
              <h2 className="md:text-xl text-[#959cb1] font-medium text-xl mb-5">
                Professional{" "}
                <span className="text-black">Graphic Designer</span>{" "}
              </h2>
              <p className="leading[1.625rem] font-medium text-base max-w-[470px] mb-11 text-[#959cb1]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                interdum consequat convallis.
              </p>
              <div className="flex items-center">
                <button className=" ease-out duration-300 transition-all text-white font-semibold text-base px-8 py-3 bg-[#4a6cf7] mr-4 rounded-full ">
                  Contact me
                </button>
                <button className=" ease-out duration-300 transition-all text-white font-semibold text-base px-8 py-3 bg-black mr-4 rounded-full ">
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-3/6 px-4 self-center w-full">
            <div className="xl:right-40 xl:bottom-0 xl:absolute xl:mt-0 mt-12 z-10 relative ">
              <img
                src="src\data\image\images-hero-image.png"
                alt="heroImage"
                className="max-w-full mx-auto"
              />
              <span className="bottom-[0.5rem] absolute">
                <img src="src\data\image\hero-image.svg" alt="hero" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
