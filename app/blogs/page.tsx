"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";

const blogs = [
  {
    slug: "importance-of-balcony-safety-nets",
    title: "Why Balcony Safety Nets Are Essential for Every Home",
    date: "October 25, 2025",
    image: "/images/balcony-safety-net.webp",
    description:
     "Balconies give beautiful views, but they can be risky without proper safety. Safety nets help prevent accidents while keeping your space open, safe, and stylish.",
  },
  {
    slug: "invisible-grills-modern-home-trend",
    title: "Invisible Grills — The Modern Home Safety Trend",
    date: "September 12, 2025",
    image: "/images/invisible-grill.webp",
    description:
    "Invisible grills give both safety and a modern look. Many people in high-rise apartments choose invisible grills because they keep the view clear while providing strong and reliable protection.",
  },
  {
    slug: "pigeon-nets-for-clean-balconies",
    title: "Keep Your Balcony Clean with Pigeon Nets",
    date: "August 30, 2025",
    image: "/images/pigeon-installation.webp",
    description:
      "Pigeons can make balconies and windows dirty and unhealthy. Pigeon safety nets help keep your space clean and safe by stopping birds from entering and nesting.",
  },
  {
    slug: "construction-safety-nets-benefits",
    title: "Benefits of Construction Safety Nets for Worksites",
    date: "July 18, 2025",
    image: "/images/construction-net.webp",
    description:
      "Worker safety is very important. Construction safety nets protect workers and people below from falling debris, making construction sites safer and more secure.",
  },
  {
    slug: "child-pet-safety-nets-for-home",
    title: "Child & Pet Safety Nets — Must-Have for Urban Families",
    date: "June 9, 2025",
    image: "/images/pets-safety.webp",
    description:
      "If you live in an apartment, child and pet safety nets give you peace of mind by keeping your little ones safe from balcony falls and open spaces while still allowing fresh air and light.",
  },
];

const BlogsPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#354664] text-[#E78946] py-16 px-6 md:px-16">
        <h1 className="pt-10 text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#E78946]">
          Our Latest Blogs
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-amber-200/30 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col justify-between h-[250px]">
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-[#E78946]">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-amber-100/80 mb-3">{blog.date}</p>
                  <p className="text-amber-50/90 line-clamp-3">{blog.description}</p>
                </div>

                <Link
                  href={`/blogs/${blog.slug}`}
                  className="mt-4 inline-block text-emerald-950 font-semibold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-300 rounded-lg px-4 py-2 text-center hover:opacity-90 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <StickyContactIcons />
      <Footer />
    </>
  );
};

export default BlogsPage;
