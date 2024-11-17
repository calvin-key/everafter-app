import Image from "next/image";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";

const TestimonialCards = () => {
  return (
    <CarouselContent>
      <CarouselItem>
        <div className="flex gap-1 text-white">
          <div className="grid h-[400px] w-full grid-cols-2 grid-rows-2 md:h-[600px]">
            <div className="relative row-span-2 h-full w-full">
              <Image
                src="/Testimony1.webp"
                alt="Sarah"
                fill
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="relative bg-slate-300">
              <Image
                src="/Testimony1-1.jpeg"
                alt="Sarah"
                fill
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center bg-[#aa6542] px-5 text-[12px] md:px-10 md:text-xl">
              <p>
                "EverAfter Weddings made our day absolutely perfect! From the
                planning to the coordination, they took care of everything."
              </p>
              <p className="font-bold">– Sarah & John</p>
            </div>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="flex gap-1 text-white">
          <div className="grid h-[400px] w-full grid-cols-2 grid-rows-2 md:h-[600px]">
            <div className="relative row-span-2 h-full w-full">
              <Image
                src="/Testimony2.webp"
                alt="Testimony2"
                fill
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="relative bg-slate-300">
              <Image
                src="/Testimony2-1.jpeg"
                alt="Testimony2"
                fill
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center bg-[#aa6542] px-5 text-[12px] md:px-10 md:text-xl">
              <p>
                "We couldn’t have asked for a better team. They made sure
                everything ran smoothly, and our wedding was flawless."
              </p>
              <p className="font-bold">– Sophia & David</p>
            </div>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="flex gap-1 text-white">
          <div className="grid h-[400px] w-full grid-cols-2 grid-rows-2 md:h-[600px]">
            <div className="relative row-span-2 h-full w-full">
              <Image
                src="/Testimony3.webp"
                alt="Testimony3"
                fill
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="relative bg-slate-300">
              <Image
                src="/Testimony3-1.jpeg"
                alt="Testimony3"
                fill
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center bg-[#aa6542] px-5 text-[12px] md:px-10 md:text-xl">
              <p>
                "The best decision we made was hiring EverAfter Weddings. They
                truly made our wedding day unforgettable."
              </p>
              <p className="font-bold">– Emma & Mark</p>
            </div>
          </div>
        </div>
      </CarouselItem>
    </CarouselContent>
  );
};

export default TestimonialCards;
