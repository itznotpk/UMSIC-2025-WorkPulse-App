"use client"

import React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Users, Plus, Medal, Flame, TrendingUp, Calendar, MapPin, Clock, Building2 } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import Link from "next/link"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function CommunityContent() {
  const [leaderboardOptIn, setLeaderboardOptIn] = useState(true)
  const [leaderboardType, setLeaderboardType] = useState<"individual" | "department">("individual")

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background pb-20">
      <div className="mx-auto max-w-md px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-foreground mb-2">Community</h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Connect with colleagues and stay motivated together
          </p>
        </div>

        {/* Create Activity CTA */}
        <Link href="/community/create">
          <Card className="mb-6 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 cursor-pointer hover:border-primary/50 transition-colors">
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Plus className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Create Activity</h3>
                    <p className="text-xs text-muted-foreground">Badminton, Yoga, Walking & more</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-lg">→</span>
                </div>
              </div>
            </div>
          </Card>
        </Link>

        <Tabs defaultValue="feed" className="mb-6">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="feed">Feed</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="leaderboard">Ranks</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-4">
            {/* Activity Feed Items */}
            <ActivityFeedCard
              name="Ali Rahman"
              action="completed 5 missions today"
              time="2 hours ago"
              type="missions"
            />
            <ActivityFeedCard
              name="Sarah Chen"
              action="created a Yoga session"
              time="3 hours ago"
              type="activity"
              activityDetails={{ title: "Lunchtime Yoga", time: "Tomorrow, 12:30 PM", participants: 4 }}
            />
            <ActivityFeedCard name="Marcus Lee" action="achieved a 7-day streak" time="5 hours ago" type="streak" />
            <ActivityFeedCard name="Priya Sharma" action="joined Badminton Game" time="1 day ago" type="activity" />
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
            <UpcomingEventCard
              title="Lunchtime Yoga"
              organizer="Sarah Chen"
              date="Tomorrow"
              time="12:30 PM - 1:30 PM"
              location="Wellness Room 2"
              participants={4}
              maxParticipants={12}
              category="Yoga"
              isJoined={false}
            />
            <UpcomingEventCard
              title="Badminton Game"
              organizer="Marcus Lee"
              date="Friday, Dec 20"
              time="6:00 PM - 8:00 PM"
              location="Sports Complex"
              participants={8}
              maxParticipants={8}
              category="Badminton"
              isJoined={true}
            />
            <UpcomingEventCard
              title="Morning Walk"
              organizer="Priya Sharma"
              date="Saturday, Dec 21"
              time="7:00 AM - 8:00 AM"
              location="Park Connector"
              participants={6}
              maxParticipants={15}
              category="Walking"
              isJoined={false}
            />
            <UpcomingEventCard
              title="Meditation Session"
              organizer="Ali Rahman"
              date="Next Monday"
              time="8:00 AM - 8:30 AM"
              location="Quiet Room 1"
              participants={3}
              maxParticipants={10}
              category="Meditation"
              isJoined={false}
            />
            <UpcomingEventCard
              title="Table Tennis Tournament"
              organizer="James Wong"
              date="Dec 28"
              time="5:30 PM - 7:30 PM"
              location="Recreation Area"
              participants={12}
              maxParticipants={16}
              category="Table Tennis"
              isJoined={false}
            />
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-4">
            {!leaderboardOptIn ? (
              <Card className="border-2">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Join the Leaderboard</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Opt-in to see your ranking and compete with colleagues. You can opt-out anytime from your profile.
                  </p>
                  <Button className="w-full" onClick={() => setLeaderboardOptIn(true)}>
                    Opt-in to Leaderboard
                  </Button>
                </div>
              </Card>
            ) : (
              <>
                <div className="flex gap-2 mb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className={
                      leaderboardType === "individual" ? "bg-primary text-primary-foreground" : "bg-transparent"
                    }
                    onClick={() => setLeaderboardType("individual")}
                  >
                    Individual
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={
                      leaderboardType === "department" ? "bg-primary text-primary-foreground" : "bg-transparent"
                    }
                    onClick={() => setLeaderboardType("department")}
                  >
                    Department
                  </Button>
                </div>

                {leaderboardType === "individual" ? (
                  <>
                    <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5">
                      <div className="p-5">
                        <p className="text-xs font-medium text-muted-foreground mb-3">Your Ranking</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                              <span className="text-lg font-bold text-primary">#8</span>
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">Wei Han</p>
                              <p className="text-xs text-muted-foreground">IT • You</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-foreground">1,847</p>
                            <p className="text-xs text-muted-foreground">points</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <TopRankCard rank={2} name="Sarah C." points={2156} department="HR" />
                      <TopRankCard rank={1} name="Ali R." points={2485} department="IT" isFirst />
                      <TopRankCard rank={3} name="Marcus L." points={2043} department="Sales" />
                    </div>

                    <div className="space-y-2">
                      <LeaderboardRow rank={4} name="Priya Sharma" points={1923} department="Finance" />
                      <LeaderboardRow rank={5} name="James Wong" points={1876} department="Operations" />
                      <LeaderboardRow rank={6} name="Lisa Kim" points={1854} department="HR" />
                      <LeaderboardRow rank={7} name="David Park" points={1850} department="IT" />
                      <LeaderboardRow rank={8} name="Wei Han" points={1847} department="IT" isYou />
                      <LeaderboardRow rank={9} name="Emma Liu" points={1792} department="Sales" />
                      <LeaderboardRow rank={10} name="Alex Chen" points={1756} department="Finance" />
                    </div>
                  </>
                ) : (
                  <>
                    <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5">
                      <div className="p-5">
                        <p className="text-xs font-medium text-muted-foreground mb-3">Your Department</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                              <Building2 className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">IT</p>
                              <p className="text-xs text-muted-foreground">Rank #2</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-foreground">8,456</p>
                            <p className="text-xs text-muted-foreground">total points</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <TopDepartmentCard rank={2} name="IT" points={8456} members={12} />
                      <TopDepartmentCard rank={1} name="Sales" points={9234} members={15} isFirst />
                      <TopDepartmentCard rank={3} name="HR" points={7892} members={8} />
                    </div>

                    <div className="space-y-2">
                      <DepartmentLeaderboardRow rank={4} name="Finance" points={6543} members={10} />
                      <DepartmentLeaderboardRow rank={5} name="Operations" points={5876} members={18} />
                    </div>

                    <Card className="border-2 border-muted">
                      <div className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                            <Trophy className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-foreground mb-1">How Department Points Work</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              Department scores are calculated by adding up all points earned by team members. Keep
                              completing missions and activities to help your department climb the ranks!
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </>
                )}
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <BottomNav active="community" />
    </div>
  )
}

function ActivityFeedCard({
  name,
  action,
  time,
  type,
  activityDetails,
}: {
  name: string
  action: string
  time: string
  type: "missions" | "activity" | "streak"
  activityDetails?: {
    title: string
    time: string
    participants: number
  }
}) {
  const icon = type === "missions" ? Trophy : type === "activity" ? Users : type === "streak" ? Flame : TrendingUp

  return (
    <Card>
      <div className="p-4">
        <div className="flex items-start gap-3 mb-3">
          <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm text-foreground leading-relaxed">
              <span className="font-semibold">{name}</span> {action}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{time}</p>
          </div>
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
            {React.createElement(icon, { className: "w-4 h-4 text-muted-foreground" })}
          </div>
        </div>

        {activityDetails && (
          <div className="pl-13 bg-muted/30 rounded-lg p-3 border border-border/50">
            <h4 className="font-semibold text-sm text-foreground mb-1">{activityDetails.title}</h4>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{activityDetails.time}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {activityDetails.participants} joined
              </span>
            </div>
            <Button size="sm" className="w-full mt-3 h-8 text-xs">
              Join Activity
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
}

function TopRankCard({
  rank,
  name,
  points,
  department,
  isFirst = false,
}: {
  rank: number
  name: string
  points: number
  department: string
  isFirst?: boolean
}) {
  return (
    <Card className={isFirst ? "border-2 border-warning/50 bg-warning/5" : ""}>
      <div className={`p-4 text-center ${isFirst ? "pt-3" : "pt-5"}`}>
        {isFirst && <Medal className="w-6 h-6 text-warning mx-auto mb-2" />}
        <div
          className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
            isFirst ? "bg-warning/20 text-warning" : "bg-muted"
          }`}
        >
          <span className="text-xl font-bold">#{rank}</span>
        </div>
        <p className="font-semibold text-sm text-foreground mb-0.5">{name}</p>
        <p className="text-xs text-muted-foreground mb-1">{department}</p>
        <p className="text-xs text-muted-foreground">{points} pts</p>
      </div>
    </Card>
  )
}

function LeaderboardRow({
  rank,
  name,
  points,
  department,
  isYou = false,
}: {
  rank: number
  name: string
  points: number
  department: string
  isYou?: boolean
}) {
  return (
    <Card className={isYou ? "border-2 border-primary/50 bg-primary/5" : ""}>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <span className="text-sm font-bold text-muted-foreground">#{rank}</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">
                {name} {isYou && <span className="text-xs text-primary font-normal">(You)</span>}
              </p>
              <p className="text-xs text-muted-foreground">{department}</p>
            </div>
          </div>
          <p className="text-sm font-bold text-foreground">{points}</p>
        </div>
      </div>
    </Card>
  )
}

function UpcomingEventCard({
  title,
  organizer,
  date,
  time,
  location,
  participants,
  maxParticipants,
  category,
  isJoined,
}: {
  title: string
  organizer: string
  date: string
  time: string
  location: string
  participants: number
  maxParticipants: number
  category: string
  isJoined: boolean
}) {
  const isFull = participants >= maxParticipants

  return (
    <Card className={isJoined ? "border-2 border-primary/50 bg-primary/5" : ""}>
      <div className="p-4">
        <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
          {category}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>{location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarFallback className="bg-muted text-muted-foreground text-xs font-semibold">
                {organizer
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">Organized by {organizer}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-foreground font-medium">
              {participants}/{maxParticipants}
            </span>
            {isFull && <span className="text-xs text-warning font-medium">(Full)</span>}
          </div>
          {isJoined ? (
            <Button variant="outline" size="sm" className="h-9 bg-transparent">
              Joined
            </Button>
          ) : (
            <Button size="sm" disabled={isFull} className="h-9">
              {isFull ? "Event Full" : "Join Event"}
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}

function TopDepartmentCard({
  rank,
  name,
  points,
  members,
  isFirst = false,
}: {
  rank: number
  name: string
  points: number
  members: number
  isFirst?: boolean
}) {
  return (
    <Card className={isFirst ? "border-2 border-warning/50 bg-warning/5" : ""}>
      <div className={`p-4 text-center ${isFirst ? "pt-3" : "pt-5"}`}>
        {isFirst && <Medal className="w-6 h-6 text-warning mx-auto mb-2" />}
        <div
          className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
            isFirst ? "bg-warning/20" : "bg-muted"
          }`}
        >
          <Building2 className={`w-6 h-6 ${isFirst ? "text-warning" : "text-muted-foreground"}`} />
        </div>
        <p className="font-semibold text-sm text-foreground mb-0.5">{name}</p>
        <p className="text-xs text-muted-foreground mb-1">{members} members</p>
        <p className="text-xs font-semibold text-foreground">{points} pts</p>
      </div>
    </Card>
  )
}

function DepartmentLeaderboardRow({
  rank,
  name,
  points,
  members,
}: {
  rank: number
  name: string
  points: number
  members: number
}) {
  return (
    <Card>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <span className="text-sm font-bold text-muted-foreground">#{rank}</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">{name}</p>
              <p className="text-xs text-muted-foreground">{members} members</p>
            </div>
          </div>
          <p className="text-sm font-bold text-foreground">{points}</p>
        </div>
      </div>
    </Card>
  )
}
