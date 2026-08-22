import Footer from "@/app/footer/Footer"
import HomePage from "./home/home";
import Navbar from "@/app/navbar/Navbar";
import StickyContactIcons from "./stickyicons/stickyIcons";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Invisible Grills & Safety Nets in Visakhapatnam | Srinu",
  },
  description:
    "Protect balconies, windows, children, pets, and open areas with professionally installed invisible grills and safety nets in Visakhapatnam.",
  keywords: [
    "invisible grills Visakhapatnam",
    "balcony safety nets Visakhapatnam",
    "pigeon nets Vizag",
    "child safety nets",
    "bird protection nets",
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Invisible Grills & Safety Nets in Visakhapatnam",
    description:
      "Premium balcony protection, invisible grills, pigeon nets, and professional installation across Visakhapatnam.",
    url: siteConfig.url,
  },
};

const Home = () => {
  return(
    <>
      <Navbar/>
      <HomePage/>
      <StickyContactIcons/>
      <Footer/>
      </>
  )
}

export default Home;
