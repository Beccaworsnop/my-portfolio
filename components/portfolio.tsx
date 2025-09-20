"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTheme } from "../contexts/theme-context"

type ProjectCategory = "website" | "data" | "random" | "blog"

interface Project {
  id: number
  title: string
  category: ProjectCategory
  image: string
  description: string
  url?: string
  tech?: string[]
}

export default function PortfolioSection() {
  const { theme } = useTheme()
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("website")

  const designerProjects: Project[] = [
    // Designer projects (original)
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

  const developerProjects: Project[] = [
    // Developer projects
    {
      id: 1,
      title: "React E-Commerce",
      category: "website",
      image: "/placeholder.svg?height=300&width=400",
      description: "Full-stack e-commerce built with React & Node.js",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "AI Dashboard",
      category: "website",
      image: "/placeholder.svg?height=300&width=400",
      description: "Machine learning dashboard with real-time analytics",
      tech: ["Next.js", "Python", "TensorFlow"],
    },
    {
      id: 3,
      title: "Crypto Trading Bot",
      category: "website",
      image: "/placeholder.svg?height=300&width=400",
      description: "Automated trading system with advanced algorithms",
      tech: ["TypeScript", "WebSocket", "Redis"],
    },
    {
      id: 4,
      title: "Social Media App",
      category: "website",
      image: "/placeholder.svg?height=300&width=400",
      description: "Real-time social platform with chat functionality",
      tech: ["React Native", "Firebase", "Socket.io"],
    },
    {
      id: 5,
      title: "Blockchain DApp",
      category: "website",
      image: "/placeholder.svg?height=300&width=400",
      description: "Decentralized application on Ethereum",
      tech: ["Solidity", "Web3.js", "React"],
    },
    // Data projects
    {
      id: 6,
      title: "ML Prediction Model",
      category: "data",
      image: "/placeholder.svg?height=300&width=400",
      description: "Stock price prediction using deep learning",
      tech: ["Python", "TensorFlow", "Pandas"],
    },
    {
      id: 7,
      title: "Real-time Analytics",
      category: "data",
      image: "/placeholder.svg?height=300&width=400",
      description: "Live data processing and visualization",
      tech: ["Apache Kafka", "D3.js", "PostgreSQL"],
    },
    {
      id: 8,
      title: "NLP Sentiment Engine",
      category: "data",
      image: "/placeholder.svg?height=300&width=400",
      description: "Advanced sentiment analysis for social media",
      tech: ["Python", "NLTK", "Docker"],
    },
    {
      id: 9,
      title: "Computer Vision API",
      category: "data",
      image: "/placeholder.svg?height=300&width=400",
      description: "Image recognition and processing service",
      tech: ["OpenCV", "FastAPI", "AWS"],
    },
    {
      id: 10,
      title: "Big Data Pipeline",
      category: "data",
      image: "/placeholder.svg?height=300&width=400",
      description: "Scalable data processing infrastructure",
      tech: ["Apache Spark", "Kubernetes", "Elasticsearch"],
    },
    // Random projects
    {
      id: 11,
      title: "AR Mobile Game",
      category: "random",
      image: "/placeholder.svg?height=300&width=400",
      description: "Augmented reality gaming experience",
      tech: ["Unity", "ARCore", "C#"],
    },
    {
      id: 12,
      title: "IoT Smart Home",
      category: "random",
      image: "/placeholder.svg?height=300&width=400",
      description: "Connected home automation system",
      tech: ["Raspberry Pi", "MQTT", "React"],
    },
    {
      id: 13,
      title: "VR Training Sim",
      category: "random",
      image: "/placeholder.svg?height=300&width=400",
      description: "Virtual reality training simulation",
      tech: ["Unreal Engine", "Oculus SDK", "C++"],
    },
    {
      id: 14,
      title: "Drone Control App",
      category: "random",
      image: "/placeholder.svg?height=300&width=400",
      description: "Mobile app for drone fleet management",
      tech: ["Flutter", "ROS", "Python"],
    },
    {
      id: 15,
      title: "3D Web Experience",
      category: "random",
      image: "/placeholder.svg?height=300&width=400",
      description: "Interactive 3D web application",
      tech: ["Three.js", "WebGL", "GLSL"],
    },
    // Blog posts
    {
      id: 16,
      title: "Advanced React Patterns",
      category: "blog",
      image: "/placeholder.svg?height=300&width=400",
      description: "Deep dive into React design patterns",
      url: "https://medium.com/@kais.amira55/react-patterns",
    },
    {
      id: 17,
      title: "Microservices Architecture",
      category: "blog",
      image: "/placeholder.svg?height=300&width=400",
      description: "Building scalable microservices with Node.js",
      url: "https://medium.com/@kais.amira55/microservices",
    },
    {
      id: 18,
      title: "AI in Web Development",
      category: "blog",
      image: "/placeholder.svg?height=300&width=400",
      description: "How AI is transforming web development",
      url: "https://medium.com/@kais.amira55/ai-web-dev",
    },
    {
      id: 19,
      title: "Blockchain Development Guide",
      category: "blog",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete guide to blockchain development",
      url: "https://medium.com/@kais.amira55/blockchain-guide",
    },
    {
      id: 20,
      title: "Performance Optimization",
      category: "blog",
      image: "/placeholder.svg?height=300&width=400",
      description: "Advanced techniques for web performance",
      url: "https://medium.com/@kais.amira55/performance",
    },
  ]

  const projects = theme === "designer" ? designerProjects : developerProjects
  const filteredProjects = projects.filter((project) => project.category === activeCategory)

  const primaryColor = theme === "designer" ? "#F27935" : "#3B82F6"
  const secondaryColor = theme === "designer" ? "#E94057" : "#8B5CF6"

  return (
    <section id="portfolio" className="container mx-auto py-16 px-4">
      <motion.h3
        className={`text-xl mb-8 text-center ${theme === "designer" ? "text-[#F27935]" : "text-blue-400"}`}
        key={theme}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My {theme === "designer" ? "Design" : "Development"} Portfolio
      </motion.h3>

      <div className="flex justify-center mb-12 space-x-6">
        {["website", "data", "random", "blog"].map((category) => (
          <motion.button
            key={category}
            className={`text-lg hover:text-[${primaryColor}] transition-colors capitalize ${
              activeCategory === category ? `text-[${primaryColor}] font-medium` : "text-white"
            }`}
            onClick={() => setActiveCategory(category as ProjectCategory)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category === "website"
              ? theme === "designer"
                ? "Websites"
                : "Web Apps"
              : category === "data"
                ? theme === "designer"
                  ? "Data Science"
                  : "AI/ML"
                : category === "random"
                  ? theme === "designer"
                    ? "Random"
                    : "Experiments"
                  : "Blog"}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        key={`${theme}-${activeCategory}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`relative overflow-hidden rounded-lg ${
              theme === "designer" ? "bg-[#1A1A1A]" : "bg-gray-900"
            } group`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              rotateY: theme === "developer" ? 5 : 0,
            }}
          >
            {theme === "developer" && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                    "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              />
            )}

            <div className="aspect-video relative overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {theme === "developer" && project.tech && (
                <div className="absolute top-2 right-2 flex flex-wrap gap-1">
                  {project.tech.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-blue-500/80 text-white rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{project.description}</p>

              {theme === "developer" && project.tech && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {project.url && (
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center text-sm font-medium ${
                    theme === "designer" ? "text-[#F27935]" : "text-blue-400"
                  } hover:underline`}
                  whileHover={{ x: 5 }}
                >
                  View Project →
                </motion.a>
              )}
            </div>

            {theme === "developer" && (
              <motion.div
                className="absolute inset-0 border border-blue-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 30px rgba(139, 92, 246, 0.3)",
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}