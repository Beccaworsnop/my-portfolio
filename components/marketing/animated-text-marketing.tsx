"use client"

import { useEffect, useState } from "react"

export default function AnimatedTextDesigner() {
  const [text, setText] = useState("I AM KAIS AMIRA")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const names = ["KAIS AMIRA", "BECCA"]

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % names.length
      const fullText = `I AM ${names[currentIndex]}`

      if (isDeleting) {
        if (text.length > 5) {
          setText(text.substring(0, text.length - 1))
          setTypingSpeed(30)
        } else {
          setIsDeleting(false)
          setLoopNum(loopNum + 1)
          setTypingSpeed(150)
        }
      } else {
        if (text.length < fullText.length) {
          setText(fullText.substring(0, text.length + 1))
          setTypingSpeed(100)
        } else {
          setTypingSpeed(1500)
          setIsDeleting(true)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, names])

  return (
    <h2 className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-[#F27935] to-[#E94057] text-transparent bg-clip-text font-bold">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  )
}
