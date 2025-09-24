"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useSpring } from "framer-motion"
import { useTheme } from "../../contexts/theme-context" 

// Designer Components
import HeroDesigner from "../../components/marketing/hero-designer" 
import PortfolioDesigner from "../../components/marketing/potfolio-designer" 
import ServicesSection from "../../components/marketing/services" 

// Developer Components
import HeroDeveloper from "../../components/developer/hero-dev" 
import PortfolioDeveloper from "../../components/developer/portfolio-dev"

// Shared Components
import ContactSection from "../../components/contact" 
import ScrollToTop from "../../components/scroll-to-top" 
import ThemeSwitcher from "../../components/theme-switcher" 

export default function Home() {
  const { theme, isTransitioning } = useTheme()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Smooth scroll to section when clicking on nav links
  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")
        const element = document.querySelector(id || "")
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth",
          })
        }
      }
    }

    document.addEventListener("click", handleNavClick)
    return () => document.removeEventListener("click", handleNavClick)
  }, [])

  const bgClass = theme === "designer" ? "bg-[#121212]" : "bg-black"
  const progressColor = theme === "designer" ? "#F27935" : "#3B82F6"

  return (
    <motion.main
      className={`min-h-screen ${bgClass} text-white transition-colors duration-500`}
      animate={{
        backgroundColor: theme === "designer" ? "#121212" : "#000000",
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Enhanced Transition Overlay */}
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background:
              theme === "designer"
                ? "radial-gradient(circle, #F27935, #E94057, #000)"
                : "radial-gradient(circle, #3B82F6, #8B5CF6, #000)",
          }}
        >
          <motion.div
            className="text-6xl font-bold text-white flex flex-col items-center gap-4"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 360, 720],
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <motion.div
              animate={{
                rotateY: [0, 180, 360],
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              {theme === "designer" ? "🎨" : "💻"}
            </motion.div>
            <motion.p
              className="text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {theme === "designer" ? "Entering Design Mode" : "Entering Developer Mode"}
            </motion.p>
          </motion.div>

          {/* Particle effects */}
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${theme === "designer" ? "bg-orange-400" : "bg-blue-400"}`}
              initial={{
                x: "50vw",
                y: "50vh",
                scale: 0,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 0.5,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{
          scaleX,
          backgroundColor: progressColor,
          boxShadow: theme === "developer" ? `0 0 10px ${progressColor}` : "none",
        }}
      />

      {/* Cyber Grid Background for Developer Theme */}
      {theme === "developer" && (
        <div className="fixed inset-0 opacity-5 pointer-events-none">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>
      )}

      {/* Navigation */}
      <nav className="container mx-auto py-6 px-4 relative z-10">
        <div className="flex justify-between items-center">
          <motion.div
            key={theme}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className={`text-2xl font-bold ${
                theme === "designer"
                  ? "text-[#F27935]"
                  : "text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"
              }`}
            >
              {theme === "designer" ? "BADSHA" : "KAIS.DEV"}
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Resume", "Services", "Skills", "Portfolio", "Contact"].map((item, index) => (
              <motion.div
                key={`${theme}-${item}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className={`hover:text-[${theme === "designer" ? "#F27935" : "#3B82F6"}] transition-colors relative group`}
                >
                  {item}
                  {theme === "developer" && (
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section - Theme Specific */}
      {theme === "designer" ? <HeroDesigner /> : <HeroDeveloper />}

      {/* About Section */}
      <motion.section
        id="about"
        className="container mx-auto py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h3 className={`text-xl mb-4 ${theme === "designer" ? "text-[#F27935]" : "text-blue-400"}`}>About Me</h3>
            <h2 className="text-4xl font-bold mb-6">
              {theme === "designer" ? "Front-end Developer & Data Enthusiast" : "Full-Stack Developer & AI Engineer"}
            </h2>
            <p className="text-gray-400 mb-6">
              {theme === "designer"
                ? "I began my journey as a self-taught developer after joining a scientific club at university, where I had the opportunity to take part in technical courses and hands-on projects that allowed me to build real-world experience. With an academic background in E-Management and Administration, I discovered a strong interest in data science and business intelligence."
                : "Passionate about cutting-edge technology and innovation, I specialize in building scalable web applications and AI-powered solutions. With expertise in modern frameworks and machine learning, I create digital experiences that push the boundaries of what's possible in web development."}
            </p>
          </div>
          <motion.div
            className="md:w-1/2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="About image"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Resume Section */}
      <motion.section
        id="resume"
        className={`container mx-auto py-16 px-4 ${theme === "designer" ? "bg-[#1A1A1A]" : "bg-gray-900"} rounded-lg`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className={`text-xl mb-4 ${theme === "designer" ? "text-[#F27935]" : "text-blue-400"}`}>My Resume</h3>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h4 className={`uppercase mb-4 ${theme === "designer" ? "text-[#F27935]" : "text-blue-400"}`}>
              EXPERIENCE
            </h4>
            <h2 className="text-4xl font-bold mb-8">
              More than 6 years experience as a{" "}
              <span className={theme === "designer" ? "text-[#F27935]" : "text-blue-400"}>
                {theme === "designer" ? "Designer" : "Developer"}
              </span>
            </h2>
          </div>
          <div className="md:w-1/2">
            <div className="relative border-l border-gray-700 pl-8 pb-12">
              {[
                { title: "Pentagon Design", role: "Graphic Designer", period: "(2017 - 2019)" },
                { title: "Animate Studio", role: "Graphic Designer", period: "(2015 - 2017)" },
                { title: "Cute Studio", role: "Graphic Designer", period: "(2014 - 2015)" },
                { title: "City Printing", role: "Graphic Designer", period: "(2013 - 2014)" },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  className="mb-8 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute -left-10 w-5 h-5 bg-white rounded-full"></div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-sm text-gray-400">
                    {job.role} {job.period}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              <div className={`w-2 h-2 rounded-full ${theme === "designer" ? "bg-[#F27935]" : "bg-blue-400"}`}></div>
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section - Designer Theme Only */}
      {theme === "designer" && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <ServicesSection />
        </motion.div>
      )}

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="container mx-auto py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className={`text-xl mb-4 ${theme === "designer" ? "text-[#F27935]" : "text-blue-400"}`}>Tech Stack</h3>
        <h2 className="text-4xl font-bold mb-8">My Skills</h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-12 animate-marquee"
            animate={{
              x: theme === "developer" ? [0, -10, 0] : 0,
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <motion.div
                key={i}
                className={`flex-shrink-0 w-20 h-20 ${
                  theme === "designer"
                    ? "bg-white/10"
                    : "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                } rounded-lg flex items-center justify-center relative overflow-hidden`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {theme === "developer" && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20"
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.1,
                    }}
                  />
                )}
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt={`Tech ${i + 1}`}
                  width={50}
                  height={50}
                  className="relative z-10"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Section - Theme Specific */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        {theme === "designer" ? <PortfolioDesigner /> : <PortfolioDeveloper />}
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <ContactSection />
      </motion.div>

      {/* Theme Switcher */}
      <ThemeSwitcher />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </motion.main>
  )
}
