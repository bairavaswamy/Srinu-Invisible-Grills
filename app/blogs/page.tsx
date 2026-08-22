import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import { blogPosts } from "./blogData";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Safety Net & Invisible Grill Guides | Srinu" },
  description:
    "Practical guides about balcony safety nets, invisible grills, pigeon control, child protection, and construction safety in Visakhapatnam.",
  alternates: { canonical: `${siteConfig.url}/blogs` },
};

const BlogsPage = () => (
  <>
    <Navbar />
    <main className="site-page min-h-screen px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="site-accent mb-3 text-center text-sm font-semibold uppercase tracking-[0.3em]">
          Safety resources
        </p>
        <h1 className="mb-4 text-center text-4xl font-extrabold md:text-5xl">
          Invisible Grill and Safety Net Installation Guides
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-center leading-7 text-[var(--text-secondary)]">
          Clear, practical guidance from our installation team for balconies,
          windows, bird control, and high-rise safety.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((blog) => (
            <article
              key={blog.slug}
              className="site-card group overflow-hidden rounded-2xl transition hover:-translate-y-1"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex min-h-72 flex-col p-6">
                <p className="site-accent mb-3 text-sm font-medium">
                  {blog.date}
                </p>
                <h2 className="mb-3 text-xl font-bold leading-7">
                  {blog.title}
                </h2>
                <p className="mb-6 line-clamp-3 leading-7 text-[var(--text-secondary)]">
                  {blog.description}
                </p>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="site-cta mt-auto inline-flex items-center justify-center rounded-xl px-4 py-3 font-bold transition focus:outline-none focus:ring-2 focus:ring-[var(--brand-aqua)]"
                >
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
    <StickyContactIcons />
    <Footer />
  </>
);

export default BlogsPage;
