import { getEntry } from "@/lib/contentful";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FC } from "react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Link from "next/link";

interface ServiceDetailProps {
  params: { entryId: string };
}

const RICHTEXT_OPTIONS: Options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (_node, children) => {
      return <h1 className="pb-3 pt-7 text-3xl font-semibold">{children}</h1>;
    },
    [BLOCKS.PARAGRAPH]: (_node, children) => {
      return <p>{children}</p>;
    },
    [BLOCKS.UL_LIST]: (_node, children) => {
      return <ul className="list-disc pl-5">{children}</ul>;
    },
  },
};

const ServiceDetail: FC<ServiceDetailProps> = async ({ params }) => {
  const service = await getEntry(params.entryId);
  console.log(service);

  if (!service) {
    return notFound();
  }

  return (
    <main className="container mx-auto px-3 md:p-10">
      <section>
        <h1 className="pb-7 text-center text-3xl font-bold md:text-5xl">
          {service.title}
        </h1>
        <div className="space-y-3 text-center md:text-left">
          <div className="relative h-[300px] w-full md:h-[500px]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              objectFit="cover"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="mb-10">
        {documentToReactComponents(service.description, RICHTEXT_OPTIONS)}
      </section>
      <section className="mb-10">
        <p className="mb-8 font-semibold">
          Your Wedding Story Starts Here – Get in Touch with Our Team Today!
        </p>
        <Link
          href="/contact"
          className="w-fit border-2 border-[#C6754D] bg-[#C6754D] px-6 py-4 text-white hover:bg-white hover:text-[#C6754D]"
        >
          contact now
        </Link>
      </section>
    </main>
  );
};

export default ServiceDetail;
