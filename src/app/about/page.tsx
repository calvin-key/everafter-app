import React from "react";
import History from "../../../features/about/components/History";
import Culture from "../../../features/about/components/Culture";
import Image from "next/image";
import TeamSection from "../../../features/about/components/TeamSection";

const about = () => {
  return (
    <main>
      <h1 className="pt-10 text-center text-5xl font-semibold">About Us</h1>
      <History />
      <div className="relative h-[300px] w-full md:h-[400px]">
        <Image
          src="/About.webp"
          alt="lovely couple"
          fill
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <Culture />
      <TeamSection />
    </main>
  );
};

export default about;
