import Image from "next/image";
import TestimonialCards from "./TestimonialCards";
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  return (
    <section className="bg-[#C6754D] text-white">
      <div className="container mx-auto space-y-7 p-10">
        <div className="space-y-3">
          <h1 className="text-5xl">What Our Clients Are Saying</h1>
          <p className="">
            We’ve helped countless couples create their dream weddings. Here’s
            what they have to say about their experience with EverAfter
            Weddings.
          </p>
        </div>
        <div className="text-[#C6754D] p-3">
          <Carousel>
            <TestimonialCards />
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
