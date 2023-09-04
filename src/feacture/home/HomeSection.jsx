import PersonalInfo from "./PersonalInfo";
import PersonalImg from "./PersonalImg";

export default function HomeSection() {
  return (
    <div className="relative   pb-32">
      <img src="src\data\image\white-hero-circle.svg" alt="white-hero-circle" className="bg-white mt-12" />
      <div className="  xl:mx-auto xl:grid xl:max-w-7xl xl:grid-cols-2 xl:items-start xl:gap-24 xl:px-1">
        <PersonalInfo />
        <PersonalImg />
      </div>
    </div>
  );
}
