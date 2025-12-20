"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"

export function MissionExecute() {
  const [timeLeft, setTimeLeft] = useState(120) // 2 minutes in seconds
  const [isComplete, setIsComplete] = useState(false)
  const [isSkipped, setIsSkipped] = useState(false)
  const totalTime = 120

  useEffect(() => {
    if (timeLeft > 0 && !isComplete) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setIsComplete(true)
    }
  }, [timeLeft, isComplete])

  const progress = ((totalTime - timeLeft) / totalTime) * 100
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const pointsEarned = isSkipped ? 0 : 50

  if (isComplete) {
    return (
      <div
        className={`min-h-screen bg-gradient-to-b ${isSkipped ? "from-muted/20" : "from-success/10"} via-background to-background flex items-center justify-center px-4`}
      >
        <div className="mx-auto max-w-md w-full">
          <Card className={`border-2 ${isSkipped ? "border-muted" : "border-success/50"} shadow-xl`}>
            <div className="p-8 text-center">
              {isSkipped ? (
                <>
                  <div className="w-20 h-20 rounded-full bg-muted/20 flex items-center justify-center mx-auto mb-6">
                    <XCircle className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Mission Skipped</h2>
                  <p className="text-muted-foreground mb-6">No worries! Try to complete the next one.</p>

                  <div className="bg-muted/10 rounded-xl p-4 mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Points Earned</p>
                    <p className="text-3xl font-bold text-muted-foreground">+0</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-success" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Mission Complete!</h2>
                  <p className="text-muted-foreground mb-6">Great job on taking care of yourself</p>

                  <div className="bg-success/10 rounded-xl p-4 mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Points Earned</p>
                    <p className="text-3xl font-bold text-success">+50</p>
                  </div>
                </>
              )}

              <Link href="/missions">
                <Button className="w-full h-12 text-base font-semibold">Back to Missions</Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-warning/10 via-background to-background">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/missions">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold text-foreground">Stand & Stretch</h1>
        </div>

        {/* Timer Display */}
        <div className="text-center mb-8">
          <div className="relative inline-flex items-center justify-center mb-6">
            <svg className="w-64 h-64 -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="120"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-muted/20"
              />
              <circle
                cx="128"
                cy="128"
                r="120"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 120}`}
                strokeDashoffset={`${2 * Math.PI * 120 * (1 - progress / 100)}`}
                className="text-warning transition-all duration-300"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-6xl font-bold text-foreground tabular-nums">
                {minutes}:{seconds.toString().padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-muted-foreground mt-2">Keep going!</span>
            </div>
          </div>

          <Progress value={progress} className="h-2 mb-4" />
          <p className="text-sm text-muted-foreground">{Math.round(progress)}% complete</p>
        </div>

        {/* Instructions */}
        <Card className="mb-6">
          <div className="p-6">
            <h3 className="font-semibold text-foreground mb-3">Follow these steps:</h3>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                  1
                </span>
                <span className="leading-relaxed">Stand up from your desk and shake out your arms</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                  2
                </span>
                <span className="leading-relaxed">Roll your shoulders backwards 5 times</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                  3
                </span>
                <span className="leading-relaxed">Stretch your arms above your head and lean side to side</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                  4
                </span>
                <span className="leading-relaxed">Take 3 deep breaths before sitting back down</span>
              </li>
            </ol>
          </div>
        </Card>

        <Button
          variant="outline"
          className="w-full h-12 bg-transparent"
          onClick={() => {
            setIsSkipped(true)
            setIsComplete(true)
          }}
        >
          Skip Mission
        </Button>
      </div>
    </div>
  )
}
