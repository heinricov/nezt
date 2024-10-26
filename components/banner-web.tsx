"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const neonGlowAnimation = {
  glow: {
    boxShadow: [
      "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0000ff, 0 0 35px #0000ff, 0 0 40px #0000ff, 0 0 50px #0000ff, 0 0 75px #0000ff",
      "0 0 2px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 10px #0000ff, 0 0 17px #0000ff, 0 0 20px #0000ff, 0 0 25px #0000ff, 0 0 37px #0000ff"
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

export default function WebBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div ref={ref} className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-center bg-no-repeat opacity-30 blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <motion.h1
            className="mt-10 max-w-lg text-4xl font-bold tracking-tight sm:text-6xl"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Help You Create A Website
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Start with us building the future with features from a powerful
            JavaScript ecosystem.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Add your buttons or elements here */}
          </motion.div>
          <div className="flex items-center text-center gap-2">
            <Link href="">
              <RiNextjsLine className="text-5xl" />
              <span>Next JS</span>
            </Link>
            <Link href="">
              <IoLogoVercel className="text-5xl" />
              <span>Vercel</span>
            </Link>
            <Link href="">
              <FaReact className="text-5xl" />
              <span>React</span>
            </Link>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <div className="relative w-96 h-96 mx-auto flex items-center justify-center">
            <motion.div
              className="w-60 h-60 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      boxShadow: neonGlowAnimation.glow.boxShadow[0]
                    }
                  : { opacity: 0 }
              }
              transition={{
                opacity: { duration: 0.5, delay: 0.5 },
                boxShadow: neonGlowAnimation.glow.transition
              }}
            >
              <Image
                src="/Nezt.png"
                alt="Nezt Logo"
                width={240}
                height={240}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
