import React from "react";

export default function ClientInfoLink() {
  return (
    <>
      <section
        aria-labelledby="customer-heading"
        className="mx-auto max-w-2xl py-12 px-6 lg:max-w-7xl lg:pt-18 lg:pb-36 lg:px-8"
      >
        <div className=" flex justify-center space-x-8 items-center">
          <img src="src\data\image\images-lineicons.svg" alt="lineicon" />
          <img src="src\data\image\images-plainadmin.svg" alt="plainadmin" />
          <img src="src\data\image\images-uidecks.svg" alt="uidecks" />
          <img src="src\data\image\images-tailgrids.svg" alt="tailgrids" />
        </div>
      </section>
    </>
  );
}
