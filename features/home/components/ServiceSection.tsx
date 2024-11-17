import { FC } from "react";
import ServiceCardHome from "./ServiceCardHome";
import { Service } from "@/types/service";
import Link from "next/link";

interface ServiceSectionProps {
  services: Service[];
}

const ServiceSection: FC<ServiceSectionProps> = ({ services }) => {
  return (
    <section className="container mx-auto my-20 flex flex-col items-center space-y-16 px-10 py-10 text-center text-[14px]">
      <h1 className="text-5xl">Our Services</h1>
      <div className="grid grid-rows-4 gap-4 md:grid-cols-4 md:grid-rows-none">
        {services.map((service, index) => (
          <ServiceCardHome key={index} service={service} />
        ))}
      </div>
      <Link
        href="/contact"
        className="border-2 border-[#C6754D] px-4 py-3 text-[#C6754D] hover:bg-[#C6754D] hover:text-white"
      >
        Contact Now
      </Link>
    </section>
  );
};

export default ServiceSection;
