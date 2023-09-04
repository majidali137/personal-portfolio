import React from "react";

export default function ClientInfoLink() {
  return (
    <>
      <section
        aria-labelledby="customer-heading"
        className="mx-auto max-w-2xl pt-8 pb-16 px-6 lg:max-w-7xl lg:pt-18 lg:pb-36 lg:px-8"
      >
        <div className=" flex  justify-between space-x-6 items-center">
          <img src="src\data\image\images-lineicons.svg" alt="lineicon" className="max-w-[60px] sm:max-w-[200px]" />
          <img src="src\data\image\images-plainadmin.svg" alt="plainadmin" className="max-w-[60px] sm:max-w-[200px]" />
          <img src="src\data\image\images-uidecks.svg" alt="uidecks" className="max-w-[60px] sm:max-w-[180px]" />
          <img src="src\data\image\images-tailgrids.svg" alt="tailgrids" className="max-w-[60px] sm:max-w-[200px]" />
        </div>
      </section>
    </>
  );
}
