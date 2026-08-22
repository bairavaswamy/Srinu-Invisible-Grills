import Image from "next/image";

type ImageCardProps = {
  image: string;
  imageAlt: string;
  title: string;
};

const ImageCard = ({ image, imageAlt, title }: ImageCardProps) => (
  <figure className="site-card relative overflow-hidden rounded-3xl">
    <div className="relative aspect-[4/3]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 1024px) 92vw, 550px"
        className="object-cover"
      />
    </div>
    <figcaption className="border-t border-slate-200 px-6 py-4 text-sm text-[var(--text-secondary)]">
      Custom {title.toLowerCase()} installation in Visakhapatnam
    </figcaption>
  </figure>
);

export default ImageCard;
