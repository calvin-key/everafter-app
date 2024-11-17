import { getEntries } from "@/lib/contentful";
import ServiceCard from "../../../features/services/components/ServiceCard";
import ServiceList from "../../../features/services/components/ServiceList";

const page = async () => {
  const services = await getEntries();

  if (!services) {
    return;
  }
  return (
    <main className="container mx-auto space-y-5 p-10">
      <h1 className="pb-7 text-center text-5xl font-bold">Our Services</h1>
      <ServiceList services={services} />
    </main>
  );
};

export default page;
