"use client"

import { motion } from "framer-motion"
import { LayoutDashboard, DollarSign, Target, Users, Settings, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

type View = "pulse" | "financials" | "missions"

interface SidebarProps {
  activeView: View
  setActiveView: (view: View) => void
}

const navItems = [
  { id: "pulse", icon: Activity, label: "Pulse Map" },
  { id: "financials", icon: DollarSign, label: "Financials" },
  { id: "missions", icon: Target, label: "Missions" },
  { id: "directory", icon: Users, label: "Directory" },
  { id: "settings", icon: Settings, label: "Settings" },
]

export function Sidebar({ activeView, setActiveView }: SidebarProps) {
  return (
    <motion.aside
      initial={{ x: -80 }}
      animate={{ x: 0 }}
      className="w-20 glass border-r border-border/30 flex flex-col items-center py-6 gap-2"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-8 glow-cyan">
        <LayoutDashboard className="w-6 h-6 text-primary" />
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => {
          const isActive = activeView === item.id
          const Icon = item.icon
          const isClickable = ["pulse", "financials", "missions"].includes(item.id)

          return (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => isClickable && setActiveView(item.id as View)}
              className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 relative group",
                isActive
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                !isClickable && "opacity-50 cursor-not-allowed",
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-primary/20 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon className="w-5 h-5 relative z-10" />

              <div className="absolute left-16 px-3 py-1.5 glass-card rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                {item.label}
              </div>
            </motion.button>
          )
        })}
      </nav>
    </motion.aside>
  )
}
