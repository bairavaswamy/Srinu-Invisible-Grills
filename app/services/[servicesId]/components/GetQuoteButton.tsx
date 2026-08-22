import { siteConfig } from "@/lib/site";

const GetQuoteButton = ({ serviceTitle }: { serviceTitle: string }) => {
  const message = encodeURIComponent(
    `Hello, I would like a quotation for ${serviceTitle} in Visakhapatnam.`,
  );

  return (
    <a
      href={`${siteConfig.whatsappUrl}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="site-cta mt-8 inline-flex min-h-12 items-center justify-center rounded-xl px-8 py-3 font-bold transition"
    >
      Request a WhatsApp quote
    </a>
  );
};

export default GetQuoteButton;
