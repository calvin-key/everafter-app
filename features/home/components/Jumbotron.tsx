import Image from "next/image";

const Jumbotron = () => {
  return (
    <section className="container mx-auto flex h-full flex-col items-center justify-center gap-10 text-center md:mb-16 md:h-screen md:gap-14">
      <div className="space-y-5 motion-preset-focus motion-duration-2000">
        <h1 className="text-2xl md:text-5xl md:p-0 p-2">
          Making Your Dream Wedding a Beautiful Reality
        </h1>
        <p className="w-full px-10 text-[#C6754D]">
          At EverAfter Weddings, we specialize in creating unforgettable wedding
          experiences. From full planning to day-of coordination, our expert
          team ensures every detail is perfect, so you can enjoy your special
          day stress-free.
        </p>
      </div>
      <div>
        <video
          className="h-full w-full object-cover md:px-32"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/playback.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};

export default Jumbotron;
