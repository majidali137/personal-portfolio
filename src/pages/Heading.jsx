import React from "react";

export default function Heading({ subHeading, mainHeading, description }) {
  return (
    <div>
      <div className={`text-center sm:max-w-xl sm:mb-8 mb-8 sm:mx-auto  `}>
        <span className="font-bold  text-[#4A6CF7]">{subHeading}</span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {mainHeading}
        </h2>
        <p className=" mx-auto mt-3 max-w-2xl text-sm text-center text-[#959CB1] sm:mt-4 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
