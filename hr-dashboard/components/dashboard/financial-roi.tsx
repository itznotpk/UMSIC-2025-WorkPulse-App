"use client"

import type React from "react"

import { motion } from "framer-motion"
import { TrendingDown, TrendingUp, Shield, Heart, DollarSign, AlertTriangle } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

const premiumData = [
  { month: "Jan", predicted: 45000, actual: 42000 },
  { month: "Feb", predicted: 47000, actual: 41500 },
  { month: "Mar", predicted: 49000, actual: 41000 },
  { month: "Apr", predicted: 52000, actual: 40500 },
  { month: "May", predicted: 55000, actual: 40000 },
  { month: "Jun", predicted: 58000, actual: 39500 },
]

const savingsData = [
  { month: "Jan", savings: 8000 },
  { month: "Feb", savings: 12000 },
  { month: "Mar", savings: 18000 },
  { month: "Apr", savings: 32000 },
  { month: "May", savings: 45000 },
  { month: "Jun", savings: 57600 },
]

export function FinancialROI() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-2xl font-semibold text-balance">CFO Financial ROI Dashboard</h2>
        <p className="text-muted-foreground mt-1">Proving employee wellness is a measurable financial asset</p>
      </motion.div>

      {/* Hero Savings Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="glass-card rounded-2xl p-8 text-center relative overflow-hidden glow-cyan"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="relative z-10">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Net Wellness Savings (YTD)</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-6xl font-bold bg-gradient-to-r from-chart-1 to-accent bg-clip-text text-transparent">
              RM 57,600
            </span>
            <TrendingUp className="w-8 h-8 text-chart-1" />
          </div>
          <p className="text-muted-foreground mt-2">24% increase from previous quarter</p>
        </div>
      </motion.div>

      {/* ROI Formula - 3 Column Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-destructive/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-destructive" />
            </div>
            <h3 className="font-semibold">Risks Mitigated</h3>
          </div>
          <div className="space-y-3">
            <RiskCard
              icon={<AlertTriangle className="w-4 h-4" />}
              label="Hypertension Flags"
              value="12"
              color="text-destructive"
            />
            <RiskCard icon={<Heart className="w-4 h-4" />} label="Burnout Preventions" value="8" color="text-chart-3" />
            <RiskCard
              icon={<TrendingDown className="w-4 h-4" />}
              label="Early Stress Interventions"
              value="23"
              color="text-chart-1"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-chart-3/20 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-chart-3" />
            </div>
            <h3 className="font-semibold">Intervention Cost</h3>
          </div>
          <div className="text-center py-6">
            <p className="text-sm text-muted-foreground mb-2">Total Spent on GP/Consults</p>
            <span className="text-4xl font-bold text-chart-3">RM 2,400</span>
            <p className="text-xs text-muted-foreground mt-4">48 consultations completed</p>
            <p className="text-xs text-muted-foreground">Avg RM 50 per session</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-chart-1/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-chart-1" />
            </div>
            <h3 className="font-semibold">Avoided Loss</h3>
          </div>
          <div className="text-center py-6">
            <p className="text-sm text-muted-foreground mb-2">Projected Sick Leave Savings</p>
            <span className="text-4xl font-bold text-chart-1">RM 60,000</span>
            <p className="text-xs text-muted-foreground mt-4">Est. 120 sick days prevented</p>
            <p className="text-xs text-muted-foreground">Avg RM 500 per day cost</p>
          </div>
        </motion.div>
      </div>

      {/* Premium Comparison Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-lg">Insurance Premium Impact</h3>
            <p className="text-sm text-muted-foreground">Predicted vs Adjusted Premium</p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <span className="text-muted-foreground">Predicted Hike</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-chart-1" />
              <span className="text-muted-foreground">Current Adjusted</span>
            </div>
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={premiumData}>
              <defs>
                <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.65 0.25 25)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.65 0.25 25)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.7 0.2 180)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.7 0.2 180)" stopOpacity={0} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.35 0.02 260 / 0.2)" />
              <XAxis dataKey="month" stroke="oklch(0.65 0 0)" fontSize={12} />
              <YAxis stroke="oklch(0.65 0 0)" fontSize={12} tickFormatter={(value) => `RM${value / 1000}k`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "oklch(0.15 0.02 260 / 0.9)",
                  border: "1px solid oklch(0.35 0.02 260 / 0.3)",
                  borderRadius: "12px",
                  color: "oklch(0.95 0 0)",
                }}
                formatter={(value: number) => [`RM ${value.toLocaleString()}`, ""]}
              />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="oklch(0.65 0.25 25)"
                strokeWidth={2}
                dot={{ fill: "oklch(0.65 0.25 25)", strokeWidth: 0 }}
                filter="url(#glow)"
                name="Predicted Premium"
              />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="oklch(0.7 0.2 180)"
                strokeWidth={2}
                dot={{ fill: "oklch(0.7 0.2 180)", strokeWidth: 0 }}
                filter="url(#glow)"
                name="Adjusted Premium"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Cumulative Savings Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-card rounded-2xl p-6"
      >
        <div className="mb-6">
          <h3 className="font-semibold text-lg">Cumulative Wellness Savings</h3>
          <p className="text-sm text-muted-foreground">Monthly progression of cost avoidance</p>
        </div>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={savingsData}>
              <defs>
                <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.65 0.2 180)" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="oklch(0.65 0.2 180)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.35 0.02 260 / 0.2)" />
              <XAxis dataKey="month" stroke="oklch(0.65 0 0)" fontSize={12} />
              <YAxis stroke="oklch(0.65 0 0)" fontSize={12} tickFormatter={(value) => `RM${value / 1000}k`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "oklch(0.15 0.02 260 / 0.9)",
                  border: "1px solid oklch(0.35 0.02 260 / 0.3)",
                  borderRadius: "12px",
                  color: "oklch(0.95 0 0)",
                }}
                formatter={(value: number) => [`RM ${value.toLocaleString()}`, "Savings"]}
              />
              <Area
                type="monotone"
                dataKey="savings"
                stroke="oklch(0.65 0.2 180)"
                strokeWidth={2}
                fill="url(#savingsGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  )
}

interface RiskCardProps {
  icon: React.ReactNode
  label: string
  value: string
  color: string
}

function RiskCard({ icon, label, value, color }: RiskCardProps) {
  return (
    <div className="flex items-center justify-between glass rounded-xl p-3">
      <div className="flex items-center gap-3">
        <div className={color}>{icon}</div>
        <span className="text-sm">{label}</span>
      </div>
      <span className={`text-xl font-bold ${color}`}>{value}</span>
    </div>
  )
}
