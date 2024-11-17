import Image from "next/image";

const Contact = () => {
  return (
    <section className="grid grid-rows-2 gap-4 pt-5 md:grid-cols-2 md:grid-rows-none">
      <div className="space-y-7">
        <div>
          <h2 className="mb-4 text-2xl">
            Reach Us <i className="bg-[#C6754D] text-white">Directly</i>
          </h2>
          <div className="space-y-2">
            <div>
              <b className="pr-2">Phone:</b>
              <a href="tel:62 813 80093183" className="hover:underline">
                +62 813 80093183
              </a>
            </div>
            <div>
              <b className="pr-2">Email:</b>
              <a href="mailto:info@everafter.com" className="hover:underline">
                info@everafter.com
              </a>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-2xl">
            Visit Our <i className="bg-[#C6754D] text-white">Office</i>
          </h2>
          <div className="space-y-2">
            <p>
              Find us at our central location. Schedule an in-person meeting to
              discuss your wedding vision.
            </p>
            <p>
              Visit us at 12130 Millennium Dr #300, Los Angeles, CA 90094,
              United States of America
            </p>
            <p>
              We’re available Monday through Saturday from 9 AM to 6 PM. Closed
              on Sundays.
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/building.webp"
          alt="building"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Contact;
