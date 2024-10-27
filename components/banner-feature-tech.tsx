"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Layout, Smartphone } from "lucide-react";
import { VercelLogoIcon } from "@radix-ui/react-icons";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiEslint } from "react-icons/si";

export default function FeutureTech() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const featuredProducts = [
    {
      id: 1,
      name: "Custom Web App",
      icon: <Layout className="w-6 h-6" />,
      description:
        "Tailored web applications to meet your specific business needs."
    },
    {
      id: 2,
      name: "Desktop Software",
      icon: <Code className="w-6 h-6" />,
      description: "Powerful desktop applications for enhanced productivity."
    },
    {
      id: 3,
      name: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />,
      description: "Intuitive mobile apps for iOS and Android platforms."
    }
  ];

  const technologies = [
    {
      name: "Vercel",
      logo: <VercelLogoIcon />
    },
    {
      name: "Next.js",
      logo: <RiNextjsFill />
    },
    {
      name: "React",
      logo: <FaReact />
    },
    {
      name: "Eslint",
      logo: <SiEslint />
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-black dark:bg-white rounded-full p-3">
                      {product.icon}
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.1 }}
                onHoverStart={() => setHoveredTech(tech.name)}
                onHoverEnd={() => setHoveredTech(null)}
              >
                <div className="text-gray-900 dark:text-white">{tech.logo}</div>
                <motion.p
                  className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredTech === tech.name ? 1 : 0 }}
                >
                  {tech.name}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
