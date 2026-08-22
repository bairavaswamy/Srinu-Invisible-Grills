import Image from "next/image";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";

export default function BlogDetailsClient({
  blog,
}: {
  blog: { title: string; date: string; image: string; content: string };
}) {
  return (
    <>
      <Navbar />
      <main className="site-page min-h-screen px-6 py-20 md:px-16">
        <div className="pt-10 max-w-4xl mx-auto">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
            {blog.title}
          </h1>
          <p className="site-accent mb-6 font-medium">{blog.date}</p>

          <div className="relative mb-10 h-80 w-full overflow-hidden rounded-xl border border-[var(--glass-border-light)] shadow-[var(--shadow-soft)]">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-5 whitespace-pre-line text-lg leading-8 text-[var(--text-secondary)]">
            {blog.content}
          </div>
        </div>
      </main>

      <StickyContactIcons />
      <Footer />
    </>
  );
}
