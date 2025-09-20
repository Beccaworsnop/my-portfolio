"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedTextDeveloper from "./animated-text-dev"

export default function HeroDeveloper() {
  return (
    <motion.section
      className="container mx-auto py-16 px-4 bg-gray-900 border border-blue-500/20 rounded-lg relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))",
            "linear-gradient(45deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05))",
          ],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />

      <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <AnimatedTextDeveloper />
          <motion.h1
            className="text-lg md:text-xl font-medium mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I build the future with code
          </motion.h1>
        </div>

        {/* Moved the leaning picture to replace the main screenshot */}
        <div className="md:w-1/2 flex justify-center">
          <motion.div
            className="relative w-64 h-80 md:w-80 md:h-96"
            style={{ transform: "rotate(-15deg)" }}
            whileHover={{
              rotate: -10,
              scale: 1.1,
              x: 10,
              y: -10,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 p-1 rounded-lg">
              <div className="w-full h-full bg-gray-900 rounded-md overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d8c8d7ae615517267800eae7670c0aee.jpg-YUPOV0bvBJxcMe0hnhuBTsVnbk4E0s.jpeg"
                  alt="Developer portrait"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
                  }}
                />
              </div>
            </div>

            {/* Glowing border effect */}
            <motion.div
              className="absolute inset-0 border-2 border-blue-400 rounded-lg"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(139, 92, 246, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Additional cyber effects */}
            <motion.div
              className="absolute inset-0 border border-cyan-400 rounded-lg opacity-50"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}