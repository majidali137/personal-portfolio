import { useState } from "react";
import TabCard from "../../ui/TabCard";
import Heading from "../../ui/Heading";

export default function RecentWorkSection() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section className=" bg-[#F8F9FF] py-16 sm:pt-28 pb-4">
      <Heading
        subHeading="Creative Portfolios"
        mainHeading="Recent Works"
        description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
      />

      {/* Tabs */}
      <div className="flex flex-wrap place-content-center">
        <div className="wrkTabUiCntr">
          <ul className="flex sm:mb-12  list-none flex-wrap justify-center items-center pt-3  flex-row">
            <li className="-mb-px mr-2 last:mr-0  text-center">
              <a
                className={
                  "text-sm  uppercase px-5 py-2 rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-[#4A6CF7] rounded-full"
                    : "text-[#959CB1] hover:cursor-pointer hover:text-white hover:bg-[#4A6CF7] hover:rounded-full")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                All
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0  text-center">
              <a
                className={
                  "text-sm uppercase px-5 py-2  block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-[#4A6CF7] rounded-full"
                    : "text-[#959CB1] hover:cursor-pointer hover:text-white hover:bg-[#4A6CF7] hover:rounded-full")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Web Design
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0   text-center">
              <a
                className={
                  "text-sm  uppercase px-5 py-2  block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-[#4A6CF7] rounded-full"
                    : "text-[#959CB1] hover:cursor-pointer hover:text-white hover:bg-[#4A6CF7] hover:rounded-full")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Graphics
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0  text-center">
              <a
                className={
                  "text-sm  uppercase px-5 py-2 block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-[#4A6CF7] rounded-full"
                    : "text-[#959CB1] hover:cursor-pointer hover:text-white hover:bg-[#4A6CF7] hover:rounded-full")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                App
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 sm:max-w-[70%] sm:self-center  ">
            <div className="px-4 py-5 ">
              <div className="tab-content tab-space">
                <div
                  className={
                    openTab === 1 || openTab === 3 ? "block" : "hidden"
                  }
                  id="link1"
                >
                  <div className="sm:flex space-x-5 mx-5 ">
                    <TabCard
                      heading="Business & corporate template"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero."
                      image="src/data/image/images-portfolio-04.jpg"
                      to="recent-work-details"
                    />

                    <TabCard
                      heading="SaaS landing page"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero."
                      image="src/data/image/images-portfolio-02.jpg"
                    />
                  </div>
                </div>
                <div
                  className={
                    openTab === 2 || openTab === 1 || openTab === 4
                      ? "block"
                      : "hidden"
                  }
                  id="link2"
                >
                  <div className="sm:flex space-x-5 mx-5 ">
                    <TabCard
                      heading="Startup landing page"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero."
                      image="src/data/image/images-portfolio-01.jpg"
                    />

                    <TabCard
                      heading="Job portal landing page"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero."
                      image="src/data/image/images-portfolio-03.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
