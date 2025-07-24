"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MessageSquare, Phone, BookOpen } from "lucide-react"

export default function ContactSection() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
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
    <section id="contact" className="container mx-auto py-16 px-4 bg-[#1A1A1A] rounded-lg">
      <h3 className="text-[#F27935] text-xl mb-4 text-center">Get In Touch</h3>
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
            className="bg-[#232323] rounded-lg p-6 flex items-center gap-4 hover:bg-[#2a2a2a] transition-colors"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="bg-[#F27935]/10 p-3 rounded-full text-[#F27935]">{link.icon}</div>
            <div>
              <h3 className="text-lg font-medium text-white">{link.name}</h3>
              <p className="text-gray-400 text-sm">{link.value}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}