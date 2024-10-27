"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Globe, Shield, Check } from "lucide-react";

export default function Component() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Mobile App Development
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Bringing Your Ideas to Life on Mobile Devices
          </p>
          <motion.button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
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
            Our Mobile App Services
          </motion.h2>
          <motion.p
            className="text-lg mb-12 max-w-3xl mx-auto text-center"
            {...fadeIn}
          >
            We specialize in creating innovative, user-friendly mobile
            applications that cater to your specific business needs. Our team of
            skilled developers combines cutting-edge technology with sleek
            design to deliver mobile solutions that engage users and drive your
            business forward.
          </motion.p>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <Smartphone className="w-12 h-12 mb-4 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-semibold mb-4">Native Development</h3>
              <p>
                High-performance apps built specifically for iOS and Android
                platforms.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <Globe className="w-12 h-12 mb-4 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-semibold mb-4">
                Cross-Platform Solutions
              </h3>
              <p>
                Efficient apps that work seamlessly across multiple mobile
                platforms.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 mb-4 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-semibold mb-4">Secure & Scalable</h3>
              <p>
                Robust applications built with security and scalability in mind.
              </p>
            </div>
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
            Mobile App Categories
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              {
                title: "E-commerce",
                description:
                  "Powerful mobile shopping experiences with secure payment integration."
              },
              {
                title: "Social Networking",
                description:
                  "Engaging platforms for connecting people and sharing experiences."
              },
              {
                title: "Health & Fitness",
                description:
                  "Apps that help users track their wellness and achieve fitness goals."
              },
              {
                title: "Education",
                description:
                  "Interactive learning apps for students of all ages and subjects."
              },
              {
                title: "Entertainment",
                description:
                  "Immersive gaming and media streaming applications."
              },
              {
                title: "Productivity",
                description:
                  "Tools to enhance personal and professional efficiency on-the-go."
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
                <p className="mb-4">{product.description}</p>
                <motion.button
                  className="text-purple-600 dark:text-purple-400 font-semibold inline-flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  Explore More
                  <ArrowRight className="ml-2" size={16} />
                </motion.button>
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
                price: "5 juta",
                features: [
                  "Single platform (iOS or Android)",
                  "Basic UI/UX design",
                  "Core functionality implementation",
                  "Push notifications",
                  "Basic analytics integration",
                  "App store submission",
                  "1 month of support",
                  "Minor updates for 3 months"
                ]
              },
              {
                title: "Professional",
                price: "15 juta",
                features: [
                  "Dual platform (iOS and Android)",
                  "Advanced UI/UX design",
                  "Extended functionality",
                  "Push notifications",
                  "Advanced analytics",
                  "Basic API integration",
                  "Social media integration",
                  "App store optimization",
                  "3 months of support",
                  "Updates for 6 months"
                ]
              },
              {
                title: "Enterprise",
                price: "30 juta",
                features: [
                  "Cross-platform development",
                  "Premium UI/UX design",
                  "Full feature set implementation",
                  "Advanced push notifications",
                  "Custom analytics dashboard",
                  "Advanced API integration",
                  "Admin panel development",
                  "Performance optimization",
                  "Extensive app store optimization",
                  "6 months of priority support",
                  "Updates for 1 year",
                  "Scalability planning"
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
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
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

      {/* Call to Action Section */}
      <section className="py-20 bg-purple-600 dark:bg-purple-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            {...fadeIn}
          >
            Ready to Build Your Mobile App?
          </motion.h2>
          <motion.p className="text-xl text-purple-100 mb-8" {...fadeIn}>
            Lets turn your idea into a reality. Contact us today for a free
            consultation.
          </motion.p>
          <motion.button
            className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full inline-flex items-center"
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
