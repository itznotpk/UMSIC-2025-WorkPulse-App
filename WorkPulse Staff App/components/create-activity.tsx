"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Users, MapPin, Calendar, Clock } from "lucide-react"
import Link from "next/link"

const activityTypes = [
  { id: "badminton", label: "Badminton", emoji: "🏸" },
  { id: "yoga", label: "Yoga", emoji: "🧘" },
  { id: "walking", label: "Walking", emoji: "🚶" },
  { id: "running", label: "Running", emoji: "🏃" },
  { id: "cycling", label: "Cycling", emoji: "🚴" },
  { id: "custom", label: "Custom", emoji: "✨" },
]

export function CreateActivity() {
  const [selectedType, setSelectedType] = useState("badminton")

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background pb-20">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/community">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold text-foreground">Create Activity</h1>
        </div>

        {/* Activity Type Selection */}
        <div className="mb-6">
          <Label className="text-sm font-medium text-foreground mb-3 block">Activity Type</Label>
          <div className="grid grid-cols-3 gap-3">
            {activityTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedType === type.id
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                <div className="text-3xl mb-2">{type.emoji}</div>
                <p className="text-xs font-medium text-foreground">{type.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <Card className="mb-6">
          <div className="p-6 space-y-5">
            <div>
              <Label htmlFor="title" className="text-sm font-medium text-foreground mb-2 block">
                Activity Title
              </Label>
              <Input id="title" placeholder="e.g., Lunchtime Badminton" className="h-11" />
            </div>

            <div>
              <Label htmlFor="description" className="text-sm font-medium text-foreground mb-2 block">
                Description
              </Label>
              <Textarea id="description" placeholder="Tell others what to expect..." className="min-h-24 resize-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date" className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Date
                </Label>
                <Input id="date" type="date" className="h-11" />
              </div>
              <div>
                <Label htmlFor="time" className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Time
                </Label>
                <Input id="time" type="time" className="h-11" />
              </div>
            </div>

            <div>
              <Label htmlFor="location" className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </Label>
              <Input id="location" placeholder="e.g., Building A Sports Hall" className="h-11" />
            </div>

            <div>
              <Label
                htmlFor="maxParticipants"
                className="text-sm font-medium text-foreground mb-2 flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Max Participants
              </Label>
              <Input id="maxParticipants" type="number" placeholder="e.g., 8" className="h-11" />
            </div>
          </div>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button className="w-full h-12 text-base font-semibold">Create Activity</Button>
          <Link href="/community">
            <Button variant="outline" className="w-full h-12 bg-transparent">
              Cancel
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
