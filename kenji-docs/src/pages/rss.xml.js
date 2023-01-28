import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const blogs = await getCollection("blog");
  return rss({
    title: "KenjiDocs",
    description: "Kenji's life updates in written form",
    site: "https://kenjiphang.vercel.app",
    items: blogs.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.publishDate,
      link: `/blogs/${post.slug}/`,
    })),
  });
}
