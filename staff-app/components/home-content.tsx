"use client"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Heart, Moon, Footprints, Brain, Sparkles, X, Camera } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"

export function HomeContent() {
  const [readinessScore] = useState(78)
  const [showCamera, setShowCamera] = useState(false)
  const [scanning, setScanning] = useState(false)
  const [countdown, setCountdown] = useState(10)
  const [showReport, setShowReport] = useState(false)
  const [cameraError, setCameraError] = useState<string | null>(null)
  const [scanResults, setScanResults] = useState({
    heartRate: 0,
    stressLevel: "",
    healthStatus: "",
  })

  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const currentHour = new Date().getHours()
  const greeting = currentHour < 12 ? "Good Morning" : currentHour < 18 ? "Good Afternoon" : "Good Evening"

  const startCheckIn = async () => {
    setCameraError(null)

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Camera not supported on this device")
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      })

      streamRef.current = stream
      setShowCamera(true)
      setScanning(true)
      setCountdown(10)

      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (error: any) {
      console.error("[v0] Error accessing camera:", error)

      let errorMessage = "Unable to access camera. "

      if (error.name === "NotAllowedError" || error.name === "PermissionDeniedError") {
        errorMessage += "Please allow camera access in your browser settings."
      } else if (error.name === "NotFoundError") {
        errorMessage += "No camera found on this device."
      } else if (error.name === "NotReadableError") {
        errorMessage += "Camera is already in use by another application."
      } else {
        errorMessage += error.message || "Please check your camera permissions and try again."
      }

      setCameraError(errorMessage)
    }
  }

  useEffect(() => {
    if (scanning && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (scanning && countdown === 0) {
      completeScan()
    }
  }, [scanning, countdown])

  const completeScan = () => {
    setScanning(false)

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }

    const heartRate = Math.floor(Math.random() * (85 - 65 + 1)) + 65
    const stressLevels = ["Low", "Moderate", "Normal"]
    const healthStatuses = ["Excellent", "Good", "Fair"]

    setScanResults({
      heartRate: heartRate,
      stressLevel: stressLevels[Math.floor(Math.random() * stressLevels.length)],
      healthStatus: healthStatuses[Math.floor(Math.random() * healthStatuses.length)],
    })

    setShowCamera(false)
    setShowReport(true)
  }

  const cancelScan = () => {
    setScanning(false)
    setShowCamera(false)

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
  }

  const closeReport = () => {
    setShowReport(false)
  }

  const closeError = () => {
    setCameraError(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background pb-20">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-foreground mb-1">{greeting}, Wei Han 👋</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Wednesday, Dec 18</span>
            <span className="text-muted-foreground/50">•</span>
            <span>Day 3 of 5</span>
          </div>
          <Progress value={60} className="mt-2 h-1.5" />
        </div>

        {/* Readiness Score Card */}
        <Card className="mb-6 overflow-hidden border-2 shadow-lg">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background p-6">
            <div className="text-center mb-4">
              <p className="text-sm font-medium text-muted-foreground mb-4">Your Work Readiness</p>

              {/* Circular Score */}
              <div className="relative inline-flex items-center justify-center mb-4">
                <svg className="w-40 h-40 -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-muted/20"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 70}`}
                    strokeDashoffset={`${2 * Math.PI * 70 * (1 - readinessScore / 100)}`}
                    className="text-success transition-all duration-1000"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold text-foreground">{readinessScore}</span>
                  <span className="text-sm font-medium text-muted-foreground">/ 100</span>
                </div>
              </div>

              {/* Status Label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/15 border border-success/30">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-semibold text-success">Ready to Work</span>
              </div>
            </div>

            {/* Health Metrics */}
            <div className="grid grid-cols-4 gap-3 mt-6 pt-6 border-t border-border/50">
              <HealthMetric icon={Heart} label="Heart" value="Normal" status="success" />
              <HealthMetric icon={Moon} label="Sleep" value="6.5h" status="warning" />
              <HealthMetric icon={Footprints} label="Steps" value="3.2k" status="success" />
              <HealthMetric icon={Brain} label="Stress" value="Low" status="success" />
            </div>
          </div>
        </Card>

        {/* Daily Check-in CTA */}
        <Card className="mb-6 border-2 shadow-md">
          <div className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Daily Check-in</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Take a quick 10-second face scan to measure your vital signs
                </p>
              </div>
            </div>
            <Button className="w-full h-12 text-base font-semibold" size="lg" onClick={startCheckIn}>
              Start Check-in
            </Button>
          </div>
        </Card>

        {/* AI Insight */}
        <Card className="bg-gradient-to-br from-info/10 to-info/5 border-info/20">
          <div className="p-5">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-info/20 flex items-center justify-center mt-0.5">
                <Sparkles className="w-4 h-4 text-info" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground mb-1">AI Coach Tip</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your sleep was shorter than usual. Consider a short walk during lunch to boost energy.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Privacy Notice */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span>Only you can see your health data</span>
          <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
        </div>
      </div>

      {cameraError && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <Camera className="w-8 h-8 text-destructive" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2">Camera Access Required</h2>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{cameraError}</p>
                <Button className="w-full" onClick={closeError}>
                  Got it
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {showCamera && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Scanning Your Vitals</h2>
              <Button variant="ghost" size="icon" onClick={cancelScan} className="text-white hover:bg-white/10">
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-black">
              <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />

              {scanning && (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="absolute inset-8 border-4 border-primary rounded-3xl animate-pulse" />
                  <div className="bg-black/50 backdrop-blur-sm px-8 py-4 rounded-full">
                    <p className="text-4xl font-bold text-white">{countdown}</p>
                  </div>
                  <p className="mt-4 text-white text-sm">Hold still...</p>
                </div>
              )}
            </div>

            <p className="text-center text-white/70 text-sm mt-4">Keep your face in frame and remain still</p>
          </div>
        </div>
      )}

      {showReport && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-1">Health Report</h2>
                  <p className="text-sm text-muted-foreground">Scan completed successfully</p>
                </div>
                <Button variant="ghost" size="icon" onClick={closeReport} className="hover:bg-muted">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <Card className="border-2">
                  <div className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">Heart Rate</p>
                      <p className="text-2xl font-bold text-foreground">
                        {scanResults.heartRate} <span className="text-base text-muted-foreground">bpm</span>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="border-2">
                  <div className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-info" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">Stress Level</p>
                      <p className="text-2xl font-bold text-foreground">{scanResults.stressLevel}</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-2">
                  <div className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-success" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">Health Status</p>
                      <p className="text-2xl font-bold text-foreground">{scanResults.healthStatus}</p>
                    </div>
                  </div>
                </Card>
              </div>

              <Button className="w-full mt-6 h-12 text-base font-semibold" onClick={closeReport}>
                Done
              </Button>
            </div>
          </Card>
        </div>
      )}

      <BottomNav active="home" />
    </div>
  )
}

function HealthMetric({
  icon: Icon,
  label,
  value,
  status,
}: {
  icon: any
  label: string
  value: string
  status: "success" | "warning" | "error"
}) {
  const statusColor = {
    success: "text-success",
    warning: "text-warning",
    error: "text-destructive",
  }[status]

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className={`w-10 h-10 rounded-full bg-background/80 flex items-center justify-center ${statusColor}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        <p className="text-xs font-semibold text-foreground">{value}</p>
      </div>
    </div>
  )
}
