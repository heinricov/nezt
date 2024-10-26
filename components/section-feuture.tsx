"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Monitor, Globe, Zap, Shield } from "lucide-react";

export default function Feature() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web App Development",
      description:
        "Create powerful, scalable web applications tailored to your business needs using cutting-edge technologies."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description:
        "Build engaging mobile apps for iOS and Android platforms that deliver exceptional user experiences."
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Desktop Application Development",
      description:
        "Develop robust desktop applications that streamline your workflow and boost productivity."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Software Solutions",
      description:
        "Design and implement bespoke software solutions that address your unique business challenges."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description:
        "Enhance the speed and efficiency of your existing applications for optimal performance."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Maintenance",
      description:
        "Ensure the ongoing security and reliability of your applications with our maintenance services."
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <motion.div
          className="max-w-screen-md mb-8 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Why Work With Us?
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            What you need for your application we provide everything, here we
            explain to you.
          </p>
        </motion.div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
            >
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <motion.div
                  animate={{
                    rotate: hoveredFeature === index ? 360 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
