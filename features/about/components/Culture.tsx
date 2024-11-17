import Image from "next/image";

const Culture = () => {
  return (
    <section className="container mx-auto mt-10 space-y-5 p-10">
      {" "}
      <h1 className="text-center text-3xl text-[#C6754D]">
        The Heart of EverAfter
      </h1>
      <p className="text-center">
        At EverAfter, we believe that every wedding is a celebration of love,
        individuality, and connection. Our company culture is rooted in
        kindness, creativity, and collaboration. We are more than just planners;
        we are{" "}
        <span className="font-bold text-[#C6754D]">
          dreamers, storytellers,
        </span>{" "}
        and <span className="font-bold text-[#C6754D]">memory-makers</span> who
        bring passion and dedication to every detail of your special day.
      </p>
      <div className="grid h-fit gap-5 pt-20 md:grid-cols-2 md:grid-rows-none">
        <div className="relative h-full">
          <h1 className="sticky top-72 text-center text-3xl font-bold md:text-5xl">
            Core <i className="bg-[#C6754D] text-white">Values</i>
          </h1>
        </div>
        <div className="space-y-10">
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-xl font-semibold">1. Love and Connection</h1>
            <p>
              We honor the beauty of each love story and work tirelessly to
              create weddings that reflect the unique journey of every couple.
              For us, it’s not just about events—it’s about people, emotions,
              and memories.
            </p>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-xl font-semibold">
              2. Creativity and Innovation
            </h1>
            <p>
              Our team thrives on creativity, transforming ordinary moments into
              extraordinary memories. We stay ahead of trends while maintaining
              timeless elegance, ensuring every wedding is as unique as the
              couple it celebrates.
            </p>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-xl font-semibold">
              3. Excellence and Attention to Detail
            </h1>
            <p>
              From the first consultation to the final send-off, we prioritize
              precision and quality in everything we do. No detail is too small
              to matter, and every element is thoughtfully considered to create
              an unforgettable experience.
            </p>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-xl font-semibold">
              4. Collaboration and Respect
            </h1>
            <p>
              We believe in building strong relationships—with our clients, our
              team, and our trusted vendors. Mutual respect, open communication,
              and teamwork are the cornerstones of every wedding we plan.
            </p>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-xl font-semibold">5. Joy and Celebration</h1>
            <p>
              At the heart of EverAfter is a love for celebrating life’s most
              beautiful moments. We bring joy, positivity, and enthusiasm to
              every step of the journey, making the planning process as
              enjoyable as the big day itself.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 gap-14 pt-20 md:grid-cols-2 md:grid-rows-none">
        <div className="relative h-[200px] w-full md:h-[500px]">
          <Image
            src="/value.webp"
            alt="working team"
            fill
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="top-72 pb-5 text-3xl font-bold md:pt-32 md:text-5xl">
            Our <i className="bg-[#C6754D] text-white">Team Cultures</i>
          </h1>
          <p>
            Behind the scenes, our team is a family. We support and uplift one
            another, always striving to create a collaborative and inspiring
            environment. Our shared passion for celebrating love and creating
            magical moments drives us to exceed expectations with every wedding
            we design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Culture;
