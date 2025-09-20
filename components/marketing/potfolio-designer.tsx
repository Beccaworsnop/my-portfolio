"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

type ProjectCategory = "website" | "data" | "random" | "blog"

interface Project {
  id: number
  title: string
  category: ProjectCategory
  image: string
  description: string
  url?: string
}

const designerProjects: Project[] = [
  // Website Projects
  {
    id: 1,
    title: "Corporate Website",
    category: "website",
    image: "/placeholder.svg?height=300&width=400",
    description: "Modern corporate website with responsive design",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "website",
    image: "/placeholder.svg?height=300&width=400",
    description: "Full-featured online store with payment integration",
  },
  {
    id: 3,
    title: "Portfolio Template",
    category: "website",
    image: "/placeholder.svg?height=300&width=400",
    description: "Clean and minimal portfolio website template",
  },
  {
    id: 4,
    title: "Blog Platform",
    category: "website",
    image: "/placeholder.svg?height=300&width=400",
    description: "Content management system for bloggers",
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    category: "website",
    image: "/placeholder.svg?height=300&width=400",
    description: "User interface for a SaaS application",
  },

  // Data Science Projects
  {
    id: 6,
    title: "Market Analysis",
    category: "data",
    image: "/placeholder.svg?height=300&width=400",
    description: "Comprehensive market trend analysis",
  },
  {
    id: 7,
    title: "Customer Segmentation",
    category: "data",
    image: "/placeholder.svg?height=300&width=400",
    description: "ML-based customer segmentation model",
  },
  {
    id: 8,
    title: "Predictive Analytics",
    category: "data",
    image: "/placeholder.svg?height=300&width=400",
    description: "Sales prediction using time series analysis",
  },
  {
    id: 9,
    title: "Data Visualization",
    category: "data",
    image: "/placeholder.svg?height=300&width=400",
    description: "Interactive dashboard for business metrics",
  },
  {
    id: 10,
    title: "Sentiment Analysis",
    category: "data",
    image: "/placeholder.svg?height=300&width=400",
    description: "NLP-based sentiment analysis of customer reviews",
  },

  // Random Projects
  {
    id: 11,
    title: "Mobile App UI",
    category: "random",
    image: "/placeholder.svg?height=300&width=400",
    description: "UI/UX design for a fitness tracking app",
  },
  {
    id: 12,
    title: "3D Animation",
    category: "random",
    image: "/placeholder.svg?height=300&width=400",
    description: "3D character animation showcase",
  },
  {
    id: 13,
    title: "Game Development",
    category: "random",
    image: "/placeholder.svg?height=300&width=400",
    description: "2D platformer game built with Unity",
  },
  {
    id: 14,
    title: "AR Experience",
    category: "random",
    image: "/placeholder.svg?height=300&width=400",
    description: "Augmented reality interactive experience",
  },
  {
    id: 15,
    title: "IoT Dashboard",
    category: "random",
    image: "/placeholder.svg?height=300&width=400",
    description: "IoT devices control panel",
  },

  // Blog Posts
  {
    id: 16,
    title: "The Future of Web Development",
    category: "blog",
    image: "/placeholder.svg?height=300&width=400",
    description: "Exploring emerging trends in web development",
    url: "https://medium.com/@kais.amira55/future-web-dev",
  },
  {
    id: 17,
    title: "Machine Learning for Beginners",
    category: "blog",
    image: "/placeholder.svg?height=300&width=400",
    description: "A gentle introduction to machine learning concepts",
    url: "https://medium.com/@kais.amira55/ml-beginners",
  },
  {
    id: 18,
    title: "Optimizing React Performance",
    category: "blog",
    image: "/placeholder.svg?height=300&width=400",
    description: "Tips and tricks for faster React applications",
    url: "https://medium.com/@kais.amira55/react-performance",
  },
  {
    id: 19,
    title: "Data Visualization Best Practices",
    category: "blog",
    image: "/placeholder.svg?height=300&width=400",
    description: "Creating effective and insightful data visualizations",
    url: "https://medium.com/@kais.amira55/data-viz",
  },
  {
    id: 20,
    title: "Building a Personal Brand as a Developer",
    category: "blog",
    image: "/placeholder.svg?height=300&width=400",
    description: "Strategies for standing out in the tech industry",
    url: "https://medium.com/@kais.amira55/personal-brand",
  },
]

export default function PortfolioDesigner() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("website")

  const filteredProjects = designerProjects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="container mx-auto py-16 px-4">
      <motion.h3
        className="text-[#F27935] text-xl mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Design Portfolio
      </motion.h3>

      <div className="flex justify-center mb-12 space-x-6">
        {["website", "data", "random", "blog"].map((category) => (
          <motion.button
            key={category}
            className={`text-lg hover:text-[#F27935] transition-colors capitalize ${
              activeCategory === category ? "text-[#F27935] font-medium" : "text-white"
            }`}
            onClick={() => setActiveCategory(category as ProjectCategory)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category === "website"
              ? "Websites"
              : category === "data"
                ? "Data Science"
                : category === "random"
                  ? "Random"
                  : "Blog"}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative overflow-hidden rounded-lg bg-[#1A1A1A] group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
            }}
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{project.description}</p>

              {project.url && (
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-[#F27935] hover:underline"
                  whileHover={{ x: 5 }}
                >
                  View Project →
                </motion.a>
              )}
            </div>

            <div className="absolute inset-0 border-2 border-[#F27935] opacity-0 group-hover:opacity-100 transition-opacity z-0 rounded-lg"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}