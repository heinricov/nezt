"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Zap,
  Layout,
  Search,
  ShoppingCart,
  Check
} from "lucide-react";

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
            Expert Website Development
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Creating Stunning, High-Performance Websites for Your Business
          </p>
          <motion.button
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Quote
            <ArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <Globe
            className="absolute top-1/4 left-1/4 text-white opacity-20"
            size={120}
          />
          <Layout
            className="absolute top-1/2 right-1/4 text-white opacity-20"
            size={100}
          />
          <Zap
            className="absolute bottom-1/4 left-1/3 text-white opacity-20"
            size={80}
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            {...fadeIn}
          >
            Our Website Development Services
          </motion.h2>
          <motion.p
            className="text-lg mb-12 max-w-3xl mx-auto text-center"
            {...fadeIn}
          >
            We specialize in creating beautiful, functional, and high-performing
            websites that help businesses establish a strong online presence.
            Our team of expert developers and designers work together to deliver
            custom solutions that meet your unique needs and exceed your
            expectations.
          </motion.p>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <Layout className="w-12 h-12 mb-4 text-teal-600 dark:text-teal-400" />
              <h3 className="text-xl font-semibold mb-4">Custom Design</h3>
              <p>
                Unique, responsive designs tailored to your brand and business
                goals.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <Zap className="w-12 h-12 mb-4 text-teal-600 dark:text-teal-400" />
              <h3 className="text-xl font-semibold mb-4">
                Performance Optimization
              </h3>
              <p>
                Fast-loading, efficient websites that provide an excellent user
                experience.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <Search className="w-12 h-12 mb-4 text-teal-600 dark:text-teal-400" />
              <h3 className="text-xl font-semibold mb-4">SEO-Friendly</h3>
              <p>
                Optimized code and structure to improve your search engine
                rankings.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            {...fadeIn}
          >
            Types of Websites We Create
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              {
                title: "Corporate Websites",
                description:
                  "Professional sites that showcase your company's brand and services.",
                icon: Globe
              },
              {
                title: "E-commerce Platforms",
                description:
                  "Powerful online stores with secure payment gateways and inventory management.",
                icon: ShoppingCart
              },
              {
                title: "Portfolio Websites",
                description:
                  "Elegant displays of your work, perfect for creatives and professionals.",
                icon: Layout
              },
              {
                title: "Blogs and News Sites",
                description:
                  "Dynamic content platforms for sharing articles, news, and media.",
                icon: Search
              },
              {
                title: "Landing Pages",
                description:
                  "High-converting pages designed to turn visitors into customers.",
                icon: Zap
              },
              {
                title: "Web Applications",
                description:
                  "Complex, interactive web-based software solutions for various industries.",
                icon: Globe
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <product.icon className="w-12 h-12 mb-4 text-teal-600 dark:text-teal-400" />
                <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
                <p className="mb-4">{product.description}</p>
                <motion.button
                  className="text-teal-600 dark:text-teal-400 font-semibold inline-flex items-center"
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

      {/* Pricing Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
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
                price: "500rb",
                features: [
                  "Static website design",
                  "Up to 5 pages",
                  "Mobile responsive layout",
                  "Basic SEO optimization",
                  "Contact form integration",
                  "1 month of support"
                ]
              },
              {
                title: "Standard",
                price: "1jt",
                features: [
                  "Dynamic website design",
                  "Up to 10 pages",
                  "Mobile responsive layout",
                  "Advanced SEO optimization",
                  "Content Management System (CMS)",
                  "Blog functionality",
                  "Social media integration",
                  "3 months of support"
                ]
              },
              {
                title: "Premium",
                price: "2jt",
                features: [
                  "Advanced dynamic website",
                  "Unlimited pages",
                  "Mobile responsive layout",
                  "Comprehensive SEO package",
                  "E-commerce functionality",
                  "Payment gateway integration",
                  "Google Maps API integration",
                  "Custom features development",
                  "Performance optimization",
                  "6 months of support"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-4xl font-bold mb-6">
                  Mulai dari Rp {plan.price}
                </p>
                <ul className="mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <Check className="w-5 h-5 mr-2 text-teal-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
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
      <section className="py-20 bg-teal-600 dark:bg-teal-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            {...fadeIn}
          >
            Ready to Build Your Dream Website?
          </motion.h2>
          <motion.p className="text-xl text-teal-100 mb-8" {...fadeIn}>
            Lets create a website that sets you apart from the competition.
            Contact us today for a personalized consultation.
          </motion.p>
          <motion.button
            className="bg-white text-teal-600 font-bold py-2 px-6 rounded-full inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <ArrowRight className="ml-2" />
          </motion.button>
        </div>
      </section>
    </>
  );
}
