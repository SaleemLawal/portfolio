import React from "react";
import { type displayElement } from "./Skills";
import { motion } from "framer-motion";

export default function SkillsCard({ skills }: { skills: displayElement[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: false }}
    >
      {skills.map((elem, idx) => (
        <motion.div
          className="bg-[#171717] hover:bg-[#232323] rounded-sm p-4 flex items-center gap-4 border-2 border-[#171717] hover:border-[#333] hover:animate-pulse"
          key={idx}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: idx * 0.1 } }
          }}
        >
          {elem.icon}
          {elem.name}
        </motion.div>
      ))}
    </motion.div>
  );
}
