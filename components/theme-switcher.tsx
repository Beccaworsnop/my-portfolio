"use client"

import { motion } from "framer-motion"
import { useTheme } from "../contexts/theme-context"
import { Palette, Code } from "lucide-react"

export default function ThemeSwitcher() {
  const { theme, toggleTheme, isTransitioning } = useTheme()

  return (
    <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50">
      <motion.div className="relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <motion.button
          onClick={toggleTheme}
          className={`relative w-16 h-16 rounded-full shadow-2xl overflow-hidden ${
            theme === "designer"
              ? "bg-gradient-to-br from-[#F27935] to-[#E94057]"
              : "bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6]"
          }`}
          animate={{
            rotate: isTransitioning ? [0, 180, 360] : 0,
            scale: isTransitioning ? [1, 1.3, 1.5, 1.3, 1] : 1,
          }}
          transition={{ duration: isTransitioning ? 2 : 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-white"
            animate={{ opacity: isTransitioning ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {theme === "designer" ? <Code className="w-8 h-8" /> : <Palette className="w-8 h-8" />}
          </motion.div>

          {/* Enhanced cyber effect rings for developer theme */}
          {theme === "developer" && (
            <>
              <motion.div
                className="absolute inset-0 border-2 border-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-cyan-400 rounded-full"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </>
          )}
        </motion.button>

        <motion.div
          className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
            theme === "designer" ? "bg-[#F27935] text-white" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {theme === "designer" ? "Switch to Developer" : "Switch to Designer"}
        </motion.div>
      </motion.div>
    </div>
  )
}
