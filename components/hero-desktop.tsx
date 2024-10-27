"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Globe,
  Shield,
  Cpu,
  Layers,
  Smartphone,
  Check
} from "lucide-react";

export default function ProductDesktopPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Desktop App Development
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Transforming Ideas into Powerful Desktop Applications
          </p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <ArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            {...fadeIn}
          >
            About Our Services
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-3xl mx-auto text-center"
            {...fadeIn}
          >
            We specialize in creating robust, efficient, and user-friendly
            desktop applications tailored to your specific needs. Our team of
            expert developers combines cutting-edge technology with sleek design
            to deliver solutions that drive your business forward.
          </motion.p>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Custom Development</h3>
              <p>
                Tailored solutions designed to meet your unique business
                requirements.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cross-Platform</h3>
              <p>
                Applications that run seamlessly on Windows, macOS, and Linux.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
              <p>
                Continuous maintenance and updates to ensure optimal
                performance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            {...fadeIn}
          >
            Key Features of Our Desktop Apps
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              {
                icon: Globe,
                title: "Cross-Platform Compatibility",
                description:
                  "Develop once, deploy everywhere. Our apps work seamlessly across Windows, macOS, and Linux."
              },
              {
                icon: Shield,
                title: "Robust Security",
                description:
                  "Implement industry-standard security measures to protect sensitive data and ensure user privacy."
              },
              {
                icon: Zap,
                title: "High Performance",
                description:
                  "Optimized code and efficient resource management for lightning-fast performance."
              },
              {
                icon: Cpu,
                title: "Offline Functionality",
                description:
                  "Create apps that work offline, syncing data when an internet connection is available."
              },
              {
                icon: Layers,
                title: "Customizable UI/UX",
                description:
                  "Tailor the user interface to match your brand and provide an intuitive user experience."
              },
              {
                icon: Smartphone,
                title: "Mobile Integration",
                description:
                  "Seamlessly connect desktop apps with mobile devices for a unified experience."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            {...fadeIn}
          >
            Our Pricing Plans
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              {
                title: "Basic",
                price: "1 juta",
                features: [
                  "Single platform development",
                  "Basic UI/UX design",
                  "Core functionality implementation",
                  "Basic security features",
                  "1 month of support",
                  "Minor updates for 3 months"
                ]
              },
              {
                title: "Professional",
                price: "5 juta",
                features: [
                  "Dual platform development",
                  "Advanced UI/UX design",
                  "Extended functionality",
                  "Enhanced security features",
                  "Offline mode support",
                  "3 months of support",
                  "Updates for 6 months",
                  "Basic API integration"
                ]
              },
              {
                title: "Enterprise",
                price: "10 juta",
                features: [
                  "Cross-platform development",
                  "Premium UI/UX design",
                  "Full feature set implementation",
                  "Advanced security measures",
                  "Full offline capabilities",
                  "Mobile app integration",
                  "6 months of priority support",
                  "Updates for 1 year",
                  "Advanced API integration",
                  "Custom feature development"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-4xl font-bold mb-6">Rp {plan.price}</p>
                <ul className="mb-8 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Choose Plan
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            {...fadeIn}
          >
            Our Product Categories
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              {
                title: "Business Management",
                description:
                  "Streamline operations with our powerful management tools."
              },
              {
                title: "Data Analysis",
                description:
                  "Gain insights with our advanced data analysis applications."
              },
              {
                title: "Creative Tools",
                description:
                  "Unleash creativity with our suite of design and editing software."
              },
              {
                title: "Education",
                description:
                  "Enhance learning experiences with interactive educational apps."
              },
              {
                title: "Productivity",
                description:
                  "Boost efficiency with our task management and collaboration tools."
              },
              {
                title: "Security",
                description:
                  "Protect your data with our robust security applications."
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
                <p>{product.description}</p>
                <motion.button
                  className="mt-4 text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            {...fadeIn}
          >
            Ready to Build Your Desktop App?
          </motion.h2>
          <motion.p className="text-xl text-blue-100 mb-8" {...fadeIn}>
            Lets turn your idea into a powerful desktop application. Contact us
            today for a free consultation.
          </motion.p>
          <motion.button
            className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <ArrowRight className="ml-2" />
          </motion.button>
        </div>
      </section>
    </>
  );
}
