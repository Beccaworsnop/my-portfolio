"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"

interface WebApp {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
}

const webApps: WebApp[] = [
  {
    id: 1,
    title: "AI-Powered E-Commerce",
    description: "Next.js e-commerce with AI recommendations",
    image: "/placeholder.svg?height=400&width=600&text=AI+E-Commerce",
    tech: ["Next.js", "AI/ML", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    description: "Live data visualization with WebSocket",
    image: "/placeholder.svg?height=400&width=600&text=Analytics+Dashboard",
    tech: ["React", "D3.js", "WebSocket"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 3,
    title: "Blockchain DeFi Platform",
    description: "Decentralized finance application",
    image: "/placeholder.svg?height=400&width=600&text=DeFi+Platform",
    tech: ["Web3", "Solidity", "React"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 4,
    title: "AI Chat Application",
    description: "Real-time chat with AI integration",
    image: "/placeholder.svg?height=400&width=600&text=AI+Chat",
    tech: ["Node.js", "Socket.io", "OpenAI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 5,
    title: "3D Portfolio Showcase",
    description: "Interactive 3D web experience",
    image: "/placeholder.svg?height=400&width=600&text=3D+Portfolio",
    tech: ["Three.js", "WebGL", "React"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
]

export default function PortfolioDeveloper() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState<"website" | "data" | "random" | "blog">("website")

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % webApps.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + webApps.length) % webApps.length)
  }

  const currentApp = webApps[currentIndex]

  return (
    <section id="portfolio" className="container mx-auto py-16 px-4">
      <motion.h3
        className="text-blue-400 text-xl mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Development Portfolio
      </motion.h3>

      <div className="flex justify-center mb-12 space-x-6">
        {["website", "data", "random", "blog"].map((category) => (
          <motion.button
            key={category}
            className={`text-lg hover:text-blue-400 transition-colors capitalize ${
              activeCategory === category ? "text-blue-400 font-medium" : "text-white"
            }`}
            onClick={() => setActiveCategory(category as any)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category === "website"
              ? "Web Apps"
              : category === "data"
                ? "AI/ML"
                : category === "random"
                  ? "Experiments"
                  : "Blog"}
          </motion.button>
        ))}
      </div>

      {activeCategory === "website" && (
        <div className="max-w-6xl mx-auto">
          {/* Main Showcase */}
          <div className="relative mb-8">
            <motion.div
              className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-gray-900 border border-blue-500/30"
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Cyber glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                    "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              />

              <Image
                src={currentApp.image || "/placeholder.svg"}
                alt={currentApp.title}
                fill
                className="object-cover"
              />

              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <motion.h3
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentApp.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentApp.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentApp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex gap-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {currentApp.liveUrl && (
                    <motion.a
                      href={currentApp.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                  {currentApp.githubUrl && (
                    <motion.a
                      href={currentApp.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </motion.a>
                  )}
                </motion.div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </div>

          {/* Thumbnail navigation */}
          <div className="flex justify-center gap-4 overflow-x-auto pb-4">
            {webApps.map((app, index) => (
              <motion.button
                key={app.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-blue-400 shadow-lg shadow-blue-400/50"
                    : "border-gray-600 hover:border-blue-400/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src={app.image || "/placeholder.svg"} alt={app.title} fill className="object-cover" />
                {index === currentIndex && (
                  <motion.div className="absolute inset-0 bg-blue-400/20" layoutId="activeThumb" />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Other categories would go here with similar structure */}
    </section>
  )
}
