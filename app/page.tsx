"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  const desktopFeaturesRef = useRef<HTMLDivElement>(null);

  const underlineBase =
    "relative " +
    // TOP LINE
    "after:content-[''] after:absolute after:left-0 after:-bottom-[0.6vh] " +
    "after:h-[6px] after:w-full after:bg-sun " +
    "after:origin-left after:scale-x-0 " +
    "after:transition-transform after:duration-700 " +
    "after:ease-[cubic-bezier(.34,1.56,.64,1)] " +
    // BOTTOM LINE
    "before:content-[''] before:absolute before:left-0 before:-bottom-[1.2vh] " +
    "before:h-[2px] before:w-full before:bg-sun/70 " +
    "before:origin-left before:scale-x-0 " +
    "before:transition-transform before:duration-700 " +
    "before:ease-[cubic-bezier(.34,1.56,.64,1)]";

  const underlineActive = "after:scale-x-100 before:scale-x-100";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // optional but recommended
        }
      },
      { threshold: 0.3 },
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    if (desktopFeaturesRef.current) {
      observer.observe(desktopFeaturesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col p-0 m-0 overflow-hidden sm:overflow-auto">
      {/* Background SVG underlay */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none sm:hidden">
        <Image
          src="/svg/solarpanels.svg"
          alt=""
          width={1920}
          height={300}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none hidden sm:block">
        <Image
          src="/svg/solarpanelsBig.svg"
          alt=""
          width={1920}
          height={300}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="w-full h-full p-0 m-0 sm:hidden">
        {/* Hero Section: Needs a catchy headline (e.g., "Power Your Home with the Sun"). */}
        <div
          className="h-4/5 text-wrap text-[60px] font-bold leading-tight p-4 bg-center bg-no-repeat flex flex-col items-start justify-start"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='97' height='163' viewBox='0 0 97 163' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='97' height='163' fill='white'/%3e%3ccircle cx='75' cy='39' r='11' fill='%23FFA600'/%3e%3c/svg%3e")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="animate-slide-in-1 text-[50px] text-black ">
            Power
          </div>
          <div className="animate-slide-in-2 text-[50px] text-black ">Your</div>
          <div className="animate-slide-in-3 text-[50px] text-black ">Home</div>
          <div className="animate-slide-in-4 text-[50px] text-black">with</div>
          <div className="animate-slide-in-5 text-[50px] text-black ">the</div>
          <div className="animate-slide-in-6 text-[70px] text-sun">Sun</div>
        </div>

        {/* Call to Action (CTA): A button linking to the Contact page ("Get a FreeQuote").*/}
        <div className="w-screen flex justify-center">
          <div className="relative w-full max-w-[600px]">
            {/* Responsive SVG container */}
            <svg
              viewBox="0 0 97 147"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect y="35.8292" width="97" height="63" fill="black" />
              <path
                d="M12 22.8292H9L11.9189 20.3968C11.9241 20.3925 11.929 20.3692 11.9336 20.3292H10L11.9921 17.8391C11.9935 17.669 11.9946 17.4981 11.9956 17.3292H11L12 15.8292L13 17.3292H11.9956C11.9946 17.4981 11.9935 17.669 11.9921 17.8391L12 17.8292L14 20.3292H12L15 22.8292H12Z"
                fill="black"
              />
              <path
                d="M12 26.3292V22.8292M12 22.8292H9L11.9189 20.3968M12 22.8292H15L12 20.3292M12 22.8292V17.8292M12 20.3292H10L12 17.8292M12 20.3292H14L12 17.8292M12 20.3292L11.9189 20.3968M11.9189 20.3968C11.9838 20.3427 12 17.3292 12 15.8292M12 15.8292L11 17.3292H13L12 15.8292Z"
                stroke="black"
              />
              <path
                d="M21 16.8292H18L20.9189 14.3968C20.9241 14.3925 20.929 14.3692 20.9336 14.3292H19L20.9921 11.8391C20.9935 11.669 20.9946 11.4981 20.9956 11.3292H20L21 9.8292L22 11.3292H20.9956C20.9946 11.4981 20.9935 11.669 20.9921 11.8391L21 11.8292L23 14.3292H21L24 16.8292H21Z"
                fill="black"
              />
              <path
                d="M21 20.3292V16.8292M21 16.8292H18L20.9189 14.3968M21 16.8292H24L21 14.3292M21 16.8292V11.8292M21 14.3292H19L21 11.8292M21 14.3292H23L21 11.8292M21 14.3292L20.9189 14.3968M20.9189 14.3968C20.9838 14.3427 21 11.3292 21 9.8292M21 9.8292L20 11.3292H22L21 9.8292Z"
                stroke="black"
              />
              <path
                d="M16.5 119.829L19.5 119.829L16.5811 122.262C16.5759 122.266 16.571 122.289 16.5664 122.329L18.5 122.329L16.5079 124.819C16.5065 124.989 16.5054 125.16 16.5044 125.329L17.5 125.329L16.5 126.829L15.5 125.329L16.5044 125.329C16.5054 125.16 16.5065 124.989 16.5079 124.819L16.5 124.829L14.5 122.329L16.5 122.329L13.5 119.829L16.5 119.829Z"
                fill="black"
              />
              <path
                d="M16.5 116.329L16.5 119.829M16.5 119.829L19.5 119.829L16.5811 122.262M16.5 119.829L13.5 119.829L16.5 122.329M16.5 119.829L16.5 124.829M16.5 122.329L18.5 122.329L16.5 124.829M16.5 122.329L14.5 122.329L16.5 124.829M16.5 122.329L16.5811 122.262M16.5811 122.262C16.5162 122.316 16.5 125.329 16.5 126.829M16.5 126.829L17.5 125.329L15.5 125.329L16.5 126.829Z"
                stroke="black"
              />
              <path
                d="M56.5 127.829L59.5 127.829L56.5811 130.262C56.5759 130.266 56.571 130.289 56.5664 130.329L58.5 130.329L56.5079 132.819C56.5065 132.989 56.5054 133.16 56.5044 133.329L57.5 133.329L56.5 134.829L55.5 133.329L56.5044 133.329C56.5054 133.16 56.5065 132.989 56.5079 132.819L56.5 132.829L54.5 130.329L56.5 130.329L53.5 127.829L56.5 127.829Z"
                fill="black"
              />
              <path
                d="M56.5 124.329L56.5 127.829M56.5 127.829L59.5 127.829L56.5811 130.262M56.5 127.829L53.5 127.829L56.5 130.329M56.5 127.829L56.5 132.829M56.5 130.329L58.5 130.329L56.5 132.829M56.5 130.329L54.5 130.329L56.5 132.829M56.5 130.329L56.5811 130.262M56.5811 130.262C56.5162 130.316 56.5 133.329 56.5 134.829M56.5 134.829L57.5 133.329L55.5 133.329L56.5 134.829Z"
                stroke="black"
              />
              <path
                d="M82.5 138.829L85.5 138.829L82.5811 141.262C82.5759 141.266 82.571 141.289 82.5664 141.329L84.5 141.329L82.5079 143.819C82.5065 143.989 82.5054 144.16 82.5044 144.329L83.5 144.329L82.5 145.829L81.5 144.329L82.5044 144.329C82.5054 144.16 82.5065 143.989 82.5079 143.819L82.5 143.829L80.5 141.329L82.5 141.329L79.5 138.829L82.5 138.829Z"
                fill="black"
              />
              <path
                d="M82.5 135.329L82.5 138.829M82.5 138.829L85.5 138.829L82.5811 141.262M82.5 138.829L79.5 138.829L82.5 141.329M82.5 138.829L82.5 143.829M82.5 141.329L84.5 141.329L82.5 143.829M82.5 141.329L80.5 141.329L82.5 143.829M82.5 141.329L82.5811 141.262M82.5811 141.262C82.5162 141.316 82.5 144.329 82.5 145.829M82.5 145.829L83.5 144.329L81.5 144.329L82.5 145.829Z"
                stroke="black"
              />
              <path
                d="M85 9.8292H82L84.9189 7.39678C84.9241 7.39245 84.929 7.36916 84.9336 7.3292H83L84.9921 4.83908C84.9935 4.66896 84.9946 4.4981 84.9956 4.3292H84L85 2.8292L86 4.3292H84.9956C84.9946 4.4981 84.9935 4.66896 84.9921 4.83908L85 4.8292L87 7.3292H85L88 9.8292H85Z"
                fill="black"
              />
              <path
                d="M85 13.3292V9.8292M85 9.8292H82L84.9189 7.39678M85 9.8292H88L85 7.3292M85 9.8292V4.8292M85 7.3292H83L85 4.8292M85 7.3292H87L85 4.8292M85 7.3292L84.9189 7.39678M84.9189 7.39678C84.9838 7.34272 85 4.3292 85 2.8292M85 2.8292L84 4.3292H86L85 2.8292Z"
                stroke="black"
              />
              <path
                d="M1 100.329L23.5 124.329L38 111.829L37 111.329L34.5 103.829L10 100.329L10.5 96.3292L1 96.8292V100.329Z"
                fill="black"
              />
              <path
                d="M1 100.329L23.5 124.329L38 111.829L37 111.329L34.5 103.829L10 100.329L10.5 96.3292L1 96.8292V100.329Z"
                fill="black"
                fillOpacity="0.2"
              />
              <path
                d="M1 100.329L23.5 124.329L38 111.829L37 111.329L34.5 103.829L10 100.329L10.5 96.3292L1 96.8292V100.329Z"
                stroke="black"
              />
              <path
                d="M75.5 141.329L37.5 112.329L2 99.3292L14 81.8292L52.5 74.8292L96.5 97.8292V123.829L75.5 141.329Z"
                fill="black"
                stroke="black"
              />
              <path
                d="M96.5 23.8292V37.8292L0.5 39.8292V35.3292L20.5 18.8292L31 27.3292L53.5 0.829201L69.5 24.8292L84 11.3292L96.5 23.8292Z"
                fill="black"
                stroke="black"
              />
              <path
                d="M22 121.829L0.5 100.329V94.3292L26 100.329L22.5 121.829"
                stroke="black"
              />

              <foreignObject x="0" y="50" width="97" height="50">
                <div className="flex flex-col items-center justify-center w-full h-full gap-1">
                  <div className="text-[6px] md:text-[22px] text-white text-center">
                    Get a quote Today
                  </div>
                  <button className="text-white bg-black hover:bg-amber-500 focus:bg-sun focus:border-black focus:text-black rounded-xs  md:rounded-[10px] px-1  py-1 border border-white text-[6px] md:text-white">
                    Get Started
                  </button>
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>

        {/* Features: Highlight 3 key benefits: Save Money, Eco-Friendly, 25-Year Warranty */}
        <div
          ref={featuresRef}
          className=" h-140 justify-center items-center flex flex-col gap-[15px]"
        >
          <div
            className={`${isVisible ? "animate-slide-in-1" : "opacity-0"} w-2/3 p-3 text-center text-2xl font-bold text-sun `}
          >
            Save Money
          </div>
          <div
            className={`${isVisible ? "animate-slide-in-2" : "opacity-0"} text-xl`}
          >
            and enjoy a
          </div>
          <div
            className={`${isVisible ? "animate-slide-in-3" : "opacity-0"} w-2/3 p-3 text-center text-2xl font-bold text-sun`}
          >
            25-Year Warranty
          </div>
          <div
            className={`${isVisible ? "animate-slide-in-4" : "opacity-0"} text-xl`}
          >
            while staying
          </div>
          <div
            className={`${isVisible ? "animate-slide-in-5" : "opacity-0"} w-2/3 p-3 text-center text-2xl font-bold text-sun`}
          >
            Eco-Friendly
          </div>
          <div
            className={`${isVisible ? "animate-slide-in-6" : "opacity-0"} text-xl`}
          >
            with
          </div>
          <div
            className={`${isVisible ? "animate-slide-in-6" : "opacity-0"} font-bold text-3xl text-center`}
          >
            <div className="text-sun">Lumina</div>
            <div>Solar</div>
            <div>Solutions</div>
          </div>
        </div>

        {/* footer image */}
        <div className="relative w-full aspect-[98/51.9] overflow-hidden p-0 m-0">
          <svg
            viewBox="0 0 98 51.9"
            className="absolute inset-0 w-full h-full block"
            preserveAspectRatio="xMidYMax slice"
          >
            <path
              d="M13.5 19.9014L10.5 19.9014L13.4189 17.469C13.4241 17.4647 13.429 17.4414 13.4336 17.4014L11.5 17.4014L13.4921 14.9113C13.4935 14.7412 13.4946 14.5703 13.4956 14.4014L12.5 14.4014L13.5 12.9014L14.5 14.4014L13.4956 14.4014C13.4946 14.5703 13.4935 14.7412 13.4921 14.9113L13.5 14.9014L15.5 17.4014L13.5 17.4014L16.5 19.9014L13.5 19.9014Z"
              fill="black"
            />
            <path
              d="M13.5 23.4014L13.5 19.9014M13.5 19.9014L10.5 19.9014L13.4189 17.469M13.5 19.9014L16.5 19.9014L13.5 17.4014M13.5 19.9014L13.5 14.9014M13.5 17.4014L11.5 17.4014L13.5 14.9014M13.5 17.4014L15.5 17.4014L13.5 14.9014M13.5 17.4014L13.4189 17.469M13.4189 17.469C13.4838 17.4149 13.5 14.4014 13.5 12.9014M13.5 12.9014L12.5 14.4014L14.5 14.4014L13.5 12.9014Z"
              stroke="black"
            />
            <path
              d="M60.5 7.9014L57.5 7.9014L60.4189 5.46898C60.4241 5.46465 60.429 5.44136 60.4336 5.4014L58.5 5.4014L60.4921 2.91127C60.4935 2.74116 60.4946 2.57029 60.4956 2.4014L59.5 2.4014L60.5 0.901398L61.5 2.4014L60.4956 2.4014C60.4946 2.57029 60.4935 2.74116 60.4921 2.91127L60.5 2.9014L62.5 5.4014L60.5 5.4014L63.5 7.9014L60.5 7.9014Z"
              fill="black"
            />
            <path
              d="M60.5 11.4014L60.5 7.9014M60.5 7.9014L57.5 7.9014L60.4189 5.46898M60.5 7.9014L63.5 7.9014L60.5 5.4014M60.5 7.9014L60.5 2.9014M60.5 5.4014L58.5 5.4014L60.5 2.9014M60.5 5.4014L62.5 5.4014L60.5 2.9014M60.5 5.4014L60.4189 5.46898M60.4189 5.46898C60.4838 5.41491 60.5 2.4014 60.5 0.901398M60.5 0.901398L59.5 2.4014L61.5 2.4014L60.5 0.901398Z"
              stroke="black"
            />
            <path
              d="M84.5 30.9014L81.5 30.9014L84.4189 28.469C84.4241 28.4647 84.429 28.4414 84.4336 28.4014L82.5 28.4014L84.4921 25.9113C84.4935 25.7412 84.4946 25.5703 84.4956 25.4014L83.5 25.4014L84.5 23.9014L85.5 25.4014L84.4956 25.4014C84.4946 25.5703 84.4935 25.7412 84.4921 25.9113L84.5 25.9014L86.5 28.4014L84.5 28.4014L87.5 30.9014L84.5 30.9014Z"
              fill="black"
            />
            <path
              d="M84.5 34.4014L84.5 30.9014M84.5 30.9014L81.5 30.9014L84.4189 28.469M84.5 30.9014L87.5 30.9014L84.5 28.4014M84.5 30.9014L84.5 25.9014M84.5 28.4014L82.5 28.4014L84.5 25.9014M84.5 28.4014L86.5 28.4014L84.5 25.9014M84.5 28.4014L84.4189 28.469M84.4189 28.469C84.4838 28.4149 84.5 25.4014 84.5 23.9014M84.5 23.9014L83.5 25.4014L85.5 25.4014L84.5 23.9014Z"
              stroke="black"
            />
            <path
              d="M0.5 35.4014V51.9014H97.5V31.4014L89.5 40.4014L65 5.4014L39 35.4014L17.5 19.4014L0.5 35.4014Z"
              fill="black"
              stroke="black"
            />
          </svg>
        </div>
      </div>
      <div className="w-full h-full p-0 m-0 z-10  hidden sm:block">
        {/* hero section */}
        <div className="h-[75vh] flex flex-col justify-center items-center gap-0">
          {/* First row: baseline-aligned so bottoms line up */}
          <div className="flex flex-row space-x-7 items-baseline">
            <div className="animate-slide-in-1 text-[15vh] leading-none">
              POWER
            </div>
            <div className="animate-slide-in-2 text-[8vh] leading-none -mt-[0.1em]">
              YOUR
            </div>
            <div className="animate-slide-in-3 text-[15vh] leading-none">
              HOME
            </div>
          </div>

          {/* Second row: baseline-aligned from top so tops line up */}
          <div className="flex flex-row space-x-7 items-start">
            <div className="animate-slide-in-4 text-[8vh] leading-none mt-[0.2em]">
              WITH
            </div>
            <div className=" animate-slide-in-4 text-[8vh] leading-none mt-[0.2em]">
              THE
            </div>
            <div className="animate-slide-in-6 text-[20vh] leading-none text-sun">
              SUN
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative min-h-[60vh] overflow-hidden">
          {/* Background: HomeBigCTA */}
          <div className="absolute inset-0 bg-[url('/svg/HomeBigCTA.svg')] bg-cover bg-center bg-no-repeat z-10 " />

          {/* Underlay Sun SVG */}
          {/* <div
            className="
    absolute top-0 left-1/2
    -translate-x-1/2
    w-[120%]
    h-[35vh] lg:h-[40vh]
    bg-[url('/svg/sun.svg')]
    bg-no-repeat
    bg-top
    bg-contain
    z-0
    pointer-events-none
  "
          /> */}

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center items-center gap-10 min-h-[60vh] text-center">
            <div className="text-[6vw] md:text-[4vh] text-white ">
              Get a quote Today
            </div>

            <button className=" text-white bg-black hover:bg-amber-500 hover:text-black focus:bg-sun focus:text-black border-[0.3vh] border-white hover:border-black rounded-xs md:rounded-[1vh] px-10 py-3 text-[3vh] ">
              Get Started
            </button>
          </div>
        </div>

        {/* features */}
        <div className="h-[80vh] flex flex-col justify-center items-center">
          <div className="w-full h-1/2 flex flex-row justify-center items-center space-x-[5vh]">
            <div
              ref={desktopFeaturesRef}
              className=" px-4 bg-white shadow-2xl rounded-[2vh] h-[30vh] w-[28vw] flex justify-center items-start py-[2vh] "
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`text-[6vh] text-sun
        ${underlineBase}
        ${isVisible ? underlineActive : ""}
      `}
                >
                  Save Money
                </div>

                <p
                  className={` mt-[2vh] text-[2.2vh] text-gray-600 max-w-[85%] leading-relaxed transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                >
                  Lower bills, brighter days — your wallet will thank you.
                </p>
                <button
                  className={`w-[8vw] h-[5vh] my-[2vh] text-[2vh] text-gray-600 hover:bg-sun focus:bg-sun border-[0.4vh] border-gray-600 hover:border-sun rounded-[1vh]
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                >
                  Learn More
                </button>
              </div>
            </div>

            <div
              ref={desktopFeaturesRef}
              className=" px-4 bg-white shadow-2xl rounded-[2vh] h-[30vh] w-[28vw] flex justify-center items-start py-[2vh]"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`text-[6vh] text-sun
        ${underlineBase}
        ${isVisible ? underlineActive : ""}
      `}
                >
                  25-Year Warranty
                </div>
                <p
                  className={`mt-[2vh] text-[2.2vh] text-gray-600 max-w-[85%] leading-relaxed transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                >
                  Peace of mind, backed by decades of sunshine.
                </p>
                <button
                  className={`w-[8vw] h-[5vh] my-[2vh] text-[2vh] text-gray-600 hover:bg-sun focus:bg-sun border-[0.4vh] border-gray-600 hover:border-sun rounded-[1vh]
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                >
                  Learn More
                </button>
              </div>
            </div>

            <div
              ref={desktopFeaturesRef}
              className="
                px-4 bg-white shadow-2xl rounded-[2vh] h-[30vh] w-[28vw] flex justify-center items-start py-[2vh] "
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`text-[6vh] text-sun
        ${underlineBase}
        ${isVisible ? underlineActive : ""}
      `}
                >
                  Eco-Friendly
                </div>

                <p
                  className={`mt-[2vh] text-[2.2vh] text-gray-600 max-w-[85%] leading-relaxed transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                >
                  Clean energy today, a greener tomorrow.
                </p>
                <button
                  className={`w-[8vw] h-[5vh] my-[2vh] text-[2vh] text-gray-600 hover:bg-sun focus:bg-sun border-[0.4vh] border-gray-600 hover:border-sun rounded-[1vh]
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="relative h-[30vh] w-full">
          <div className=" absolute bottom-0 left-0 w-full h-[25vh] md:h-[25vh] lg:h-[25vh] bg-[url('/svg/BigFooterImage.svg')] bg-no-repeat bg-bottom bg-cover pointer-events-none " />
        </div>
      </div>
    </div>
  );
}
