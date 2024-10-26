"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaReact, FaVuejs, FaHtml5, FaSass } from "react-icons/fa";
import {
  SiNextdotjs,
  SiVercel,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiFramer
} from "react-icons/si";

const technologies = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "React", icon: FaReact, color: "text-blue-500" },
  { name: "Vue.js", icon: FaVuejs, color: "text-green-500" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
  { name: "SCSS", icon: FaSass, color: "text-pink-500" },
  { name: "Framer Motion", icon: SiFramer, color: "text-purple-500" }
];

const BackgroundText = ({ text }: { text: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setPosition({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0],
        x: position.x,
        y: position.y
      }}
      transition={{
        duration: Math.random() * 10 + 5,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="absolute text-gray-800 text-opacity-20 pointer-events-none"
      style={{
        fontSize: `${Math.random() * 20 + 10}px`,
        transform: `rotate(${Math.random() * 360}deg)`
      }}
    >
      {text}
    </motion.div>
  );
};

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      {technologies.map((tech, index) => (
        <BackgroundText key={`bg-${index}`} text={tech.name} />
      ))}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 relative z-10"
      >
        My Tech Stack
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto relative z-10"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <tech.icon className={`text-5xl ${tech.color} mb-4`} />
            <span className="text-sm font-semibold text-center">
              {tech.name}
            </span>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-black bg-opacity-75 rounded-lg flex items-center justify-center"
              >
                <span className="text-xs text-center px-2">
                  Click to learn more
                </span>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
