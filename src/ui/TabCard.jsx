import React from "react";

export default function TabCard({ heading, description, image }) {
  return (
    <div>
      <div className="py-5 mb-5">
        <img src={image} alt="work" />
        <div>
          <a href="/">
            <h1 className="text-lg text-left font-semibold my-6 hover:cursor-pointer hover:text-[#4A6CF7] ">
              {heading}
            </h1>
          </a>
          <p className="text-[#959CB1] font-medium text-left">{description}</p>
        </div>
      </div>
    </div>
  );
}
