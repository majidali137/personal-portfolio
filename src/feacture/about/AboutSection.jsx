import React from "react";
import SocialIcon from '../../ui/SocialIcon'

export default function AboutSection() {
  return (
    <div className=" border-b sm:pb-32 pb-10">
      {/* Testimonial/stats section */}
      <div className="relative  ">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl xl:grid-cols-2 xl:items-start xl:gap-24 xl:px-8 ">
          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <span className="text-2xl font-bold text-[#4A6CF7]">
                ABOUT ME
              </span>{" "}
              <br />
              <h2 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl max-w-sm">
                Better design, better experience
              </h2>
              <div className="mt-6 space-y-6 text-[#959CB1]">
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque dui ligula, malesuada vel convallis in, tincidunt ut
                  mi Vestibulum sit amet.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl mb- font-bold tracking-tight text-gray-900 sm:text-3xl">
                Connect With Me
              </h2>
              <div className="mt-6 space-y-6  text-[#959CB1]">
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque dui ligula, malesuada vel convallis in, tincidunt ut
                  mi. Vestibulum sit amet urna placerat, tempor soloa demanium
                  testi lor Aliq lorem vitae semper tempor.
                </p>
                <div><SocialIcon/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
