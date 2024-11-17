import Image from "next/image";

const History = () => {
  return (
    <section className="container mx-auto mt-10 space-y-5 p-10 pt-0 md:mb-10">
      <div className="mb-10 flex justify-center">
        <div className="relative h-[72px] w-[251px] md:h-[122px] md:w-[301px]">
          <Image
            src="/Vector.svg"
            alt="table"
            fill
            objectFit="cover"
            className="object-cover"
          />
        </div>
      </div>
      <h1 className="text-center text-3xl text-[#C6754D]">
        Our Journey: From Dreams to Reality
      </h1>
      <p className="text-center">
        EverAfter began with a simple yet powerful dream: to help couples
        celebrate their love in the most magical way possible. What started as a
        passion project has grown into a trusted wedding planning company,
        dedicated to making every wedding as unique as the couples we work with.
      </p>
      <div className="grid h-fit gap-5 pt-20 md:grid-cols-2 md:grid-rows-none">
        <div className="relative h-full">
          <h1 className="sticky top-72 text-center text-3xl font-bold md:text-5xl">
            Our <i className="bg-[#C6754D] text-white">History</i>
          </h1>
        </div>
        <div className="space-y-10">
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-xl font-semibold">
              2018: <i className="bg-[#C6754D] text-white">The Beginning</i>
            </h1>
            <h1>
              In 2018, our founder, inspired by a deep love for celebrating
              life’s most beautiful moments, launched EverAfter. What started as
              a small passion project grew quickly as couples embraced our fresh
              and personalized approach to wedding planning. By listening
              closely to our clients and focusing on crafting unique love
              stories, we earned our first glowing testimonials and laid the
              foundation for our success.
            </h1>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-xl font-semibold">
              2019: <i className="bg-[#C6754D] text-white">Growing Together</i>
            </h1>
            <h1>
              By 2019, EverAfter began to evolve, offering not only expert
              wedding planning but also design and styling services. We saw the
              importance of creating visually stunning weddings that reflected
              each couple’s unique personality and vision. From elegant,
              intimate ceremonies to grand, opulent affairs, our reputation for
              exceptional creativity and attention to detail spread through
              word-of-mouth and heartfelt recommendations.
            </h1>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-xl font-semibold">
              2020: <i className="bg-[#C6754D] text-white">Building Our team</i>
            </h1>
            <h1>
              As demand grew, we expanded our team to include a diverse group of
              talented wedding planners, designers, and coordinators who shared
              our passion for love and creativity. This collaborative spirit
              allowed EverAfter to take on more complex projects, introduce
              innovative ideas, and deliver truly unforgettable experiences. Our
              team’s dedication became the cornerstone of our success, earning
              us a trusted name in the wedding planning industry.
            </h1>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-xl font-semibold">
              Present Day:{" "}
              <i className="bg-[#C6754D] text-white">
                Trusted by Couples Everywhere
              </i>
            </h1>
            <h1>
              Today, EverAfter stands as a leader in wedding planning,
              celebrated for turning countless wedding dreams into reality. From
              the first consultation to the final send-off, we ensure every
              detail is perfect, every moment magical, and every couple feels
              cherished. Our mission remains the same: to provide exceptional
              service, inspire creativity, and celebrate love stories with joy
              and passion. The journey continues, and we are honored to be part
              of the next chapter in your love story.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
