"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Gift, Calendar, Shield, Bell, Eye, Trophy, LogOut } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function ProfileContent() {
  const [leaderboardOptIn, setLeaderboardOptIn] = useState(true)
  const [healthDataSharing, setHealthDataSharing] = useState(false)
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background pb-20">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Profile Header */}
        <Card className="mb-6 border-2">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-primary/10 text-primary font-bold text-xl">WH</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground mb-1">Wei Han</h2>
                <p className="text-sm text-muted-foreground">Engineering Team</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground mb-1">1,847</p>
                <p className="text-xs text-muted-foreground">Total Points</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground mb-1">42</p>
                <p className="text-xs text-muted-foreground">Missions</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground mb-1">7</p>
                <p className="text-xs text-muted-foreground">Day Streak</p>
              </div>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="settings" className="mb-6">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="leave">Leave</TabsTrigger>
          </TabsList>

          <TabsContent value="settings" className="space-y-4">
            {/* Privacy Settings */}
            <Card>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Privacy Controls</h3>
                </div>

                <div className="space-y-4">
                  <SettingRow
                    label="Show on Leaderboard"
                    description="Display your ranking to colleagues"
                    checked={leaderboardOptIn}
                    onCheckedChange={setLeaderboardOptIn}
                  />
                  <SettingRow
                    label="Share Health Trends"
                    description="Anonymous data for team wellness insights"
                    checked={healthDataSharing}
                    onCheckedChange={setHealthDataSharing}
                  />
                </div>
              </div>
            </Card>

            {/* Notification Settings */}
            <Card>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Notifications</h3>
                </div>

                <div className="space-y-4">
                  <SettingRow
                    label="Mission Reminders"
                    description="Get notified when missions are available"
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>
              </div>
            </Card>

            {/* Data Privacy Info */}
            <Card className="bg-gradient-to-br from-info/10 to-info/5 border-info/20">
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-info/20 flex items-center justify-center mt-0.5">
                    <Eye className="w-4 h-4 text-info" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground mb-1">Who can see what?</p>
                    <ul className="text-sm text-muted-foreground space-y-1 leading-relaxed">
                      <li>• Detailed health data: Only you</li>
                      <li>• Points & missions: Opt-in leaderboard</li>
                      <li>• Activity participation: Team members</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Logout */}
            <Button variant="outline" className="w-full h-12 text-destructive border-destructive/30 bg-transparent">
              <LogOut className="w-4 h-4 mr-2" />
              Log Out
            </Button>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-4">
            {/* Points Balance */}
            <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border-2 border-warning/30">
              <div className="p-6 text-center">
                <Gift className="w-12 h-12 text-warning mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-2">Available Points</p>
                <p className="text-4xl font-bold text-foreground mb-1">1,847</p>
                <p className="text-sm text-muted-foreground">Redeem for rewards below</p>
              </div>
            </Card>

            {/* Redeemable Rewards */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Available Rewards</h3>
              <div className="space-y-3">
                <RewardCard title="Coffee Voucher" points={500} available />
                <RewardCard title="Extra Hour Off" points={1000} available />
                <RewardCard title="Lunch Voucher" points={800} available />
                <RewardCard title="Wellness Gift Card" points={2000} available={false} />
              </div>
            </div>

            {/* Monthly Winners */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">This Month's Top 3</h3>
                </div>
                <div className="space-y-2">
                  <WinnerRow rank={1} name="Ali Rahman" points={2485} />
                  <WinnerRow rank={2} name="Sarah Chen" points={2156} />
                  <WinnerRow rank={3} name="Marcus Lee" points={2043} />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="leave" className="space-y-4">
            {/* Leave Balance */}
            <Card className="border-2">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Leave Balance</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/30 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-foreground mb-1">12</p>
                    <p className="text-xs text-muted-foreground">Days Remaining</p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-foreground mb-1">6</p>
                    <p className="text-xs text-muted-foreground">Days Used</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Apply Leave */}
            <Card>
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Apply for Leave</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Start Date</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">End Date</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Reason (Optional)</label>
                    <textarea
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm min-h-20 resize-none"
                      placeholder="Optional reason for leave..."
                    />
                  </div>
                  <Button className="w-full h-11">Submit Leave Request</Button>
                </div>
              </div>
            </Card>

            {/* Leave History */}
            <Card>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-4">Recent Requests</h3>
                <div className="space-y-3">
                  <LeaveHistoryRow date="Dec 25 - 27" status="approved" />
                  <LeaveHistoryRow date="Nov 15 - 16" status="approved" />
                  <LeaveHistoryRow date="Oct 8 - 12" status="approved" />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNav active="profile" />
    </div>
  )
}

function SettingRow({
  label,
  description,
  checked,
  onCheckedChange,
}: {
  label: string
  description: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  )
}

function RewardCard({ title, points, available }: { title: string; points: number; available: boolean }) {
  return (
    <Card className={available ? "" : "opacity-60"}>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h4 className="font-semibold text-sm text-foreground mb-1">{title}</h4>
            <p className="text-xs text-muted-foreground">{points} points</p>
          </div>
          <Button size="sm" disabled={!available} className="h-8">
            {available ? "Redeem" : "Locked"}
          </Button>
        </div>
      </div>
    </Card>
  )
}

function WinnerRow({ rank, name, points }: { rank: number; name: string; points: number }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-xs font-bold text-primary">#{rank}</span>
        </div>
        <span className="text-sm font-medium text-foreground">{name}</span>
      </div>
      <span className="text-sm font-semibold text-muted-foreground">{points} pts</span>
    </div>
  )
}

function LeaveHistoryRow({ date, status }: { date: string; status: "approved" | "pending" | "rejected" }) {
  const statusColor = {
    approved: "text-success bg-success/10",
    pending: "text-warning bg-warning/10",
    rejected: "text-destructive bg-destructive/10",
  }[status]

  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-foreground">{date}</span>
      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor}`}>{status}</span>
    </div>
  )
}
