export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  image: string;
  description: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "importance-of-balcony-safety-nets",
    title: "Why Balcony Safety Nets Are Essential for Every Home",
    date: "October 25, 2025",
    image: "/balcony/balcony-net.webp",
    description:
      "Balcony safety nets prevent accidental falls while preserving airflow, daylight, and open views.",
    content: `Balcony safety nets are an important layer of protection for families in apartments and high-rise homes. They reduce the risk of accidental falls without closing off the balcony or blocking the view.

At Srinu Invisible Grills, we install UV-stabilized, weather-resistant nets with secure fittings and a neat finish. Each installation is measured for the property so the final result feels integrated rather than temporary.

For homes with children, pets, or elderly residents, a professionally installed safety net offers practical protection and everyday peace of mind.`,
  },
  {
    slug: "invisible-grills-modern-home-trend",
    title: "Invisible Grills — The Modern Home Safety Trend",
    date: "September 12, 2025",
    image: "/images/invisble.jpg",
    description:
      "Invisible grills combine high-rise safety with a clean, contemporary appearance and clear views.",
    content: `Invisible grills combine modern design with reliable balcony and window protection. High-tensile stainless-steel cables create a strong barrier while remaining visually minimal.

Quality systems use corrosion-resistant SS 316 cables, protective coatings, and securely anchored fittings. They suit balconies, windows, stair openings, and other areas where safety matters but bulky traditional bars are undesirable.

Professional measurement and tensioning are essential for a safe, durable installation that remains easy to maintain.`,
  },
  {
    slug: "pigeon-nets-for-clean-balconies",
    title: "Keep Your Balcony Clean with Pigeon Nets",
    date: "August 30, 2025",
    image: "/pigeonbalcony/pigeon-net-installation.webp",
    description:
      "Pigeon nets help keep balconies cleaner by preventing birds from entering or nesting without harming them.",
    content: `Pigeons can quickly make balconies, ducts, and window ledges difficult to use. Droppings, feathers, and nesting material create recurring cleaning and hygiene problems.

Pigeon safety nets provide a humane barrier that keeps birds outside while allowing air and daylight to pass through. UV-stabilized netting and weather-resistant fittings help the installation perform in coastal conditions.

A custom fit closes small gaps around pipes, rails, and corners and gives the balcony a cleaner, more dependable finish.`,
  },
  {
    slug: "construction-safety-nets-benefits",
    title: "Benefits of Construction Safety Nets for Worksites",
    date: "July 18, 2025",
    image: "/images/construction-net.webp",
    description:
      "Construction safety nets help control falling debris and improve protection around active worksites.",
    content: `Construction safety nets help reduce the risk created by falling tools, materials, and debris on building sites. They protect workers, visitors, nearby property, and pedestrian areas.

The correct mesh, load capacity, anchors, and coverage depend on the worksite and installation height. Weather-resistant materials and routine inspection are important for dependable performance.

Safety nets support a broader site-safety plan and should always be installed and maintained by trained professionals.`,
  },
  {
    slug: "child-pet-safety-nets-for-home",
    title: "Child & Pet Safety Nets — Must-Have for Urban Families",
    date: "June 9, 2025",
    image: "/safetynet/pets-safety-nets.webp",
    description:
      "Child and pet safety nets secure balconies, windows, and open stair areas while keeping the home bright and ventilated.",
    content: `Open balconies, windows, and stairwells need special attention in homes with children or pets. A well-fitted safety net creates a flexible barrier without making the space feel enclosed.

The net should be selected for the opening, expected load, weather exposure, and the size of the pet. Strong anchors and careful edge finishing prevent avoidable gaps.

Professional installation provides a cleaner appearance and helps families use balconies and open areas with greater confidence.`,
  },
];

export const getBlogPost = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

