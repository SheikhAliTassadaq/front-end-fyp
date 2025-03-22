"use client"

import type React from "react"

import { useState } from "react"
import { Bot, Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your AI admission assistant. How can I help you today?",
      sender: "bot",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponses = [
        "I can help you with the application process. What specific information do you need?",
        "The deadline for fall admissions is August 15th. Make sure to submit all required documents before then.",
        "You can upload your transcripts in PDF format through the student portal after registration.",
        "Our AI system will analyze your application and provide recommendations based on your profile.",
        "The application fee is $50, but we offer fee waivers for eligible students.",
      ]

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: "bot",
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  return (
    <div className="border rounded-xl overflow-hidden bg-background shadow-sm">
      <div className="border-b p-4 flex items-center gap-2 bg-muted/30">
        <Bot className="h-5 w-5 text-primary" />
        <h3 className="font-medium">AI Admission Assistant</h3>
      </div>

      <div className="h-[400px] overflow-y-auto p-4 flex flex-col gap-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={cn("flex items-start gap-2 max-w-[80%]", message.sender === "user" ? "ml-auto" : "mr-auto")}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full shrink-0",
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground order-2"
                    : "bg-muted text-muted-foreground",
                )}
              >
                {message.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
              </div>
              <div
                className={cn(
                  "rounded-lg p-3",
                  message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
                )}
              >
                {message.text}
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-2 max-w-[80%] mr-auto"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-muted text-muted-foreground">
                <Bot className="h-4 w-4" />
              </div>
              <div className="rounded-lg p-3 bg-muted text-foreground">
                <span className="flex gap-1">
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                    .
                  </span>
                  <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                    .
                  </span>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="border-t p-4 flex gap-2">
        <Input
          placeholder="Ask about admissions..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1"
        />
        <Button onClick={handleSend} disabled={!input.trim() || isTyping}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

