"use client";

import React from "react";
import Image from "next/image";
import { Code, Database, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  title: string;
  features: Feature[];
  description: string;
  imageUrl: string;
}

function FeatureIcon({ name }: { name: string }) {
  switch (name.toLowerCase()) {
    case "react":
    case "vue":
    case "angular":
      return <Code className="w-5 h-5" />;
    case "node.js":
    case "express":
    case "django":
      return <Globe className="w-5 h-5" />;
    case "mongodb":
    case "postgresql":
    case "mysql":
      return <Database className="w-5 h-5" />;
    default:
      return <Code className="w-5 h-5" />;
  }
}

function ProjectCard({
  project,
  isEven
}: {
  project: Project;
  isEven: boolean;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased"
    >
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div
          className={`lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 ${
            isEven ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`shrink-0 max-w-md lg:max-w-lg mx-auto ${
              isEven ? "lg:col-start-2" : ""
            }`}
          >
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={700}
                height={700}
                className="w-full lg:w-[55rem] transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </motion.div>

          <div
            className={`mt-6 sm:mt-8 lg:mt-0 ${isEven ? "lg:col-start-1" : ""}`}
          >
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white mb-4"
            >
              {project.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1"
                >
                  <FeatureIcon name={feature.name} />
                  <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {feature.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8"
            >
              <a
                href="#"
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-colors duration-300"
                role="button"
              >
                View Details
              </a>

              <a
                href="#"
                className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center transition-colors duration-300"
                role="button"
              >
                Live Demo
              </a>
            </motion.div>

            <motion.hr
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="my-6 md:my-8 border-gray-200 dark:border-gray-800"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-gray-600 dark:text-gray-400"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function ProjectSampel() {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      features: [
        { name: "React", icon: <Code /> },
        { name: "Node.js", icon: <Globe /> },
        { name: "MongoDB", icon: <Database /> }
      ],
      description:
        "A fully-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with React for the frontend, Node.js for the backend, and MongoDB for the database.",
      imageUrl: "/contohweb1.jpeg"
    },
    {
      id: 2,
      title: "Task Management App",
      features: [
        { name: "Vue", icon: <Code /> },
        { name: "Express", icon: <Globe /> },
        { name: "PostgreSQL", icon: <Database /> }
      ],
      description:
        "A collaborative task management application with real-time updates, team assignments, and progress tracking. Developed using Vue.js for the frontend, Express for the backend API, and PostgreSQL for data storage.",
      imageUrl: "/contohweb2.jpeg"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      features: [
        { name: "Angular", icon: <Code /> },
        { name: "Django", icon: <Globe /> },
        { name: "MySQL", icon: <Database /> }
      ],
      description:
        "A comprehensive social media management dashboard for businesses, featuring post scheduling, analytics, and engagement tracking across multiple platforms. Created with Angular for the frontend, Django for the backend, and MySQL for the database.",
      imageUrl: "/contohweb3.jpeg"
    }
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          isEven={index % 2 === 1}
        />
      ))}
    </div>
  );
}
