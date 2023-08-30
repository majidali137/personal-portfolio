import React from "react";
import { Link } from "react-router-dom";

export default function PersonalInfo() {
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 lg:w-full lg:max-w-2xl ">
          <div className="relative py-4 px-2 sm:py-40 lg:py-16 lg: lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div className="relative  py-1 px-3 text-sm font-semibold text-[#6366f1] ">
                Hey There 👋 I am
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-[50px] md:text-[45px] sm:text-6xl">
                Daniel Jack
              </h1>
              <h2 className="leading-10  text-[#959CB1] font-medium ">
                Professional{" "}
                <span className="font-medium text-black">
                  {" "}
                  Graphic Designer
                </span>
              </h2>
              <p className="mt-6  text-[#959CB1] max-w-[470px] lg:max-w-[410px] font-normal leading-normal text-base">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="#"
                  className="rounded-full px-8 bg-indigo-600  py-2 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
                <Link
                  to="#"
                  className="text-base font-semibold leading-7 rounded-full text-white bg-black px-8 py-2"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
