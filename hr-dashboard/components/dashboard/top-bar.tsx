"use client"

import { motion } from "framer-motion"
import { Search, Bell, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function TopBar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-16 glass border-b border-border/30 flex items-center justify-between px-6"
    >
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          WorkPulse AI
        </h1>
        <Badge variant="outline" className="text-xs border-primary/30 text-primary">
          HR Command Center
        </Badge>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search employees, departments..."
            className="w-64 h-9 pl-9 pr-4 rounded-lg bg-secondary/50 border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-2 rounded-lg hover:bg-secondary/50 transition-colors"
        >
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full animate-pulse" />
        </motion.button>

        <div className="flex items-center gap-2 pl-4 border-l border-border/30">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/hr-admin-professional.jpg" />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-sm font-medium">Sarah Admin</p>
            <p className="text-xs text-muted-foreground">HR Director</p>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </motion.header>
  )
}
