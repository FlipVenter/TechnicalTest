"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  const deskHeroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => observer.disconnect();
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (formData.phone.length < 10)
      newErrors.phone = "Invalid phone number";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden">
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
          src="/svg/smallerBigBackground.svg"
          alt=""
          width={1920}
          height={300}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="flex flex-col flex-1 w-full p-0 m-0 sm:hidden">
        <div
          ref={featuresRef}
          className="h-4/5 flex flex-col items-start justify-center p-4 text-[50px] font-bold leading-tight z-10"
        >
          <div className={`${isVisible ? "animate-slide-in-1" : "opacity-0"}`}>
            Contact
          </div>
          <div
            className={`${isVisible ? "animate-slide-in-1" : "opacity-0"} text-sun`}
          >
            Us
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full flex flex-col items-center justify-center gap-6 p-8 z-10 ">
          <div className="w-11/12 p-6 text-center rounded-md shadow-md bg-white z-10">
            <h2 className="text-2xl font-bold text-sun mb-4">Get in Touch</h2>
            {submitted && (
              <div className="mb-4 p-2  text-green-900 rounded">
                Your message has been sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded border border-gray-400 focus:outline-none focus:border-sun"
              />
              {errors.name && (
                <span className="text-red-600 text-[5vh]">{errors.name}</span>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded border border-gray-400 focus:outline-none focus:border-sun"
              />
              {errors.email && (
                <span className="text-red-600 text-[5vh]">{errors.email}</span>
              )}

              <input
                type="number"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number"
                className="p-3 rounded border border-gray-400 focus:outline-none focus:border-sun"
              />
              {errors.phone && (
                <span className="text-red-600 text-[5vh]">{errors.phone}</span>
              )}

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 rounded border border-gray-400 focus:outline-none focus:border-sun resize-none"
                rows={4}
              />
              {errors.message && (
                <span className="text-red-600 text-[5vh]">
                  {errors.message}
                </span>
              )}

              <button
                type="submit"
                className="bg-black text-white hover:bg-amber-500 px-6 py-3 rounded-lg font-bold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Address Section */}
          <div className="w-11/12 p-6 text-center  rounded-md shadow-md z-10 bg-white">
            <h2 className="text-2xl font-bold text-sun mb-2">Our Office</h2>
            <p>123 Sunshine Blvd, Tech City</p>
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

      {/* desktop view */}
      <div className="hidden sm:block h-full w-full">
        {/* hero section */}
        <div
          ref={deskHeroRef}
          className="h-[20vh] flex flex-row gap-[2vh] items-center justify-center p-4 text-[8vh] font-bold leading-tight z-10 "
        >
          <div
            className={`${isVisible ? "animate-slide-in-1" : "opacity-0"}  `}
          >
            Contact
          </div>
          <div
            className={`${isVisible ? "animate-slide-in-2" : "opacity-0"}   text-sun`}
          >
            Us
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="min-h-[65vh] max-h-[95vh] w-full flex flex-col items-center justify-center gap-[3vh] p-8 z-10 bg-green-500">
          <div className="min-h-[65vh] max-h-[85vh] overflow-hidden w-3/5 py-[5vh] px-[4vh] text-center rounded-[2vh] shadow-md bg-white z-10">
            {submitted && (
              <div className="mb-4 p-2  text-green-900 rounded">
                Your message has been sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-[3vh]">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="px-[1vh] py-[1vh] rounded-[1vh] border border-gray-400 focus:outline-none h-[5vh] text-[2vh] focus:border-sun"
              />
              {errors.name && (
                <span className="text-red-600 text-[1.5vh]">{errors.name}</span>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="px-[1vh] py-[1vh] rounded-[1vh] border border-gray-400 focus:outline-none h-[5vh] text-[2vh] focus:border-sun"
              />
              {errors.email && (
                <span className="text-red-600 text-[1.5vh]">
                  {errors.email}
                </span>
              )}

              <input
                type="number"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number"
                className="px-[1vh] py-[1vh] rounded-[1vh] border border-gray-400 focus:outline-none text-[2vh] h-[5vh] focus:border-sun"
              />
              {errors.phone && (
                <span className="text-red-600 text-[1.5vh]">
                  {errors.phone}
                </span>
              )}

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="px-[1vh] py-[1vh] rounded-[1vh] border border-gray-400 focus:outline-none text-[2vh] h-[17vh] focus:border-sun"
                rows={4}
              />
              {errors.message && (
                <span className="text-red-600 text-[1.5vh]">
                  {errors.message}
                </span>
              )}

              <button
                type="submit"
                className="bg-black text-white hover:bg-amber-500 px-6 py-3 text-[2vh] rounded-[1vh] h-[5vh] font-bold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Address Section */}
          <div className="h-[10vh] w-3/5 p-6 text-center  rounded-[2vh] shadow-md z-10 bg-white">
            <h2 className="text-[3vh] font-bold text-sun mb-2">Our Office</h2>
            <p className="text-[2vh]">123 Sunshine Blvd, Tech City</p>
          </div>
        </div>

        {/* footer */}
        <div className="relative h-[30vh] w-full">
          <div
            className="
      absolute bottom-0 left-0 w-full
      h-[25vh] md:h-[25vh] lg:h-[25vh]
      bg-[url('/svg/BigFooterImage.svg')]
      bg-no-repeat
      bg-bottom
      bg-cover
      pointer-events-none
    "
          />
        </div>
      </div>
    </div>
  );
}
