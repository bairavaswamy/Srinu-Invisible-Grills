import HeroSlider, { type HomeSlide } from "./HeroSlider";

export default function HeroSection({ slides }: { slides: HomeSlide[] }) {
  return <HeroSlider slides={slides} />;
}
