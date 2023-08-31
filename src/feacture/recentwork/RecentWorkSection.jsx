import { useState } from "react";

export default function RecentWorkSection() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section className=" bg-[#F8F9FF] py-16 sm:pt-28 pb-16 ">
      <div className="text-center sm:max-w-xl sm:mb-8 mb-8 sm:mx-auto ">
        <span className="font-bold  text-[#4A6CF7]">Creative Portfolios</span>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Recent Works
        </h2>
        <p className=" mx-auto mt-3 max-w-2xl text-sm text-center text-[#959CB1] sm:mt-4 sm:text-lg">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>

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
                <div className={openTab === 1 ||openTab===3? "block" : "hidden"} id="link1">
                  <div className=" mx-5 sm:grid sm:grid-cols-2 space-x-5  ">
                    <div className="py-5 mb-5">
                      <img
                        src="src/data/image/images-portfolio-01.jpg"
                        alt="work"
                        className=""
                      />
                      <div>
                        <a href="/">
                          <h1 className="text-lg text-left font-semibold my-6 hover:cursor-pointer hover:text-[#4A6CF7] ">
                            Startup landing page
                          </h1>
                        </a>
                        <p className="text-[#959CB1] font-medium text-left">
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                      </div>
                    </div>

                    <div className="py-5 mb-5">
                      <img
                        src="src/data/image/images-portfolio-01.jpg"
                        alt="work"
                      />
                      <div>
                        <a href="/">
                          <h1 className="text-lg text-left font-semibold my-6 hover:cursor-pointer hover:text-[#4A6CF7] ">
                            Startup landing page
                          </h1>
                        </a>
                        <p className="text-[#959CB1] font-medium text-left">
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 || openTab=== 1 ||openTab===4 ? "block" : "hidden"} id="link2">
                  <div className="sm:flex space-x-5 mx-5 ">
                    <div className="py-5 mb-5">
                      <img
                        src="src/data/image/images-portfolio-03.jpg"
                        alt="work"
                      />
                      <div>
                        <a href="/">
                          <h1 className="text-lg text-left font-semibold my-6 hover:cursor-pointer hover:text-[#4A6CF7] ">
                            SaaS landing page
                          </h1>
                        </a>
                        <p className="text-[#959CB1] font-medium text-left">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Odio rerum eius molestias, quos dolorem
                          architecto expedita ullam. Provident, unde quaerat.
                        </p>
                      </div>
                    </div>

                    <div className="py-5 mb-5">
                      <img
                        src="src/data/image/images-portfolio-03.jpg"
                        alt="work"
                      />
                      <div>
                        <a href="/">
                          <h1 className="text-lg text-left font-semibold my-6 hover:cursor-pointer hover:text-[#4A6CF7] ">
                            SaaS landing page
                          </h1>
                        </a>
                        <p className="text-[#959CB1] font-medium text-left">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Odio rerum eius molestias, quos dolorem
                          architecto expedita ullam. Provident, unde quaerat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className={openTab === 3 || openTab=== 1  ? "block" : "hidden"} id="link3">
                  <div className="sm:flex space-x-5 mx-5 ">
                    <div className="py-5 mb-5">
                      <img
                        src="src/data/image/images-portfolio-04.jpg"
                        alt="work"
                      />
                      <div>
                        <a href="/">
                          <h1 className="text-lg text-left font-semibold my-6 hover:cursor-pointer hover:text-[#4A6CF7] ">
                            Startup landing
                          </h1>
                        </a>
                        <p className="text-[#959CB1] font-medium text-left">
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                      </div>
                    </div>

                    <div className="py-5 mb-5">
                      <img
                        src="src/data/image/images-portfolio-04.jpg"
                        alt="work"
                      />
                      <div>
                        <a href="/">
                          <h1 className="text-lg text-left font-semibold my-6 hover:cursor-pointer hover:text-[#4A6CF7] ">
                            Startup landing
                          </h1>
                        </a>
                        <p className="text-[#959CB1] font-medium text-left">
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div className={openTab === 4 || openTab=== 1 ? "block" : "hidden"} id="link3">
                  <div className="sm:flex space-x-5 mx-5 ">
                    <div className="py-5 mb-5">
                      <img
                        src="src/data/image/images-portfolio-02.jpg"
                        alt="work"
                      />
                      <div>
                        <a href="/">
                          <h1 className="text-lg text-left font-semibold my-6 hover:cursor-pointer hover:text-[#4A6CF7] ">
                            My services
                          </h1>
                        </a>
                        <p className="text-[#959CB1] font-medium text-left">
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                      </div>
                    </div>

                    <div className="py-5 mb-5">
                      <img
                        src="src/data/image/images-portfolio-02.jpg"
                        alt="work"
                      />
                      <div>
                        <a href="/">
                          <h1 className="text-lg text-left font-semibold my-6 hover:cursor-pointer hover:text-[#4A6CF7] ">
                            My services
                          </h1>
                        </a>
                        <p className="text-[#959CB1] font-medium text-left">
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
