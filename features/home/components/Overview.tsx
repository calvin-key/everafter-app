import Image from "next/image";
import React from "react";
import TeamHome from "./TeamHome";
import Link from "next/link";

const Overview = () => {
  return (
    <section>
      <div className="h-full bg-[#C6754D]">
        <div className="container mx-auto flex flex-col items-center justify-center gap-9 p-10 text-white md:flex-row md:gap-32 md:p-20">
          <h1 className="text-5xl md:text-7xl">Our story</h1>
          <div className="flex flex-col items-center md:items-start">
            <p className="pb-7 text-center md:text-left">
              Founded on a passion for love and celebration, EverAfter Weddings
              has been helping couples create their dream weddings for over 5
              years. Our team is made up of experienced wedding planners,
              designers, and coordinators who are dedicated to turning your
              wedding vision into a reality. We offer personalized services,
              from intimate ceremonies to grand celebrations, ensuring every
              detail is executed with care and precision.
            </p>
            <Link
              href="/about"
              className="border-2 border-white px-4 py-3 hover:bg-white hover:text-[#C6754D]"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto space-y-10 p-20">
        <div className="text-center text-5xl md:text-left">Meet our team</div>
        <div className="flex flex-col justify-between gap-9 md:flex-row md:gap-7">
          <div className="text-center text-[#C6754D] md:text-left">
            experts in their fields
          </div>
          <TeamHome />
        </div>
      </div>

      <div className="relative h-[300px] w-full md:h-[600px]">
        <Image
          src="/overview.webp"
          alt="table"
          fill
          objectFit="cover"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Overview;
