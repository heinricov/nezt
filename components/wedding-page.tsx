"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import {
  FaHeart,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaEnvelope
} from "react-icons/fa";
import { GiPartyPopper, GiCakeSlice, GiMusicalNotes } from "react-icons/gi";

export default function WeddingInvitationService() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const services = [
    {
      id: 1,
      title: "Custom Design",
      type: "Design",
      description:
        "Get a unique and personalized design that reflects your love story and wedding theme.",
      features: [
        "Multiple design concepts",
        "Unlimited revisions",
        "Mobile-responsive design"
      ],
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      id: 2,
      title: "RSVP Management",
      type: "Feature",
      description:
        "Easily manage your guest list and track responses with our built-in RSVP system.",
      features: [
        "Online RSVP form",
        "Guest list management",
        "Automated email reminders"
      ],
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      id: 3,
      title: "Photo Gallery",
      type: "Feature",
      description:
        "Share your precious moments with guests through a beautiful online photo gallery.",
      features: [
        "Customizable layouts",
        "High-resolution images",
        "Social media integration"
      ],
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
    <div className="min-h-screen bg-rose-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-300 to-rose-300 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Create Your Perfect Wedding Website
          </h1>
          <p className="text-xl mb-8 text-center">
            Beautiful, customizable, and easy-to-use wedding invitation websites
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">RSVP Management</h3>
              <p>Track guest responses</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Photo Gallery</h3>
              <p>Share your moments</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Event Details</h3>
              <p>Provide all info</p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Gift Registry</h3>
              <p>Manage your wishlist</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <FaHeart className="text-4xl" />
            <FaCalendarAlt className="text-4xl" />
            <FaMapMarkerAlt className="text-4xl" />
            <FaEnvelope className="text-4xl" />
            <GiPartyPopper className="text-4xl" />
            <GiCakeSlice className="text-4xl" />
            <GiMusicalNotes className="text-4xl" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-rose-800">
            Our Services
          </h2>
          <motion.div
            animate={controls}
            initial="hidden"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-rose-700">
                    {service.title}
                  </h3>
                  <p className="text-sm text-rose-600 mb-4">{service.type}</p>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2 text-rose-700">
                      Features:
                    </h4>
                    <ul className="list-disc list-inside">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-rose-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-rose-800">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-rose-700">Basic</h3>
              <p className="text-4xl font-bold mb-6">$99</p>
              <ul className="mb-6">
                <li className="mb-2">Custom design</li>
                <li className="mb-2">RSVP management</li>
                <li className="mb-2">Mobile responsive</li>
                <li className="mb-2">1 month support</li>
              </ul>
              <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded w-full">
                Choose Plan
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-4 border-rose-500">
              <h3 className="text-2xl font-bold mb-4 text-rose-700">Premium</h3>
              <p className="text-4xl font-bold mb-6">$199</p>
              <ul className="mb-6">
                <li className="mb-2">Everything in Basic</li>
                <li className="mb-2">Photo gallery</li>
                <li className="mb-2">Gift registry</li>
                <li className="mb-2">3 months support</li>
              </ul>
              <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded w-full">
                Choose Plan
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-rose-700">Deluxe</h3>
              <p className="text-4xl font-bold mb-6">$299</p>
              <ul className="mb-6">
                <li className="mb-2">Everything in Premium</li>
                <li className="mb-2">Custom domain</li>
                <li className="mb-2">Video integration</li>
                <li className="mb-2">6 months support</li>
              </ul>
              <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded w-full">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-rose-800">
            Get Started Today
          </h2>
          <div className="max-w-md mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your Message"
                  rows={4}
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
