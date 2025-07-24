"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("website")

  // Sample projects data
  const projects = [
    // Website Projects
    {
      id: 1,
      title: "Health Care Website",
      category: "website",
      image: "/placeholder.svg?height=300&width=400",
      description: "A website about having personal space and planning",
    },
    {
      id: 2,
      title: "Billing Website",
      category: "website",
      image: "/placeholder.svg?height=300&width=400",
      description: "a third party website for linking your wallets to pay online",
    },
    {
      id: 3,
      title: "DataWave Insights",
      category: "website",
      image: "/placeholder.svg?height=300&width=400",
      description: "a website to showcase the data center services",
    },
    {
      id: 4,
      title: "Smart Blood Bank",
      category: "website",
      image: "/placeholder.svg?height=300&width=400",
      description: "a SAAS software for donations requests and services to hospitals for blood monitoring ",
    },
    
    // Data Science Projects
    {
      id: 11,
      title: "Algerian-Labor-EDA",
      category: "data",
      image: "/placeholder.svg?height=300&width=400",
      description: "This EDA demonstrates that Algeria's labor market data tells a story far richer than employment statistics alone. The patterns of missing data, the evolution of gender-disaggregated statistics, and the cyclical nature of data quality all reflect the country's complex journey through socialism, civil conflict, economic reform, and political transformation. The analysis reveals thr",
    },
    {
      id: 22,
      title: "Algerian Market spread prediction",
      category: "data",
      image: "/placeholder.svg?height=300&width=400",
      description: "This project analyzes Algerian market price data to predict price relative spreads between lower and upper bounds, providing insights into market volatility and price variations across different product categories This project analyzes Algerian market price data to predict price relative spreads between jjtt  ",
    },
    {
      id: 33,
      title: "Air-Quality-Prediction",
      category: "data",
      image: "/placeholder.svg?height=300&width=400",
      description: "Welcome to the Air Quality Prediction Challenge! This competition focuses on assessing and predicting air quality across various regions. Using a dataset of 5,000 samples, which includes key environmental and demographic factors influencing pollution levels, your task is to develop a predictive model. The goal is to accurately forecast air quality levels, enabling better resource  .",
    },
    {
      id: 44,
      title: "pizza-data-analysis",
      category: "data",
      image: "/placeholder.svg?height=300&width=400",
      description: "Welcome to the Air Quality Prediction Challenge! This competition focuses on assessing and predicting air quality across various regions. Using a dataset of 5,000 samples, which includes key environmental and demographic factors influencing pollution levels, your task is to develop a predictive model. The goal is to accurately forecast air quality levels, enabling better resource ",
    },
    {
      id: 55,
      title: "Breast cancer detector",
      category: "data",
      image: "/placeholder.svg?height=300&width=400",
      description: "Welcome to the Air Quality Prediction Challenge! This competition focuses on assessing and predicting air quality across various regions. Using a dataset of 5,000 samples, which includes key environmental and demographic factors influencing pollution levels, your task is to develop a predictive model. The goal is to accurately forecast air quality levels, enabling better resource",
    },

    // Random Projects
    {
      id: 111,
      title: "discord chatbot",
      category: "random",
      image: "/placeholder.svg?height=300&width=400",
      description: "UI/UX design for a fitness tracking app",
    },
    {
      id: 222,
      title: "Game-jam",
      category: "random",
      image: "/placeholder.svg?height=300&width=400",
      description: "A game that switches from 2D to 3D to solve puzzels",
    },
    {
      id: 333,
      title: "GPT pokeball ESP32",
      category: "random",
      image: "/placeholder.svg?height=300&width=400",
      description: "2D platformer game built with Unity",
    },
    {
      id: 444,
      title: "linux hyprland racing",
      category: "random",
      image: "/placeholder.svg?height=300&width=400",
      description: "a cutsomized desktop from scratch",
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

  const filteredProjects = projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="container mx-auto py-16 px-4">
      <h3 className="text-[#F27935] text-xl mb-8 text-center">My Portfolio</h3>

      <div className="flex justify-center mb-12 space-x-6">
        <button
          className={`text-lg hover:text-[#F27935] transition-colors ${activeCategory === "website" ? "text-[#F27935] font-medium" : "text-white"}`}
          onClick={() => setActiveCategory("website")}
        >
          Website
        </button>
        <button
          className={`text-lg hover:text-[#F27935] transition-colors ${activeCategory === "data" ? "text-[#F27935] font-medium" : "text-white"}`}
          onClick={() => setActiveCategory("data")}
        >
          Data Science/Analysis
        </button>
        <button
          className={`text-lg hover:text-[#F27935] transition-colors ${activeCategory === "random" ? "text-[#F27935] font-medium" : "text-white"}`}
          onClick={() => setActiveCategory("random")}
        >
          Random Projects
        </button>
        <button
          className={`text-lg hover:text-[#F27935] transition-colors ${activeCategory === "blog" ? "text-[#F27935] font-medium" : "text-white"}`}
          onClick={() => setActiveCategory("blog")}
        >
          Blog
        </button>
      </div>

      {activeCategory === "website" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden rounded-lg bg-[#1A1A1A] aspect-video group"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
              <div className="absolute inset-0 border-2 border-[#F27935] opacity-0 group-hover:opacity-100 transition-opacity z-0 rounded-lg"></div>
            </motion.div>
          ))}
        </div>
      )}

      {activeCategory === "data" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="p-1 bg-gradient-to-r from-[#F27935] to-[#E94057]">
                <div className="bg-[#1A1A1A] p-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <button className="text-[#F27935] text-sm font-medium hover:underline">View Documentation →</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {activeCategory === "random" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="relative rounded-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-video bg-[#1A1A1A] relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-[#F27935] rounded-full w-10 h-10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {activeCategory === "blog" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.a
              key={project.id}
              href={project.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">{project.title}</h3>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  )
}