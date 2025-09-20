"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedTextDesigner from "./animated-text-marketing"

export default function HeroDesigner() {
  return (
    <motion.section
      className="container mx-auto py-16 px-4 bg-[#1A1A1A] rounded-lg relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <AnimatedTextDesigner />
          <motion.h1
            className="text-lg md:text-xl font-medium mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I like making cool stuff
          </motion.h1>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <motion.div
            className="relative w-64 h-64"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d8c8d7ae615517267800eae7670c0aee.jpg-YUPOV0bvBJxcMe0hnhuBTsVnbk4E0s.jpeg"
              alt="Designer portrait"
              width={300}
              height={300}
              className="object-cover rounded-lg"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}