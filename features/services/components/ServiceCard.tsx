import { Service } from "@/types/service";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link href={`/service/${service.entryId}`}>
      <div className="flex flex-col gap-5">
        <div className="grid h-fit w-full grid-rows-2 gap-5 border-2 border-[#b68e7a] hover:bg-[#b68e7a] hover:text-white md:h-[300px] md:grid-cols-2 md:grid-rows-none">
          <div className="relative h-full w-full">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between gap-5 p-2 text-center md:p-7 md:pl-0 md:pt-10 md:text-left">
            <h1 className="text-2xl font-semibold">{service.title}</h1>
            <p className="pt-3 md:pt-5">{service.briefDescription}</p>
            <div className="flex justify-center gap-3 md:justify-normal">
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
