"use client"

import { motion, Variants } from "framer-motion"
import { Search, Palette, Video } from "lucide-react"

const services = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO MARKETING",
    description:
      "Boost your online visibility with strategic SEO optimization and digital marketing campaigns that drive real results.",
    features: ["Keyword Research", "Content Strategy", "Analytics & Reporting", "Local SEO"],
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "GRAPHIC DESIGN",
    description:
      "Create stunning visual identities and marketing materials that capture your brand's essence and engage your audience.",
    features: ["Logo Design", "Brand Identity", "Print Design", "Digital Graphics"],
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "VIDEO EDITING",
    description: "Transform raw footage into compelling stories with professional video editing and motion graphics.",
    features: ["Video Production", "Motion Graphics", "Color Grading", "Audio Enhancement"],
  },
]

export default function ServicesSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <motion.section
      id="services"
      className="container mx-auto py-16 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-12">
        <h3 className="text-[#F27935] text-xl mb-4">What I Offer</h3>
        <h2 className="text-4xl font-bold mb-6">My Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I provide comprehensive digital solutions to help your business grow and stand out in the competitive market.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#1A1A1A] rounded-lg p-8 relative overflow-hidden group hover:bg-[#232323] transition-colors duration-300"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              transform: "rotateY(5deg)", // ✅ fixed rotateY
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F27935]/5 to-[#E94057]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon */}
            <motion.div
              className="bg-[#F27935]/10 text-[#F27935] p-4 rounded-full w-fit mb-6 relative z-10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {service.icon}
            </motion.div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              {/* Features list */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center text-gray-300 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-[#F27935] rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Hover border effect */}
            <div className="absolute inset-0 border-2 border-[#F27935] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
          </motion.div>
        ))}
      </motion.div>

      {/* Call to action */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          className="bg-gradient-to-r from-[#F27935] to-[#E94057] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-[#F27935]/25 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Today
        </motion.button>
      </motion.div>
    </motion.section>
  )
}
