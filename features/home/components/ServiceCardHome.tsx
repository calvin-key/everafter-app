import { Service } from "@/types/service";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ServiceCardHomeProps {
  service: Service;
}

const ServiceCardHome: FC<ServiceCardHomeProps> = ({ service }) => {
  return (
    <Link href={`/service/${service.entryId}`}>
      <div className="flex h-[500px] w-full flex-col items-center border-2 border-[#c6754d5e] pb-4 shadow-md hover:bg-[#e8e1dc] hover:shadow-xl md:h-[550px]">
        <div className="relative h-[300px] w-full">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-2 p-3">
          <h1 className="text-xl font-semibold">{service.title}</h1>
          <p className="text-[#C6754D]">{service.briefDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCardHome;
