import Card from "../../pages/Card";
import { MdPersonSearch } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { SiMaterialdesignicons } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi";

export default function ServicesSection() {
  return (
    <section className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center ">
          <span className="font-bold  text-[#4A6CF7]">What I Offer?</span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            My Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl   text-[#959CB1] sm:mt-4 sm:text-lg">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Cards */}
        <div className=" sm:flex sm:space-x-6">
          <Card
            title="User Research"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque ligulavel in."
            icon={<MdPersonSearch className="inline-block h-20" />}
          />
          <Card
            title="Visual Design"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque ligulavel in."
            icon={<SiMaterialdesignicons className="inline-block h-20" />}
          />
          <Card
            title="User Testing"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque ligulavel in."
            icon={<HiUserGroup className="inline-block h-20" />}
          />
          <Card
            title="Prototype"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque ligulavel in."
            icon={<CgMenuGridR className="inline-block h-20" />}
          />
        </div>
      </div>
    </section>
  );
}
