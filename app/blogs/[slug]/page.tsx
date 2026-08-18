import { notFound } from "next/navigation";
import BlogDetailsClient from "./BlogDetailsClient";

const blogPosts: Record<
  string,
  { title: string; date: string; image: string; content: string }
> = {
  "importance-of-balcony-safety-nets": {
    title: "Why Balcony Safety Nets Are Essential for Every Home",
    date: "October 25, 2025",
    image: "/images/balcony-safety-net.webp",
    content: `
Balcony safety nets are not just an extra feature — they are important for families, especially in high-rise apartments. These nets help prevent accidental falls while keeping your open view clear.

At Srinu Invisible Nets, we use strong and UV-resistant materials that stay durable for many years. Our expert team installs the nets neatly, keeping your balcony safe and attractive.

Whether you have children, pets, or simply want peace of mind, balcony safety nets are a smart and valuable choice for home safety.
 `,
  },
  "invisible-grills-modern-home-trend": {
    title: "Invisible Grills — The Modern Home Safety Trend",
    date: "September 12, 2025",
    image: "/images/invisible-grill.webp",
    content: `
          Invisible grills are the perfect mix of beauty and safety. Made from 316 marine-grade stainless steel, they give strong protection without blocking your view.

      They are rust-proof, long-lasting, and strong enough to handle heavy impact, making them perfect for balconies, windows, and building exteriors.

      Many modern homeowners choose invisible grills because of their sleek look and low maintenance needs.

`,
  },
  "pigeon-nets-for-clean-balconies": {
    title: "Keep Your Balcony Clean with Pigeon Nets",
    date: "August 30, 2025",
    image: "/images/pigeon-installation.webp",
    content: ` 
    Pigeons can make balconies and open spaces dirty and uncomfortable. Pigeon safety nets provide a safe and hygienic solution without harming birds, helping keep your home clean, peaceful, and protected.
`,
  },
};

// ✅ Required for static export
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const blog = blogPosts[params.slug];
  if (!blog) return notFound();

  return <BlogDetailsClient blog={blog} />;
}
