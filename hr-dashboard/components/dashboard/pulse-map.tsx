"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, X, TrendingUp, Moon, Heart } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface PulseMapProps {
  selectedDepartment: string | null
  setSelectedDepartment: (dept: string | null) => void
}

const departments = [
  { id: "sales", name: "Sales", stress: 89, status: "alert", employees: 24, participation: 92 },
  { id: "it", name: "IT", stress: 42, status: "stable", employees: 18, participation: 98 },
  { id: "finance", name: "Finance", stress: 65, status: "warning", employees: 12, participation: 88 },
  { id: "hr", name: "HR", stress: 38, status: "stable", employees: 8, participation: 100 },
  { id: "ops", name: "Operations", stress: 71, status: "warning", employees: 32, participation: 94 },
]

const burnoutDrivers: Record<string, { driver: string; severity: string }[]> = {
  sales: [
    { driver: "Low Sleep Quality", severity: "high" },
    { driver: "Elevated Morning HRV", severity: "high" },
    { driver: "Extended Work Hours", severity: "medium" },
  ],
  it: [
    { driver: "Sedentary Behavior", severity: "low" },
    { driver: "Screen Time", severity: "medium" },
  ],
  finance: [
    { driver: "End-of-Quarter Stress", severity: "high" },
    { driver: "Irregular Break Patterns", severity: "medium" },
  ],
  hr: [{ driver: "Meeting Overload", severity: "low" }],
  ops: [
    { driver: "Physical Strain", severity: "medium" },
    { driver: "Shift Irregularity", severity: "high" },
  ],
}

export function PulseMap({ selectedDepartment, setSelectedDepartment }: PulseMapProps) {
  const [timeRange, setTimeRange] = useState("7d")

  const selectedDept = departments.find((d) => d.id === selectedDepartment)

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-2xl font-semibold text-balance">Organization Health Overview</h2>
          <p className="text-muted-foreground mt-1">Real-time wellness monitoring across departments</p>
        </div>

        <div className="flex items-center gap-3">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40 glass-card border-border/30">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="30d">Last 30 Days</SelectItem>
              <SelectItem value="qtd">Quarter to Date</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      <div className="flex gap-6">
        <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {departments.map((dept, index) => (
            <DepartmentCube
              key={dept.id}
              department={dept}
              index={index}
              isSelected={selectedDepartment === dept.id}
              onClick={() => setSelectedDepartment(selectedDepartment === dept.id ? null : dept.id)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedDept && (
            <motion.div
              initial={{ opacity: 0, x: 20, width: 0 }}
              animate={{ opacity: 1, x: 0, width: 320 }}
              exit={{ opacity: 0, x: 20, width: 0 }}
              className="glass-card rounded-2xl p-6 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">{selectedDept.name} Insights</h3>
                <button
                  onClick={() => setSelectedDepartment(null)}
                  className="p-1 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-destructive" />
                    <span className="text-sm font-medium">Top Burnout Drivers</span>
                  </div>
                  <div className="space-y-2">
                    {burnoutDrivers[selectedDept.id]?.map((driver, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{driver.driver}</span>
                        <span
                          className={cn(
                            "px-2 py-0.5 rounded text-xs",
                            driver.severity === "high" && "bg-destructive/20 text-destructive",
                            driver.severity === "medium" && "bg-chart-3/20 text-chart-3",
                            driver.severity === "low" && "bg-chart-1/20 text-chart-1",
                          )}
                        >
                          {driver.severity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-4 h-4 text-chart-1" />
                    <span className="text-sm font-medium">Participation Rate</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold">{selectedDept.participation}%</span>
                    <span className="text-sm text-muted-foreground mb-1">of staff completed daily mission</span>
                  </div>
                </div>

                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Moon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Avg Sleep Quality</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${100 - selectedDept.stress}%` }}
                      className="h-full bg-gradient-to-r from-chart-1 to-accent rounded-full"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{100 - selectedDept.stress}% above baseline</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

interface DepartmentCubeProps {
  department: (typeof departments)[0]
  index: number
  isSelected: boolean
  onClick: () => void
}

function DepartmentCube({ department, index, isSelected, onClick }: DepartmentCubeProps) {
  const glowClass =
    department.status === "alert" ? "glow-red" : department.status === "warning" ? "glow-amber" : "glow-green"

  const statusColor =
    department.status === "alert"
      ? "text-destructive"
      : department.status === "warning"
        ? "text-chart-3"
        : "text-chart-1"

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "glass-card rounded-2xl p-6 text-left transition-all duration-300 relative overflow-hidden",
        isSelected && "ring-2 ring-primary",
        glowClass,
      )}
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            department.status === "alert" && "from-destructive/30 to-transparent",
            department.status === "warning" && "from-chart-3/30 to-transparent",
            department.status === "stable" && "from-chart-1/30 to-transparent",
          )}
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">{department.name}</h3>
          <span className={cn("text-xs px-2 py-1 rounded-full bg-secondary/50", statusColor)}>{department.status}</span>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Stress Level</p>
            <div className="flex items-end gap-2">
              <span className={cn("text-3xl font-bold", statusColor)}>{department.stress}%</span>
            </div>
            <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${department.stress}%` }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                className={cn(
                  "h-full rounded-full",
                  department.status === "alert" && "bg-destructive",
                  department.status === "warning" && "bg-chart-3",
                  department.status === "stable" && "bg-chart-1",
                )}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{department.employees} employees</span>
            <span className="text-chart-1">{department.participation}% active</span>
          </div>
        </div>
      </div>
    </motion.button>
  )
}
