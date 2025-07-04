import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: "page",
      source: "docs/**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        order: z.number(),
        group: z.string(),
      }),
    }),
  },
});
