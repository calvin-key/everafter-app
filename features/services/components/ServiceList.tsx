import { Service } from "@/types/service";
import ServiceCard from "./ServiceCard";
import { FC } from "react";

interface ServiceListProps {
  services: Service[];
}

const ServiceList: FC<ServiceListProps> = ({ services }) => {
  return (
    <div className="mt-5 flex flex-col gap-5">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;
