import Heading from "../../ui/Heading";
import TestimonalCard from "./TestimonalCard";

export default function TestimonialSection() {
  return (
    <div className="relative bg-[#fefefe] px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28 border-b">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        {/* heading */}
        <Heading
          subHeading="Awesome Testimonials"
          mainHeading="Hear From My Clients"
          description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />

        {/* Testimonal Card */}
        <div className="sm:flex sm:space-x-7  ">
          <TestimonalCard
            CoDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero."
            CoLogo="src\data\image\images-lineicon.svg"
            CoName="Power Funnel"
            CoOwnerImg="src\data\image\images-image-2.png"
            CoOwnerName="Majid Ali"
          />
          <TestimonalCard
            CoDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero."
            CoLogo="src\data\image\images-lineicon.svg"
            CoName="Power Funnel"
            CoOwnerImg="src\data\image\images-image-1.png"
            CoOwnerName="Usman"
          />
        </div>
        <div className="sm:flex sm:space-x-7  ">
          <TestimonalCard
            CoDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero."
            CoLogo="src\data\image\images-ayro.svg"
            CoName="Power Funnel"
            CoOwnerImg="src\data\image\images-image-4.png"
            CoOwnerName="Waqas"
          />
          <TestimonalCard
            CoDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero."
            CoLogo="src\data\image\images-uideck.svg"
            CoName="Power Funnel"
            CoOwnerImg="src\data\image\images-image-2.png"
            CoOwnerName="Zohaib"
          />
        </div>
      </div>
    </div>
  );
}
