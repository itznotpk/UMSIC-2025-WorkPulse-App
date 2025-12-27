"use client"

import React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Moon, Footprints, Brain, TrendingUp, TrendingDown, Minus, Lock, CheckCircle2 } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"

export function HealthContent() {
  const healthMetrics = [
    {
      icon: Brain,
      label: "Stress Level",
      value: "Low",
      trend: "down",
      color: "success",
      data: [3, 4, 3, 5, 4, 3, 2],
    },
    {
      icon: Moon,
      label: "Sleep Quality",
      value: "6.5h",
      trend: "down",
      color: "warning",
      data: [7, 7.5, 6.5, 7, 8, 6.5, 6.5],
    },
    {
      icon: Footprints,
      label: "Activity",
      value: "3,247",
      trend: "up",
      color: "success",
      data: [2500, 3000, 2800, 3500, 3200, 3100, 3247],
    },
    {
      icon: Heart,
      label: "Heart Rate",
      value: "72 bpm",
      trend: "stable",
      color: "success",
      data: [70, 72, 71, 73, 72, 71, 72],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-info/5 via-background to-background pb-20">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-foreground mb-2">Health Insights</h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Track your wellbeing patterns and understand your body better
          </p>
        </div>

        {/* Time Range Selector */}
        <div className="flex gap-2 mb-6">
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            7 Days
          </Button>
          <Button variant="outline" size="sm" className="flex-1 bg-primary text-primary-foreground">
            30 Days
          </Button>
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            90 Days
          </Button>
        </div>

        {/* Health Metrics */}
        <div className="space-y-4 mb-6">
          {healthMetrics.map((metric, index) => {
            const Icon = metric.icon
            const trendIcon = metric.trend === "up" ? TrendingUp : metric.trend === "down" ? TrendingDown : Minus
            const trendColor =
              metric.trend === "up"
                ? "text-success"
                : metric.trend === "down"
                  ? "text-warning"
                  : "text-muted-foreground"

            return (
              <Card key={index}>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          metric.color === "success"
                            ? "bg-success/10 text-success"
                            : metric.color === "warning"
                              ? "bg-warning/10 text-warning"
                              : "bg-info/10 text-info"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm">{metric.label}</h3>
                        <p className="text-xs text-muted-foreground">Last 7 days average</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-foreground">{metric.value}</p>
                      <div className={`flex items-center gap-1 text-xs ${trendColor}`}>
                        {React.createElement(trendIcon, { className: "w-3 h-3" })}
                        <span className="font-medium capitalize">{metric.trend}</span>
                      </div>
                    </div>
                  </div>

                  {/* Simple trend chart */}
                  <div className="flex items-end gap-1.5 h-16">
                    {metric.data.map((value, i) => {
                      const maxValue = Math.max(...metric.data)
                      const height = (value / maxValue) * 100
                      return (
                        <div key={i} className="flex-1 flex flex-col justify-end">
                          <div
                            className={`w-full rounded-t transition-all ${
                              metric.color === "success"
                                ? "bg-success/30"
                                : metric.color === "warning"
                                  ? "bg-warning/30"
                                  : "bg-info/30"
                            } ${i === metric.data.length - 1 ? "opacity-100" : "opacity-60"}`}
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>7d ago</span>
                    <span>Today</span>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* AI Health Notes */}
        <Card className="mb-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <div className="p-5">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Brain className="w-4 h-4" />
              AI Health Insights
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-warning/20 flex items-center justify-center mt-0.5">
                  <TrendingDown className="w-3 h-3 text-warning" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Stress levels tend to increase after 3+ consecutive hours of sitting. Try taking short breaks.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-success" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your activity levels are improving! Keep up the walking breaks.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Data Source Status */}
        <Card className="mb-6">
          <div className="p-5">
            <h3 className="font-semibold text-foreground mb-4 text-sm">Data Sources</h3>
            <div className="space-y-3">
              <DataSourceItem name="Apple Health" connected />
              <DataSourceItem name="Google Fit" connected={false} />
              <DataSourceItem name="rPPG Face Scan" connected />
            </div>
          </div>
        </Card>

        {/* Privacy Notice */}
        <Card className="bg-gradient-to-br from-info/10 to-info/5 border-info/20">
          <div className="p-5">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-info/20 flex items-center justify-center mt-0.5">
                <Lock className="w-4 h-4 text-info" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground mb-1">Your Privacy Matters</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Only you can see your detailed health data. Team leaders only see anonymized wellness trends.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <BottomNav active="health" />
    </div>
  )
}

function DataSourceItem({ name, connected }: { name: string; connected: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-foreground">{name}</span>
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${connected ? "bg-success" : "bg-muted-foreground/30"}`} />
        <span className={`text-xs font-medium ${connected ? "text-success" : "text-muted-foreground"}`}>
          {connected ? "Connected" : "Not connected"}
        </span>
      </div>
    </div>
  )
}
