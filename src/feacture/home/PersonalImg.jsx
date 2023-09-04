import React from "react";

export default function PersonalImg() {
  return (
    <div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 w-full ml-64 float-right relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0 mb-6 ">
        <img
          src="src\data\image\blue-hero-circle.svg"
          alt=""
          className="float-right sm:pt-24 z-1 mb-36 "
        />
        <img
          src="src\data\image\images-hero-image.png"
          alt="personalImage"
          className="absolute z-0 object-cover -right-0 -top-20 sm:top-[-37px] lg:right-[175px] md:top-[-37] md:ml-0 lg:top-[-37] lg:ml-0 xl:top-[-37] xl:ml-0  2xl:top-[-37] 2xl:ml-0   mt-6 ml-20 sm:ml-0 "
        />
      </div>
    </div>
  );
}
