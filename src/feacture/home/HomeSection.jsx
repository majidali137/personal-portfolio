import SvgCircle from "../../ui/SvgCircle";
import PersonalInfo from "./PersonalInfo";
import PersonalImg from "./PersonalImg";

export default function HomeSection() {
  return (
    <div className="relative bg-white  pb-32">
      <SvgCircle />
      <div className="  xl:mx-auto xl:grid xl:max-w-7xl xl:grid-cols-2 xl:items-start xl:gap-24 xl:px-8">
        <PersonalInfo />
        <PersonalImg />
      </div>
    </div>
  );
}
