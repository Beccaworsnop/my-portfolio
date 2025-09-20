"use client"

import { motion, Variants } from "framer-motion"
import { Github, Linkedin, Mail, MessageSquare, Phone, BookOpen } from "lucide-react"
import { useTheme } from "../contexts/theme-context"

export default function ContactSection() {
  const { theme } = useTheme()

  const socialLinks = [
    {
      name: "Discord",
      value: "beccaworsnop",
      icon: <MessageSquare className="w-6 h-6" />,
      url: "#",
    },
    {
      name: "Email",
      value: "kais.amira55@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:kais.amira55@gmail.com",
    },
    {
      name: "GitHub",
      value: "github.com/Beccaworsnop",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Beccaworsnop",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/amiraks",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/amiraks/",
    },
    {
      name: "WhatsApp",
      value: "+213696717170",
      icon: <Phone className="w-6 h-6" />,
      url: "https://wa.me/213696717170",
    },
    {
      name: "Medium",
      value: "medium.com/@kais.amira55",
      icon: <BookOpen className="w-6 h-6" />,
      url: "https://medium.com/@kais.amira55",
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section
      id="contact"
      className={`container mx-auto py-16 px-4 ${
        theme === "designer" ? "bg-[#1A1A1A]" : "bg-gray-900"
      } rounded-lg`}
    >
      <motion.h3
        className={`text-xl mb-4 text-center ${
          theme === "designer" ? "text-[#F27935]" : "text-blue-400"
        }`}
        key={theme}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Get In Touch
      </motion.h3>

      <h2 className="text-4xl font-bold mb-12 text-center">My Socials</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              theme === "designer"
                ? "bg-[#232323] hover:bg-[#2a2a2a]"
                : "bg-gray-800 hover:bg-gray-700 border border-blue-500/20"
            } rounded-lg p-6 flex items-center gap-4 transition-colors relative overflow-hidden group`}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            {theme === "developer" && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                    "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            )}

            <div
              className={`${
                theme === "designer"
                  ? "bg-[#F27935]/10 text-[#F27935]"
                  : "bg-blue-500/10 text-blue-400"
              } p-3 rounded-full relative z-10`}
            >
              {link.icon}
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-medium text-white">{link.name}</h3>
              <p className="text-gray-400 text-sm">{link.value}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
