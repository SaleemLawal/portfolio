"use client";
import React from "react";
import { motion } from "framer-motion";
import TimeLine from "./Timeline";

export default function Experiences() {
  return (
    <section className="min-h-screen flex flex-col sm:flex-row items-center justify-center p-8 gap-12 pb-0 overflow-hidden">
      <motion.div
        className="sm:flex-1 space-y-6 text-lg leading-relaxed text-gray-300 max-w-2xl"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <p className="tracking-widest font-medium leading-loose">
          I'm an incoming Software Engineer at Bloomberg and a recent UMBC
          graduate with a B.Sc. in Computer Science. I specialize in backend
          development and system design, focusing on building high-performance,
          scalable, and security-driven solutions. My experience spans financial
          systems, AI-driven applications, cloud infrastructure, and
          cybersecurity. I enjoy optimizing systems, diving into distributed
          computing, and solving complex problems that drive real-world impact.
        </p>
        {/* <p>
          Outside of coding, I'm passionate about football, weightlifting, and
          exploring emerging technologies. I enjoy reading self-improvement and
          finance books, with a strong interest in quant finance, algorithmic
          trading, and long-term investing. I believe in continuous
          growth—whether it's sharpening my technical skills, strengthening my
          mindset, or embracing new challenges. I'm always looking for
          opportunities to build, innovate, and contribute to impactful
          projects.
        </p> */}
      </motion.div>

      <motion.div
        className="sm:flex-1 w-full"
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: false }}
      >
        <TimeLine />
      </motion.div>
    </section>
  );
}
