"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Theme = "designer" | "developer"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  isTransitioning: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("designer")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const toggleTheme = () => {
    setIsTransitioning(true)
    // Longer animation duration for prettier effect
    setTimeout(() => {
      setTheme(theme === "designer" ? "developer" : "designer")
      setTimeout(() => setIsTransitioning(false), 1500) // Extended duration
    }, 800) // Extended initial delay
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}