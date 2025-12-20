"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sidebar } from "@/components/dashboard/sidebar"
import { TopBar } from "@/components/dashboard/top-bar"
import { PulseMap } from "@/components/dashboard/pulse-map"
import { FinancialROI } from "@/components/dashboard/financial-roi"
import { MissionManager } from "@/components/dashboard/mission-manager"

type View = "pulse" | "financials" | "missions"

export default function Dashboard() {
  const [activeView, setActiveView] = useState<View>("pulse")
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)

  return (
    <div className="min-h-screen mesh-gradient flex">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      <div className="flex-1 flex flex-col">
        <TopBar />

        <main className="flex-1 p-6 overflow-auto">
          <AnimatePresence mode="wait">
            {activeView === "pulse" && (
              <motion.div
                key="pulse"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PulseMap selectedDepartment={selectedDepartment} setSelectedDepartment={setSelectedDepartment} />
              </motion.div>
            )}

            {activeView === "financials" && (
              <motion.div
                key="financials"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <FinancialROI />
              </motion.div>
            )}

            {activeView === "missions" && (
              <motion.div
                key="missions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <MissionManager />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
