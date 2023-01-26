import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    author: z.string().default("Anonymous"),
    excerpt: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    category: z.enum(["Technology", "Life", "Tutorial"]),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

export const collections = {
  blog,
};
