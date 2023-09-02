import React from "react";
import Heading from "../../pages/Heading";

export default function ResumeSection() {
  return (
    <>
      {/* <!-- component --> */}
      <section className="container  mx-auto w-full h-full mt-24 border-b sm:py-20 py-10">
        <Heading
          subHeading="Education & Experience"
          mainHeading="My Resume"
          description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />

        <div className="relative wrap overflow-hidden sm:p-10 pl-3 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border sm:left-[50%]"></div>

          {/* <!-- left timeline --> */}
          <div className="mb-1 sm:flex sm:justify-center sm:flex-row-reverse  sm:items-center w-full left-timeline">
            <div className="order-1 sm:w-5/12 "></div>
            <div className=" flex items-center order-1 bg-white border-[#4a6cf7] border-4  w-5 h-5 rounded-full absolute sm:relative  sm:left-0 left-[5px] mt-6"></div>
            <div className="order-1 rounded-lg  sm:w-5/12 px-4 py-6">
              <h3 className="mb-2 font-bold sm:text-right text-xl">
                UI/UX Designer
              </h3>
              <h2 className="mb-2 font-bold sm:text-right text-lg text-[#959CB1]">
                Google INC | New York
              </h2>
              <p className="bg-[#4a6cf7] text-sm  rounded-full text-white px-4 py-1 text-right max-w-[100px] sm:float-right ">
                2011-2013
              </p>

              <p className="text-sm sm:mt-16 font-medium mt-4 leading-snug tracking-wide sm:text-right text-[#959CB1]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-center items-center w-full right-timeline">
            <div className="order-1 sm:w-5/12"></div>
            <div className=" sm:flex sm:items-center order-1 bg-white border-[#4a6cf7] border-4  w-5 h-5 rounded-full absolute sm:relative  sm:left-0 left-[5px] mt-6"></div>
            <div className="order-1   sm:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Specialization Course
              </h3>
              <h2 className="text-[#959CB1] font-bold mb-2">
                Stanford University | New York
              </h2>
              <p className="bg-[#4a6cf7] text-sm  rounded-full text-white px-4 py-1 text-right max-w-[100px]   ">
                2017-2018
              </p>
              <p className="text-sm leading-snug tracking-wide text-[#959CB1] font-semibold text-opacity-100 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-1 sm:flex sm:justify-center sm:flex-row-reverse  sm:items-center w-full left-timeline">
            <div className="order-1 sm:w-5/12 "></div>
            <div className=" flex items-center order-1 bg-white border-[#4a6cf7] border-4  w-5 h-5 rounded-full absolute sm:relative  sm:left-0 left-[5px] mt-6"></div>
            <div className="order-1 rounded-lg  sm:w-5/12 px-4 py-6">
              <h3 className="mb-2 font-bold sm:text-right text-xl">
                Web Designer
              </h3>
              <h2 className="mb-2 font-bold sm:text-right text-lg text-[#959CB1]">
                Facebook INC | New York
              </h2>
              <p className="bg-[#4a6cf7] text-sm  rounded-full text-white px-4 py-1 text-right max-w-[100px] sm:float-right ">
                2014-2016
              </p>

              <p className="text-sm sm:mt-16 font-medium mt-4 leading-snug tracking-wide sm:text-right text-[#959CB1]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-center items-center w-full right-timeline">
            <div className="order-1 sm:w-5/12"></div>
            <div className=" sm:flex sm:items-center order-1 bg-white border-[#4a6cf7] border-4  w-5 h-5 rounded-full absolute sm:relative  sm:left-0 left-[5px] mt-6"></div>
            <div className="order-1   sm:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Bachelor Degree
              </h3>
              <h2 className="text-[#959CB1] font-bold mb-2">
                Stanford University | New York
              </h2>
              <p className="bg-[#4a6cf7] text-sm  rounded-full text-white px-4 py-1 text-right max-w-[100px]   ">
                2019-2021
              </p>
              <p className="text-sm leading-snug tracking-wide text-[#959CB1] font-semibold text-opacity-100 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-1 sm:flex sm:justify-center sm:flex-row-reverse  sm:items-center w-full left-timeline">
            <div className="order-1 sm:w-5/12 "></div>
            <div className=" flex items-center order-1 bg-white border-[#4a6cf7] border-4  w-5 h-5 rounded-full absolute sm:relative  sm:left-0 left-[5px] mt-6"></div>
            <div className="order-1 rounded-lg  sm:w-5/12 px-4 py-6">
              <h3 className="mb-2 font-bold sm:text-right text-xl">
                UI/UX Designer
              </h3>
              <h2 className="mb-2 font-bold sm:text-right text-lg text-[#959CB1]">
                Google INC | New York
              </h2>
              <p className="bg-[#4a6cf7] text-sm  rounded-full text-white px-4 py-1 text-right max-w-[100px] sm:float-right ">
                2011-2013
              </p>

              <p className="text-sm sm:mt-16 font-medium mt-4 leading-snug tracking-wide sm:text-right text-[#959CB1]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
