"use client";
import React from "react";
import SkillsCard from "./SkillsCard";
import { motion } from "framer-motion";
import Image from "next/image";

export type displayElement = {
  name: string;
  icon: React.JSX.Element;
};

export default function Skills() {
  const skills: displayElement[] = [
    {
      name: "C++",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
            height={24}
            width={24}
            alt="C++ icon"
          />
        </div>
      ),
    },
    {
      name: "Python",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            height={24}
            width={24}
            alt="Python icon"
          />
        </div>
      ),
    },
    {
      name: "Java",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            height={24}
            width={24}
            alt="Java icon"
          />
        </div>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            height={24}
            width={24}
            alt="TypeScript icon"
          />
        </div>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            height={24}
            width={24}
            alt="JavaScript icon"
          />
        </div>
      ),
    },
    {
      name: "HTML/CSS",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            height={24}
            width={24}
            alt="HTML/CSS icon"
          />
        </div>
      ),
    },
  ];

  const tools: displayElement[] = [
    {
      name: "NextJS",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            height={24}
            width={24}
            alt="NextJS icon"
          />
        </div>
      ),
    },
    {
      name: "Spring Boot",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
            height={24}
            width={24}
            alt="Spring Boot icon"
          />
        </div>
      ),
    },
    {
      name: "React",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            height={24}
            width={24}
            alt="React icon"
          />
        </div>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            height={24}
            width={24}
            alt="Node.js icon"
          />
        </div>
      ),
    },
    {
      name: "Express.js",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
            height={24}
            width={24}
            alt="Express.js icon"
          />
        </div>
      ),
    },
    {
      name: "Tailwind",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            height={24}
            width={24}
            alt="Tailwind icon"
          />
        </div>
      ),
    },
    {
      name: "Django",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
            height={24}
            width={24}
            alt="Django icon"
          />
        </div>
      ),
    },
    {
      name: "Flask",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg"
            height={24}
            width={24}
            alt="Flask icon"
          />
        </div>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
            height={24}
            width={24}
            alt="MongoDB icon"
          />
        </div>
      ),
    },
    {
      name: "PostgreSQL",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
            height={24}
            width={24}
            alt="PostgreSQL icon"
          />
        </div>
      ),
    },
    {
      name: "Supabase",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original-wordmark.svg"
            height={24}
            width={24}
            alt="Supabase icon"
          />
        </div>
      ),
    },
    {
      name: "firebase",
      icon: (
        <div className="p-2 bg-[#e0e0e0] rounded-full inline-flex border-gray-700 border-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg"
            height={24}
            width={24}
            alt="Firebase icon"
          />
        </div>
      ),
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-between p-8 gap-12 pt-10 overflow-hidden">
      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h2 className="font-bold text-3xl">Technical Skills</h2>
          <p className="text-gray-400">
            I work with various programming languages to develop effective and
            efficient solutions. Below are the technologies I frequently use.
          </p>
        </motion.div>

        <SkillsCard skills={skills} />
      </div>

      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h2 className="font-bold text-3xl">Technologies</h2>
          <p className="text-gray-400">
            I use various modern technologies to create efficient solutions.
            Here are some tools I work with.
          </p>
        </motion.div>
        <SkillsCard skills={tools} />
      </div>
    </section>
  );
}
