"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import AnimatedText from "./components/animated-text"
import PortfolioSection from "./components/portfolio-section"
import ContactSection from "./components/contact-section"
import ScrollToTop from "./components/scroll-to-top"
import { motion, useScroll, useSpring } from "framer-motion"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Smooth scroll to section when clicking on nav links
  useEffect(() => {
    const handleNavClick = (e) => {
      const target = e.target
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

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#F27935] z-50 origin-left" style={{ scaleX }} />
       
      {/* Navigation */}
      <nav className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-[#F27935] text-2xl font-bold">
            Portfolio
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-[#F27935]">
              Home
            </Link>
            <Link href="#about" className="text-white hover:text-[#F27935]">
              About
            </Link>
            <Link href="#resume" className="text-white hover:text-[#F27935]">
              Resume
            </Link>
            <Link href="#skills" className="text-white hover:text-[#F27935]">
              Skills
            </Link>
            <Link href="#portfolio" className="text-white hover:text-[#F27935]">
              Portfolio
            </Link>
            <Link href="#contact" className="text-white hover:text-[#F27935]">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="container mx-auto py-16 px-4 bg-[#1A1A1A] rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <AnimatedText />
            <h1 className="text-xl md:text-2xl font-medium mb-6 text-white">I like making cool stuff</h1>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <motion.div
              className="relative w-64 h-64"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Image
                src="/becca.png"
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
            <h3 className="text-[#F27935] text-xl mb-4">About Me</h3>
            <h2 className="text-4xl font-bold mb-6">Front-end Developer & Data Enthusiast</h2>
            <p className="text-gray-400 mb-6">
              I began my journey as a self-taught developer after joining a scientific club at university, where I had
              the opportunity to take part in technical courses and hands-on projects that allowed me to build
              real-world experience. With an academic background in E-Management and Administration, I discovered a
              strong interest in data science and business intelligence. These fields not only enhanced my technical
              skill set but also strengthened my business acumen, providing me with deeper market insight and improving
              my ability to make data-driven decisions.
            </p>
          </div>
          <motion.div
            className="md:w-1/2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Image
            src="/becca.png"
            alt="Nature scene"
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
        className="container mx-auto py-16 px-4 bg-[#1A1A1A] rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-[#F27935] text-xl mb-4">My Resume</h3>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h4 className="text-[#F27935] uppercase mb-4">EXPERIENCE</h4>
            <h2 className="text-4xl font-bold mb-8">
              4 Years experience in Marketing and Networking <span className="text-[#F27935]">Fields</span>
            </h2>
          </div>
          <div className="md:w-1/2">
            <div className="relative border-l border-gray-700 pl-8 pb-12">
              <motion.div
                className="mb-8 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="absolute -left-10 w-5 h-5 bg-white rounded-full"></div>
                <h3 className="text-xl font-bold">multi-level marketing (MLM) </h3>
                <p className="text-sm text-gray-400">Forever Living Products (2021 - 2022)</p>
              </motion.div>

              <motion.div
                className="mb-8 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute -left-10 w-5 h-5 bg-white rounded-full"></div>
                <h3 className="text-xl font-bold">External Relationship Department
                </h3>
                <p className="text-sm text-gray-400">Micro Club Usthb (2022 - 2025)</p>
              </motion.div>

              <motion.div
                className="mb-8 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="absolute -left-10 w-5 h-5 bg-white rounded-full"></div>
                <h3 className="text-xl font-bold">Customer Service 
                </h3>
                <p className="text-sm text-gray-400">Call Center ooredoo 2024</p>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="absolute -left-10 w-5 h-5 bg-white rounded-full"></div>
                <h3 className="text-xl font-bold">InspirationTuts3D</h3>
                <p className="text-sm text-gray-400">Sales Manager (2024 - 2025)</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="container mx-auto py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-[#F27935] text-xl mb-4">Tech Stack</h3>
        <h2 className="text-4xl font-bold mb-8">My Skills</h2>

        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-marquee">
            <div className="flex-shrink-0 w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
              <Image src="/nextjs.png" alt="Next.js logo" width={50} height={50} />
            </div>
            <div className="flex-shrink-0 w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
              <Image src="/powerbi.png" alt="Power BI" width={50} height={50} />
            </div>
            <div className="flex-shrink-0 w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
            <Image src="/PyTorch.png" alt="PyTorch" width={50} height={50} />
            </div>
            <div className="flex-shrink-0 w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
            <Image src="/R.png" alt="R Language" width={50} height={50} />
            </div>
            <div className="flex-shrink-0 w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
            <Image src="/seaborn.svg" alt="Seaborn" width={50} height={50} />
            </div>
            <div className="flex-shrink-0 w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
            <Image src="/Tableaul.png" alt="Tableau" width={50} height={50} />
            </div>
            <div className="flex-shrink-0 w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
              <Image src="/Tailwind.png" alt="Tailwind" width={50} height={50} />
            </div>
            <div className="flex-shrink-0 w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
            <Image src="/linux.png" alt="Linux" width={50} height={50} />
            </div>

            {/* Duplicate for infinite scroll effect */}
            <div className="flex-shrink-0 w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
            <Image src="/js.png" alt="JavaScript" width={50} height={50} />
            </div>
            <div className="flex-shrink-0 w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
            <Image src="/pandas.png" alt="Pandas" width={50} height={50} />
            </div>
            <div className="flex-shrink-0 w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
            <Image src="/postgress.png" alt="PostgreSQL" width={50} height={50} />
            </div>
            <div className="flex-shrink-0 w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
            <Image src="/python.png" alt="Python" width={50} height={50} />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <PortfolioSection />
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

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  )
}