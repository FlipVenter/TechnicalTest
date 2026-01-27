import Image from "next/image";

export default function Home() {
  return (
    <div className="">
        
        {/* Hero Section: Needs a catchy headline (e.g., "Power Your Home with the Sun"). */}
        <div className="h-110 text-wrap text-[60px] font-bold text-white leading-tight p-4 bg-cover bg-center bg-no-repeat flex items-center justify-center responsive-bg"
             style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>
          Power your home with the Sun
        </div>
        
        {/* Call to Action (CTA): A button linking to the Contact page ("Get a FreeQuote").*/}
        <div className="bg-white h-35 justify-center items-center flex flex-col gap-4">
          <div className="text-xl">Get a Free Quote</div>
          <button className="bg-navy rounded-[13px] px-6 py-3 text-white hover:bg-marine transition-colors">
            Get Started
          </button>
        </div>

        {/* Features: Highlight 3 key benefits: Save Money, Eco-Friendly, 25-Year Warranty */}
        <div className="bg-green-500 h-50 justify-center items-center flex flex-col gap-4">
          <div className="bg-white w-2/3 p-3 text-center text-xl rounded-[15]">Save Money</div>
          <div className="bg-white w-2/3 p-3 text-center text-xl rounded-[15]">Eco-Friendly</div>
          <div className="bg-white w-2/3 p-3 text-center text-xl rounded-[15]">25-Year Warranty</div>
        </div>

    </div>
  );
}

// #002363 blue
