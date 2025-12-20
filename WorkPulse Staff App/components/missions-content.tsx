"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, Lock, CheckCircle2, Sparkles, Flame, Target } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import Link from "next/link"

export function MissionsContent() {
  const [activePoints] = useState(350)

  return (
    <div className="min-h-screen bg-gradient-to-b from-warning/5 via-background to-background pb-20">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-foreground mb-2">Daily Missions</h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Complete healthy break activities to earn points and boost wellbeing
          </p>
        </div>

        {/* Points Card */}
        <Card className="mb-6 bg-gradient-to-br from-primary/10 to-primary/5 border-2 shadow-md">
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Today's Points</p>
                <p className="text-3xl font-bold text-foreground">{activePoints}</p>
              </div>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-warning/20 flex items-center justify-center">
                <Flame className="w-8 h-8 text-warning" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                <span>Daily Goal Progress</span>
                <span className="font-semibold">7 / 10 missions</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
          </div>
        </Card>

        {/* Active Mission */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold text-foreground mb-3">Active Now</h2>
          <Card className="border-2 border-warning/50 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-warning/15 to-warning/5 p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-warning" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Stand & Stretch</h3>
                    <p className="text-xs text-muted-foreground">2 minutes active break</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-warning/20 text-warning">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-xs font-semibold">2:15</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Reward</span>
                  <span className="font-semibold text-foreground">+50 points</span>
                </div>

                <Link href="/missions/execute/1">
                  <Button className="w-full h-12 text-base font-semibold bg-warning hover:bg-warning/90 text-white">
                    Start Mission
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Upcoming Missions */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold text-foreground mb-3">Coming Up</h2>
          <div className="space-y-3">
            <MissionCard
              title="Walking Break"
              duration="5 minutes"
              points={75}
              availableIn="45 minutes"
              icon={Target}
              locked
            />
            <MissionCard
              title="Hydration Check"
              duration="1 minute"
              points={25}
              availableIn="1 hour 20 min"
              icon={Sparkles}
              locked
            />
            <MissionCard
              title="Eye Rest Exercise"
              duration="3 minutes"
              points={40}
              availableIn="2 hours"
              icon={Target}
              locked
            />
          </div>
        </div>

        {/* Completed Today */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold text-foreground mb-3">Completed Today</h2>
          <div className="space-y-3">
            <CompletedMissionCard title="Morning Stretch" points={50} time="8:30 AM" />
            <CompletedMissionCard title="Posture Check" points={30} time="9:45 AM" />
            <CompletedMissionCard title="Water Break" points={25} time="11:00 AM" />
          </div>
        </div>

        {/* Anti-abuse Notice */}
        <Card className="bg-gradient-to-br from-info/10 to-info/5 border-info/20">
          <div className="p-5">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-info/20 flex items-center justify-center mt-0.5">
                <Lock className="w-4 h-4 text-info" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground mb-1">Why time-sensitive?</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Missions unlock at optimal intervals to ensure real breaks and prevent gaming the system. Your
                  wellbeing is our priority.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <BottomNav active="missions" />
    </div>
  )
}

function MissionCard({
  title,
  duration,
  points,
  availableIn,
  icon: Icon,
  locked,
}: {
  title: string
  duration: string
  points: number
  availableIn: string
  icon: any
  locked?: boolean
}) {
  return (
    <Card className={locked ? "opacity-60" : ""}>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <Icon className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground text-sm mb-0.5">{title}</h3>
              <p className="text-xs text-muted-foreground">{duration}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            {locked && (
              <div className="flex items-center gap-1 text-muted-foreground">
                <Lock className="w-3 h-3" />
                <span className="text-xs font-medium">{availableIn}</span>
              </div>
            )}
            <span className="text-xs font-semibold text-primary">+{points} pts</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

function CompletedMissionCard({ title, points, time }: { title: string; points: number; time: string }) {
  return (
    <Card className="bg-success/5 border-success/20">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-success" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground text-sm mb-0.5">{title}</h3>
              <p className="text-xs text-muted-foreground">{time}</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-success">+{points} pts</span>
        </div>
      </div>
    </Card>
  )
}
