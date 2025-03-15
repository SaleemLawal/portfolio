import { Github, Linkedin, Send } from "lucide-react";
import { Calistoga } from "next/font/google";
import Link from "next/link";
import React from "react";
import TypingAnimation from "./Name";

const calistoga = Calistoga({
  weight: "400",
  subsets: ["latin"]
});

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center flex-col p-8 space-y-4 pb-0">
      <div
        className="blur-3xl spin-animation w-full h-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-75 md:w-[70%] lg:w-[50%]"
        style={{
          backgroundImage: `linear-gradient(to right top, rgb(94, 22, 63), rgb(101,
                                35, 85), rgb(103, 49, 109), rgb(100, 64, 133), rgb(90, 80, 157), rgb(79,
                                102, 182), rgb(58, 124, 205), rgb(0, 146, 225), rgb(0, 179, 242), rgb(0,
                                208, 230), rgb(0, 232, 193), rgb(95, 251, 142))`,
        }}
      />
      <div className="md:w-[70%] lg:w-[50%] flex items-center justify-center flex-col p-4 space-y-4">
        <h1
          className={`text-5xl uppercase ${calistoga.className} md:text-6xl lg:text-7xl text-center`}
        >
          <TypingAnimation />
        </h1>
        <p className="text-center md:text-xl">
          Hi, I&apos;m a Software Engineer. I love creating impactful solutions and
          constantly learning through technology
        </p>
        <div className="flex space-x-3">
          <div className="p-2 border inline-block rounded-full hover:scale-110 transition duration-200">
            <Link
              href="https://www.linkedin.com/in/saleem-lawal-146783260/"
              className="cursor-none "
              target="_blank"
            >
              <Linkedin />
            </Link>
          </div>
          <div className="p-2 border inline-block rounded-full hover:scale-110 transition duration-200">
            <Link
              href="https://github.com/saleemlawal/"
              target="_blank"
              className="cursor-none"
            >
              <Github />
            </Link>
          </div>
          <div className="p-2 border inline-block rounded-full hover:scale-110 transition duration-200">
            <div className="flex space-x-2">
              <Send />
              <p>Contact Me</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
