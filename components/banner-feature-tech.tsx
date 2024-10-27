"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiNextdotjs, SiVuedotjs, SiFlutter, SiFramer } from "react-icons/si";
import { Badge } from "./ui/badge";

export default function PortfolioPage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      type: "Website",
      description:
        "A fully responsive e-commerce platform with user authentication and payment integration.",
      features: [
        "User Authentication",
        "Product Catalog",
        "Shopping Cart",
        "Payment Integration"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      id: 2,
      title: "Task Management App",
      type: "Mobile App",
      description:
        "A cross-platform mobile app for managing tasks and projects with team collaboration features.",
      features: [
        "Task Creation",
        "Project Management",
        "Team Collaboration",
        "Push Notifications"
      ],
      technologies: ["React Native", "Firebase", "Redux"],
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      id: 3,
      title: "Digital Wedding Invitation",
      type: "Web App",
      description:
        "An interactive and personalized digital wedding invitation with RSVP functionality.",
      features: [
        "Customizable Design",
        "RSVP System",
        "Guest Information Management",
        "Photo Gallery"
      ],
      technologies: ["Vue.js", "Firebase", "GSAP"],
      image: "/placeholder.svg?height=600&width=800"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-gray-600 text-white py-36">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">
            Welcome to Our Digital Solutions
          </h1>
          <p className="text-xl mb-8">
            We create stunning digital experiences for your business needs
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Websites</h3>
              <p>Responsive and modern web solutions</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Mobile Apps</h3>
              <p>Cross-platform mobile applications</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Desktop Apps</h3>
              <p>Powerful desktop software solutions</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Wedding Invitations</h3>
              <p>Beautiful digital wedding invitations</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <FaReact className="text-4xl" />
            <SiNextdotjs className="text-4xl" />
            <SiVuedotjs className="text-4xl" />
            <SiFlutter className="text-4xl" />
            <FaHtml5 className="text-4xl" />
            <FaCss3 className="text-4xl" />
            <SiFramer className="text-4xl" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Our Projects
          </h2>
          <motion.div
            animate={controls}
            initial="hidden"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {project.type}
                  </p>
                  <Badge variant="secondary" className="bg-gray-400">
                    {project.type}
                  </Badge>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">
                      Features:
                    </h4>
                    <ul className="list-disc list-inside">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 dark:text-gray-300"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
