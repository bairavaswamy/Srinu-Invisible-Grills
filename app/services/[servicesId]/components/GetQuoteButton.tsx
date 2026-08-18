'use client';

const GetQuoteButton = () => {
  return (
    <button
      onClick={() => window.open('https://wa.me/7995792953', '_blank', 'noopener')}
      className="mt-6 px-8 py-3 min-w-[44px] min-h-[44px] 
      font-semibold text-white tracking-wide rounded-xl 
      bg-[#E78946]
      shadow-lg shadow-amber-500/20 border border-white
     hover:scale-[1.03]
      transition-all duration-300 ease-in-out"
    >
      Get a Free Quote
    </button>
  );
};

export default GetQuoteButton;
