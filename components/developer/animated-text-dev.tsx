"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function AnimatedTextDeveloper() {
  const [currentName, setCurrentName] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const names = ["KAIS AMIRA", "BECCA"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentName((prev) => (prev + 1) % names.length)
        setIsVisible(true)
      }, 500) // Blur transition duration
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [names.length])

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentName}
          className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-transparent bg-clip-text font-bold"
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={{
            filter: isVisible ? "blur(0px)" : "blur(10px)",
            opacity: isVisible ? 1 : 0,
          }}
          exit={{ filter: "blur(10px)", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          I AM {names[currentName]}
        </motion.h2>
      </AnimatePresence>

      {/* Cyber glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg blur-xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
