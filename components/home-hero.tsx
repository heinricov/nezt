"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
import Link from "next/link";

export default function HeroSectionHome() {
  const [mounted, setMounted] = useState(false);
  //   const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300 bg-white dark:bg-black text-blue-600">
      <div className="relative">
        <motion.div
          className="lg:text-[25vw] text-[40vw] mt-20 font-bold leading-none tracking-tighter"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {"NEZT".split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={letterVariants}
              transition={{
                type: "spring",
                damping: 12,
                stiffness: 200
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <div className="absolute w-[100vw] inset-0 bg-gradient-to-t from-white to-transparent dark:from-black dark:to-transparent pointer-events-none" />
      </div>

      <motion.button
        className="mt-12 px-6 py-3 bg-blue-600 text-white rounded-full font-medium text-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/product">GET PRODUCT →</Link>
      </motion.button>
      <section className="">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          {/* <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            You’ll be in good company
          </h2> */}
          <div className="flex lg:flex-row gap-8 text-gray-500 sm:gap-12 dark:text-gray-400">
            <Link href="#" className="flex justify-center items-center">
              <span>Vercel</span>
            </Link>
            <Link href="#" className="flex justify-center items-center">
              <span>Next js</span>
            </Link>
            <Link href="#" className="flex justify-center items-center">
              <span>react</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
