"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
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
      { threshold: 0.1 },
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden">
      {/* Background SVG underlay */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none ">
        <Image
          src="/svg/about.svg"
          alt=""
          width={1920}
          height={300}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Hero Section */}
      <div
        ref={featuresRef}
        className="h-4/5 flex flex-col items-start justify-center p-4 text-[50px] font-bold leading-tight"
      >
        <div className={`${isVisible ? "animate-slide-in-1" : "opacity-0"} `}>
          About
        </div>
        <div
          className={`${isVisible ? "animate-slide-in-1" : "opacity-0"} text-sun`}
        >
          Us
        </div>
      </div>

      {/* Company Mission Section */}
      <div className="w-full flex flex-col items-center justify-center gap-6 p-8 z-10">
        <div className="w-2/3 p-6 text-center rounded-md shadow-md bg-white">
          <h2 className="text-2xl font-bold text-sun mb-2">Our Mission</h2>
          <p>
            Founded in 2023, Lumina aims to make renewable energy accessible to
            every household in the city.
          </p>
        </div>

        {/* Optional: Team Section Placeholder */}
        <div className="w-2/3 p-6 text-center  rounded-md shadow-md bg-white">
          <h2 className="text-2xl font-bold text-sun mb-2">Meet the Team</h2>
          <p>Team members will be displayed here soon.</p>
        </div>
      </div>

      {/* Footer with Horizon SVG */}
      <div className="relative w-full mt-auto overflow-hidden">
        <svg
          viewBox="0 0 97 36"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="xMidYMax meet"
        >
          <path
            d="M12 7.9014L9 7.9014L11.9189 5.46898C11.9241 5.46465 11.929 5.44136 11.9336 5.4014L10 5.4014L11.9921 2.91127C11.9935 2.74116 11.9946 2.57029 11.9956 2.4014L11 2.4014L12 0.901398L13 2.4014L11.9956 2.4014C11.9946 2.57029 11.9935 2.74116 11.9921 2.91127L12 2.9014L14 5.4014L12 5.4014L15 7.9014L12 7.9014Z"
            fill="black"
          />
          <path
            d="M12 11.4014L12 7.9014M12 7.9014L9 7.9014L11.9189 5.46898M12 7.9014L15 7.9014L12 5.4014M12 7.9014L12 2.9014M12 5.4014L10 5.4014L12 2.9014M12 5.4014L14 5.4014L12 2.9014M12 5.4014L11.9189 5.46898M11.9189 5.46898C11.9838 5.41491 12 2.4014 12 0.901398M12 0.901398L11 2.4014L13 2.4014L12 0.901398Z"
            stroke="black"
          />
          <path
            d="M65 10.9014L62 10.9014L64.9189 8.46898C64.9241 8.46465 64.929 8.44136 64.9336 8.4014L63 8.4014L64.9921 5.91127C64.9935 5.74116 64.9946 5.57029 64.9956 5.4014L64 5.4014L65 3.9014L66 5.4014L64.9956 5.4014C64.9946 5.57029 64.9935 5.74116 64.9921 5.91127L65 5.9014L67 8.4014L65 8.4014L68 10.9014L65 10.9014Z"
            fill="black"
          />
          <path
            d="M65 14.4014L65 10.9014M65 10.9014L62 10.9014L64.9189 8.46898M65 10.9014L68 10.9014L65 8.4014M65 10.9014L65 5.9014M65 8.4014L63 8.4014L65 5.9014M65 8.4014L67 8.4014L65 5.9014M65 8.4014L64.9189 8.46898M64.9189 8.46898C64.9838 8.41491 65 5.4014 65 3.9014M65 3.9014L64 5.4014L66 5.4014L65 3.9014Z"
            stroke="black"
          />
          <path
            d="M96.5 35.4014H0.5V21.4014L14 9.9014L28.5 15.6514L40.5 6.9014L45.5 9.9014L48.5 8.4014L62 15.9014L82 5.4014L96.5 14.9014V21.4014V35.4014Z"
            fill="black"
          />
          <path
            d="M96.5 21.4014V35.4014H0.5V21.4014M96.5 21.4014H43M96.5 21.4014V14.9014L82 5.4014L62 15.9014L48.5 8.4014L45.5 9.9014L40.5 6.9014L28.5 15.6514M0.5 21.4014L14 9.9014L28.5 15.6514M0.5 21.4014H43M43 21.4014L28.5 15.6514"
            stroke="black"
          />
        </svg>
      </div>
    </div>
  );
}
