import Jumbotron from "../../features/home/components/Jumbotron";
import Overview from "../../features/home/components/Overview";
import ServiceSection from "../../features/home/components/ServiceSection";
import Testimonials from "../../features/home/components/Testimonials";
import { getEntries } from "@/lib/contentful";

export default async function Home() {
  const services = await getEntries();

  return (
    <main>
      <Jumbotron />
      <Overview />
      {services && (
        <>
          <ServiceSection services={services} />
        </>
      )}
      <Testimonials />
    </main>
  );
}
