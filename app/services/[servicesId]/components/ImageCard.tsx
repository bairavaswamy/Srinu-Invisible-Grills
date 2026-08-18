import Image from "next/image";

type ImageCardProps = {
  image: string;
  title: string;
};

const ImageCard = ({ image, title }: ImageCardProps) => {
  return (
    <div className="relative">
      <Image
        src={image}
        alt={title}
        width={600}
        height={200}
        sizes="(max-width: 768px) 90vw, 600px"
        className="rounded-2xl shadow-2xl object-cover"
      />
      <div className="absolute -bottom-6 -right-6 bg-[#E78946] rounded-xl shadow-lg p-4 w-52 text-center">
        <h3 className="font-bold text-white">Trusted by 10,000+</h3>
        <p className="text-sm text-white/70">Happy Customers</p>
      </div>
    </div>
  );
}

export default ImageCard;