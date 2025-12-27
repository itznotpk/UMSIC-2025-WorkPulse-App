"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Trophy, Zap, Moon, Target, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts"

const leaderboardData = [
  { department: "IT", score: 2450, color: "oklch(0.7 0.2 180)" },
  { department: "HR", score: 2280, color: "oklch(0.7 0.15 250)" },
  { department: "Finance", score: 1980, color: "oklch(0.75 0.2 85)" },
  { department: "Ops", score: 1750, color: "oklch(0.65 0.2 280)" },
  { department: "Sales", score: 1420, color: "oklch(0.65 0.25 25)" },
]

const activeMissions = [
  {
    id: 1,
    name: "Deep Sleep Sprint",
    metric: "Highest Avg Sleep",
    reward: "Friday Pizza & Early Exit",
    progress: 68,
    endDate: "Dec 20",
  },
  {
    id: 2,
    name: "Heart Health Week",
    metric: "Best HRV Improvement",
    reward: "Gym Membership Raffle",
    progress: 42,
    endDate: "Dec 25",
  },
  {
    id: 3,
    name: "Posture Perfect",
    metric: "Most Ergo-Checks",
    reward: "Standing Desk Upgrade",
    progress: 85,
    endDate: "Dec 18",
  },
]

export function MissionManager() {
  const [challengeName, setChallengeName] = useState("")
  const [selectedMetric, setSelectedMetric] = useState("")
  const [reward, setReward] = useState("")

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-2xl font-semibold text-balance">Mission & Gamification Manager</h2>
        <p className="text-muted-foreground mt-1">Create challenges and track departmental competitions</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mission Builder */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Mission Builder</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Challenge Name</label>
              <div className="relative">
                <Zap className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-chart-3" />
                <Input
                  placeholder="e.g., Deep Sleep Sprint"
                  value={challengeName}
                  onChange={(e) => setChallengeName(e.target.value)}
                  className="pl-10 glass border-border/30 focus-visible:ring-primary/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Metric Selection</label>
              <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                <SelectTrigger className="glass border-border/30">
                  <Moon className="w-4 h-4 mr-2 text-primary" />
                  <SelectValue placeholder="Select a metric" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sleep">Highest Avg Sleep</SelectItem>
                  <SelectItem value="hrv">Best HRV Improvement</SelectItem>
                  <SelectItem value="ergo">Most Ergo-Checks</SelectItem>
                  <SelectItem value="steps">Daily Step Count</SelectItem>
                  <SelectItem value="breaks">Break Compliance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Reward</label>
              <div className="relative">
                <Gift className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-chart-1" />
                <Input
                  placeholder="e.g., Friday Pizza & Early Exit"
                  value={reward}
                  onChange={(e) => setReward(e.target.value)}
                  className="pl-10 glass border-border/30 focus-visible:ring-primary/50"
                />
              </div>
            </div>

            <Button className="w-full mt-4 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30">
              <Plus className="w-4 h-4 mr-2" />
              Create Mission
            </Button>
          </div>
        </motion.div>

        {/* Live Leaderboard */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-chart-3/20 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-chart-3" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Wellness Cup Leaderboard</h3>
              <p className="text-xs text-muted-foreground">Live department rankings</p>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leaderboardData} layout="vertical">
                <XAxis type="number" stroke="oklch(0.65 0 0)" fontSize={12} />
                <YAxis type="category" dataKey="department" stroke="oklch(0.65 0 0)" fontSize={12} width={60} />
                <Bar dataKey="score" radius={[0, 8, 8, 0]} animationDuration={1000}>
                  {leaderboardData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4 glass rounded-xl p-3">
            <Trophy className="w-5 h-5 text-chart-3" />
            <span className="text-sm">
              IT Department leads with <strong className="text-chart-1">2,450 pts</strong>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Active Missions */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <h3 className="font-semibold text-lg mb-4">Active Missions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {activeMissions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass-card rounded-2xl p-5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground">Ends {mission.endDate}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-chart-1/20 text-chart-1">Active</span>
                </div>

                <h4 className="font-semibold mb-1">{mission.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{mission.metric}</p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground font-medium">{mission.progress}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${mission.progress}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border/30">
                  <div className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-chart-3" />
                    <span className="text-xs text-muted-foreground">{mission.reward}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
