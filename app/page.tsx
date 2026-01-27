"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-w-screen p-0 m-0">
        
        {/* Hero Section: Needs a catchy headline (e.g., "Power Your Home with the Sun"). */}
        <div className="h-4/5 text-wrap text-[60px] font-bold leading-tight p-4 bg-center bg-no-repeat flex flex-col items-start justify-start"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3csvg width='97' height='163' viewBox='0 0 97 163' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='97' height='163' fill='white'/%3e%3ccircle cx='75' cy='39' r='11' fill='%23FFA600'/%3e%3c/svg%3e")`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
              <div className="animate-slide-in-1 text-[50px] text-black " >Power</div>
              <div className="animate-slide-in-2 text-[50px] text-black " >Your</div>
              <div className="animate-slide-in-3 text-[50px] text-black " >Home</div>
              <div className="animate-slide-in-4 text-[50px] text-black" >with</div>
              <div className="animate-slide-in-5 text-[50px] text-black " >the</div>
              <div className="animate-slide-in-6 text-[70px] text-sun" >Sun</div>
        </div>
        
        {/* Call to Action (CTA): A button linking to the Contact page ("Get a FreeQuote").*/}
        <div className="bg-white h-150 w-screen  justify-center items-center flex flex-col gap-4"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3csvg width='97' height='188' viewBox='0 0 97 188' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect y='35.8292' width='97' height='105' fill='black'/%3e%3cpath d='M12 22.8292H9L11.9189 20.3968C11.9241 20.3925 11.929 20.3692 11.9336 20.3292H10L11.9921 17.8391C11.9935 17.669 11.9946 17.4981 11.9956 17.3292H11L12 15.8292L13 17.3292H11.9956C11.9946 17.4981 11.9935 17.669 11.9921 17.8391L12 17.8292L14 20.3292H12L15 22.8292H12Z' fill='black'/%3e%3cpath d='M12 26.3292V22.8292M12 22.8292H9L11.9189 20.3968M12 22.8292H15L12 20.3292M12 22.8292V17.8292M12 20.3292H10L12 17.8292M12 20.3292H14L12 17.8292M12 20.3292L11.9189 20.3968M11.9189 20.3968C11.9838 20.3427 12 17.3292 12 15.8292M12 15.8292L11 17.3292H13L12 15.8292Z' stroke='black'/%3e%3cpath d='M21 16.8292H18L20.9189 14.3968C20.9241 14.3925 20.929 14.3692 20.9336 14.3292H19L20.9921 11.8391C20.9935 11.669 20.9946 11.4981 20.9956 11.3292H20L21 9.8292L22 11.3292H20.9956C20.9946 11.4981 20.9935 11.669 20.9921 11.8391L21 11.8292L23 14.3292H21L24 16.8292H21Z' fill='black'/%3e%3cpath d='M21 20.3292V16.8292M21 16.8292H18L20.9189 14.3968M21 16.8292H24L21 14.3292M21 16.8292V11.8292M21 14.3292H19L21 11.8292M21 14.3292H23L21 11.8292M21 14.3292L20.9189 14.3968M20.9189 14.3968C20.9838 14.3427 21 11.3292 21 9.8292M21 9.8292L20 11.3292H22L21 9.8292Z' stroke='black'/%3e%3cpath d='M16 160.329L19 160.329L16.0811 162.762C16.0759 162.766 16.071 162.789 16.0664 162.829L18 162.829L16.0079 165.319C16.0065 165.489 16.0054 165.66 16.0044 165.829L17 165.829L16 167.329L15 165.829L16.0044 165.829C16.0054 165.66 16.0065 165.489 16.0079 165.319L16 165.329L14 162.829L16 162.829L13 160.329L16 160.329Z' fill='black'/%3e%3cpath d='M16 156.829L16 160.329M16 160.329L19 160.329L16.0811 162.762M16 160.329L13 160.329L16 162.829M16 160.329L16 165.329M16 162.829L18 162.829L16 165.329M16 162.829L14 162.829L16 165.329M16 162.829L16.0811 162.762M16.0811 162.762C16.0162 162.816 16 165.829 16 167.329M16 167.329L17 165.829L15 165.829L16 167.329Z' stroke='black'/%3e%3cpath d='M56 168.329L59 168.329L56.0811 170.762C56.0759 170.766 56.071 170.789 56.0664 170.829L58 170.829L56.0079 173.319C56.0065 173.489 56.0054 173.66 56.0044 173.829L57 173.829L56 175.329L55 173.829L56.0044 173.829C56.0054 173.66 56.0065 173.489 56.0079 173.319L56 173.329L54 170.829L56 170.829L53 168.329L56 168.329Z' fill='black'/%3e%3cpath d='M56 164.829L56 168.329M56 168.329L59 168.329L56.0811 170.762M56 168.329L53 168.329L56 170.829M56 168.329L56 173.329M56 170.829L58 170.829L56 173.329M56 170.829L54 170.829L56 173.329M56 170.829L56.0811 170.762M56.0811 170.762C56.0162 170.816 56 173.829 56 175.329M56 175.329L57 173.829L55 173.829L56 175.329Z' stroke='black'/%3e%3cpath d='M82 179.329L85 179.329L82.0811 181.762C82.0759 181.766 82.071 181.789 82.0664 181.829L84 181.829L82.0079 184.319C82.0065 184.489 82.0054 184.66 82.0044 184.829L83 184.829L82 186.329L81 184.829L82.0044 184.829C82.0054 184.66 82.0065 184.489 82.0079 184.319L82 184.329L80 181.829L82 181.829L79 179.329L82 179.329Z' fill='black'/%3e%3cpath d='M82 175.829L82 179.329M82 179.329L85 179.329L82.0811 181.762M82 179.329L79 179.329L82 181.829M82 179.329L82 184.329M82 181.829L84 181.829L82 184.329M82 181.829L80 181.829L82 184.329M82 181.829L82.0811 181.762M82.0811 181.762C82.0162 181.816 82 184.829 82 186.329M82 186.329L83 184.829L81 184.829L82 186.329Z' stroke='black'/%3e%3cpath d='M85 9.8292H82L84.9189 7.39678C84.9241 7.39245 84.929 7.36916 84.9336 7.3292H83L84.9921 4.83908C84.9935 4.66896 84.9946 4.4981 84.9956 4.3292H84L85 2.8292L86 4.3292H84.9956C84.9946 4.4981 84.9935 4.66896 84.9921 4.83908L85 4.8292L87 7.3292H85L88 9.8292H85Z' fill='black'/%3e%3cpath d='M85 13.3292V9.8292M85 9.8292H82L84.9189 7.39678M85 9.8292H88L85 7.3292M85 9.8292V4.8292M85 7.3292H83L85 4.8292M85 7.3292H87L85 4.8292M85 7.3292L84.9189 7.39678M84.9189 7.39678C84.9838 7.34272 85 4.3292 85 2.8292M85 2.8292L84 4.3292H86L85 2.8292Z' stroke='black'/%3e%3cpath d='M0.5 140.829L23 164.829L37.5 152.329L36.5 151.829L34 144.329L9.5 140.829L10 136.829L0.5 137.329V140.829Z' fill='black'/%3e%3cpath d='M0.5 140.829L23 164.829L37.5 152.329L36.5 151.829L34 144.329L9.5 140.829L10 136.829L0.5 137.329V140.829Z' fill='black' fill-opacity='0.2'/%3e%3cpath d='M0.5 140.829L23 164.829L37.5 152.329L36.5 151.829L34 144.329L9.5 140.829L10 136.829L0.5 137.329V140.829Z' stroke='black'/%3e%3cpath d='M75.5 181.829L37.5 152.829L2 139.829L14 122.329L52.5 115.329L96.5 138.329V164.329L75.5 181.829Z' fill='black' stroke='black'/%3e%3cpath d='M96.5 23.8292V37.8292L0.5 39.8292V35.3292L20.5 18.8292L31 27.3292L53.5 0.829201L69.5 24.8292L84 11.3292L96.5 23.8292Z' fill='black' stroke='black'/%3e%3c/svg%3e")`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
          <div className="text-[22px] text-white">Get a quote Today</div>
          <button className="bg-black hover:bg-amber-500 focus:bg-sun focus:border-black focus:text-black rounded-[10px] px-6 py-3 border-2 border-white text-white">
            Get Started
          </button>
        </div>

        {/* Features: Highlight 3 key benefits: Save Money, Eco-Friendly, 25-Year Warranty */}
        <div ref={featuresRef} className=" h-140 justify-center items-center flex flex-col gap-[15px]">
          <div className={`${isVisible ? "animate-slide-in-1" : "opacity-0"} w-2/3 p-3 text-center text-2xl font-bold hover:scale-110 hover:text-amber-500 transition-all duration-300 cursor-default`}>Save Money</div>
          <div className={`${isVisible ? "animate-slide-in-2" : "opacity-0"}`}>and enjoy a</div>
          <div className={`${isVisible ? "animate-slide-in-3" : "opacity-0"} w-2/3 p-3 text-center text-2xl font-bold hover:scale-110 hover:text-amber-500 transition-all duration-300 cursor-default`}>25-Year Warranty</div>
          <div className={`${isVisible ? "animate-slide-in-4" : "opacity-0"}`}>while staying</div>
          <div className={`${isVisible ? "animate-slide-in-5" : "opacity-0"} w-2/3 p-3 text-center text-2xl font-bold hover:scale-110 hover:text-amber-500 transition-all duration-300 cursor-default`}>Eco-Friendly</div>
          <div className={`${isVisible ? "animate-slide-in-6" : "opacity-0"}`}>with</div>
          <div className={`${isVisible ? "animate-slide-in-6" : "opacity-0"} font-bold text-3xl text-center hover:scale-105 transition-transform duration-300 cursor-default`}>
            <div className="text-sun">Lumina</div>
            <div>Solar</div>
            <div>Solutions</div>
          </div>
        </div>

        {/* footer image */}
        <div className="h-52 p-0 m-0 bg-cover w-screen justify-baseline items- flex flex-col gap-4"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3csvg width='98' height='53' viewBox='0 0 98 53' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M13.5 19.9014L10.5 19.9014L13.4189 17.469C13.4241 17.4647 13.429 17.4414 13.4336 17.4014L11.5 17.4014L13.4921 14.9113C13.4935 14.7412 13.4946 14.5703 13.4956 14.4014L12.5 14.4014L13.5 12.9014L14.5 14.4014L13.4956 14.4014C13.4946 14.5703 13.4935 14.7412 13.4921 14.9113L13.5 14.9014L15.5 17.4014L13.5 17.4014L16.5 19.9014L13.5 19.9014Z' fill='black'/%3e%3cpath d='M13.5 23.4014L13.5 19.9014M13.5 19.9014L10.5 19.9014L13.4189 17.469M13.5 19.9014L16.5 19.9014L13.5 17.4014M13.5 19.9014L13.5 14.9014M13.5 17.4014L11.5 17.4014L13.5 14.9014M13.5 17.4014L15.5 17.4014L13.5 14.9014M13.5 17.4014L13.4189 17.469M13.4189 17.469C13.4838 17.4149 13.5 14.4014 13.5 12.9014M13.5 12.9014L12.5 14.4014L14.5 14.4014L13.5 12.9014Z' stroke='black'/%3e%3cpath d='M60.5 7.9014L57.5 7.9014L60.4189 5.46898C60.4241 5.46465 60.429 5.44136 60.4336 5.4014L58.5 5.4014L60.4921 2.91127C60.4935 2.74116 60.4946 2.57029 60.4956 2.4014L59.5 2.4014L60.5 0.901398L61.5 2.4014L60.4956 2.4014C60.4946 2.57029 60.4935 2.74116 60.4921 2.91127L60.5 2.9014L62.5 5.4014L60.5 5.4014L63.5 7.9014L60.5 7.9014Z' fill='black'/%3e%3cpath d='M60.5 11.4014L60.5 7.9014M60.5 7.9014L57.5 7.9014L60.4189 5.46898M60.5 7.9014L63.5 7.9014L60.5 5.4014M60.5 7.9014L60.5 2.9014M60.5 5.4014L58.5 5.4014L60.5 2.9014M60.5 5.4014L62.5 5.4014L60.5 2.9014M60.5 5.4014L60.4189 5.46898M60.4189 5.46898C60.4838 5.41491 60.5 2.4014 60.5 0.901398M60.5 0.901398L59.5 2.4014L61.5 2.4014L60.5 0.901398Z' stroke='black'/%3e%3cpath d='M84.5 30.9014L81.5 30.9014L84.4189 28.469C84.4241 28.4647 84.429 28.4414 84.4336 28.4014L82.5 28.4014L84.4921 25.9113C84.4935 25.7412 84.4946 25.5703 84.4956 25.4014L83.5 25.4014L84.5 23.9014L85.5 25.4014L84.4956 25.4014C84.4946 25.5703 84.4935 25.7412 84.4921 25.9113L84.5 25.9014L86.5 28.4014L84.5 28.4014L87.5 30.9014L84.5 30.9014Z' fill='black'/%3e%3cpath d='M84.5 34.4014L84.5 30.9014M84.5 30.9014L81.5 30.9014L84.4189 28.469M84.5 30.9014L87.5 30.9014L84.5 28.4014M84.5 30.9014L84.5 25.9014M84.5 28.4014L82.5 28.4014L84.5 25.9014M84.5 28.4014L86.5 28.4014L84.5 25.9014M84.5 28.4014L84.4189 28.469M84.4189 28.469C84.4838 28.4149 84.5 25.4014 84.5 23.9014M84.5 23.9014L83.5 25.4014L85.5 25.4014L84.5 23.9014Z' stroke='black'/%3e%3cpath d='M0.5 35.4014V51.9014H97.5V31.4014L89.5 40.4014L65 5.4014L39 35.4014L17.5 19.4014L0.5 35.4014Z' fill='black' stroke='black'/%3e%3c/svg%3e")`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
        </div>

    </div>
  );
}

// #002363 blue
