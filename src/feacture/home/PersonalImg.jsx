import React from 'react'
import BlueSvgCircle from '../../ui/BlueSvgCircle'


export default function PersonalImg() {
  return (
    <div>
       <div className="lg:absolute lg:inset-y-0 lg:right-0 w-full ml-64 float-right relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0 mb-6 ">
        <BlueSvgCircle className={"float-right sm:pt-24 z-auto "}/>
        {/* <img
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
          alt=""
        /> */}
        <img src='src\data\image\images-hero-image.png' alt='personalImage' className="absolute z-0 object-cover right-0 sm:top-[-37px] lg:right-[175px] md:top-[-37] md:ml-0 lg:top-[-37] lg:ml-0 xl:top-[-37] xl:ml-0  2xl:top-[-37] 2xl:ml-0   mt-6 ml-20 sm:ml-0 " />
      </div>
    </div>
  )
}
