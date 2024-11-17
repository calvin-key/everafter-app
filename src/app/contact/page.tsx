import Contact from "../../../features/contact/components/Contact";
import Socials from "../../../features/contact/components/Socials";

const contact = () => {
  return (
    <main className="container mx-auto space-y-5 p-10">
      <h1 className="text-center text-5xl font-semibold">Contact</h1>
      <h2 className="text-center text-3xl">We’re Excited to Hear From You!</h2>
      <p className="text-center text-[#C6754D]">
        Whether you have questions, need help with planning, or want to book a
        consultation, our team is here to assist you every step of the way.
      </p>
      <Contact />
      <Socials />
    </main>
  );
};

export default contact;
