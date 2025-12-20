"use client"

import Link from "next/link"
import { Home, Trophy, Users, Activity, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface BottomNavProps {
  active: "home" | "missions" | "community" | "health" | "profile"
}

export function BottomNav({ active }: BottomNavProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home", href: "/" },
    { id: "missions", icon: Trophy, label: "Missions", href: "/missions" },
    { id: "community", icon: Users, label: "Community", href: "/community" },
    { id: "health", icon: Activity, label: "Health", href: "/health" },
    { id: "profile", icon: User, label: "Profile", href: "/profile" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border safe-area-inset-bottom">
      <div className="mx-auto max-w-md">
        <nav className="flex items-center justify-between px-1 py-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = active === item.id

            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg transition-all duration-200 min-w-0 flex-1",
                  isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className={cn("w-5 h-5 flex-shrink-0", isActive && "scale-110")} />
                <span className={cn("text-[10px] font-medium truncate max-w-full", isActive && "font-semibold")}>
                  {item.label}
                </span>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
