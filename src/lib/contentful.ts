import { createClient, FieldsType } from "contentful";

interface ResponseEntry {
  sys: { id: string };
  fields: FieldsType;
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getEntries = async () => {
  try {
    const response = await client.getEntries({
      content_type: "Service",
    });

    const services = response.items.map((service: ResponseEntry) => ({
      entryId: service.sys.id,
      title: service.fields.title,
      briefDescription: service.fields.briefDescription,
      image: "https:" + service.fields.image.fields.file.url,
      description: service.fields.description,
    }));

    return services;
  } catch (error) {
    console.log(error);
  }
};

export const getEntry = async (entryId: string) => {
  try {
    const { sys, fields }: ResponseEntry = await client.getEntry(entryId);
    return {
      entryId: sys.id,
      title: fields.title,
      briefDescription: fields.briefDescription,
      image: "https:" + fields.image.fields.file.url,
      description: fields.description,
    };
  } catch (error) {
    console.log(error);
  }
};
