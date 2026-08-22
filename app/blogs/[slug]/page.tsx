import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailsClient from "./BlogDetailsClient";
import { blogPosts, getBlogPost } from "../blogData";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogPost(slug);

  if (!blog) return { title: "Article Not Found", robots: { index: false } };

  const description = `${blog.description} Expert installation advice for Vizag homes.`;

  return {
    title: { absolute: `${blog.title} | Srinu` },
    description,
    alternates: { canonical: `${siteConfig.url}/blogs/${slug}` },
    openGraph: {
      title: blog.title,
      description,
      type: "article",
      url: `${siteConfig.url}/blogs/${slug}`,
      images: [{ url: blog.image, alt: blog.title }],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlogPost(slug);
  if (!blog) notFound();

  return <BlogDetailsClient blog={blog} />;
}
