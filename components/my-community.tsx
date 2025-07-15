"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Copy,
  Share2,
  Users,
  Award,
  ArrowLeft,
  HelpCircle,
  LayoutDashboard,
  UserPlus,
  Calendar,
  TrendingUp,
} from "lucide-react"
import { useState } from "react"

interface ReferredFriend {
  id: string
  name: string
  email: string
  dateJoined: string
  capsEarned: number
  status: "active" | "inactive" | "pending"
}

export default function MyCommunity() {
  const [copiedLink, setCopiedLink] = useState(false)

  // Mock data - in real app this would come from API
  const userStats = {
    totalFriendsReferred: 3,
    totalCapsFromReferrals: 150,
    activeFriends: 2,
    referralLink: "https://wallet.remelife.com/register?ref=lucashooper100",
  }

  const referredFriends: ReferredFriend[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      dateJoined: "2024-01-15",
      capsEarned: 75,
      status: "active",
    },
    {
      id: "2",
      name: "Mike Chen",
      email: "mike.chen@email.com",
      dateJoined: "2024-01-20",
      capsEarned: 50,
      status: "active",
    },
    {
      id: "3",
      name: "Emma Wilson",
      email: "emma.w@email.com",
      dateJoined: "2024-01-25",
      capsEarned: 25,
      status: "pending",
    },
  ]

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const shareReferralLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join ReMeLife Community",
          text: "Join me on ReMeLife and start earning CAPs tokens!",
          url: userStats.referralLink,
        })
      } catch (err) {
        console.error("Error sharing: ", err)
      }
    } else {
      copyToClipboard(userStats.referralLink)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Active</Badge>
      case "inactive":
        return <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30">Inactive</Badge>
      case "pending":
        return <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Pending</Badge>
      default:
        return <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30">Unknown</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const EmptyState = () => (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardContent className="p-12 text-center">
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Users className="w-10 h-10 text-white/60" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">No friends referred yet</h3>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          Start building your community by inviting friends and family to join ReMeLife. You'll earn CAPs for every
          successful referral!
        </p>
        <Button
          onClick={shareReferralLink}
          className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 border border-purple-400/30 font-medium px-8 py-3 transition-all duration-300"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Invite Your First Friend
        </Button>
      </CardContent>
    </Card>
  )

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(90deg, #1a0536 0%, rgb(83, 0, 39) 48%, #1a0536 100%)" }}
    >
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <Button
          variant="ghost"
          className="text-white hover:bg-white/10 p-2"
          onClick={() => (window.location.href = "/community-builder")}
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>

        <h1 className="text-2xl font-bold text-white absolute left-1/2 transform -translate-x-1/2">My Community</h1>

        <Button variant="ghost" className="text-white hover:bg-white/10">
          <HelpCircle className="w-4 h-4 mr-2" />
          Help
        </Button>
      </header>

      <div className="flex gap-6 px-6 pb-6 max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-64 space-y-4">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-4 space-y-3">
              <Button
                variant="ghost"
                className="w-full justify-start text-white/80 hover:bg-white/10"
                onClick={() => (window.location.href = "/community-builder")}
              >
                <LayoutDashboard className="w-4 h-4 mr-3" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white bg-white/20 hover:bg-white/30">
                <Users className="w-4 h-4 mr-3" />
                My Community
              </Button>
            </CardContent>
          </Card>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-6">
          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <Users className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{userStats.totalFriendsReferred}</div>
                    <div className="text-white/70 text-sm">Total Friends Referred</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500/20 rounded-full">
                    <Award className="w-6 h-6 text-green-300" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{userStats.totalCapsFromReferrals}</div>
                    <div className="text-white/70 text-sm">CAPs from Referrals</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <TrendingUp className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{userStats.activeFriends}</div>
                    <div className="text-white/70 text-sm">Active Friends</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Referral Link Section */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Your Referral Link</h3>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <code className="text-white/90 text-sm break-all">{userStats.referralLink}</code>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => copyToClipboard(userStats.referralLink)}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    {copiedLink ? "Copied!" : "Copy"}
                  </Button>
                  <Button
                    onClick={shareReferralLink}
                    className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 border border-purple-400/30 font-medium transition-all duration-300"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Friends List or Empty State */}
          {referredFriends.length === 0 ? (
            <EmptyState />
          ) : (
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Referred Friends</h3>
                  <Button
                    onClick={shareReferralLink}
                    className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 border border-purple-400/30 font-medium transition-all duration-300"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Invite More Friends
                  </Button>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {referredFriends.map((friend) => (
                    <div
                      key={friend.id}
                      className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold text-sm">
                                {friend.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">{friend.name}</div>
                              <div className="text-white/60 text-sm">{friend.email}</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="flex items-center gap-1 text-white/60 text-xs mb-1">
                              <Calendar className="w-3 h-3" />
                              Joined
                            </div>
                            <div className="text-white text-sm font-medium">{formatDate(friend.dateJoined)}</div>
                          </div>

                          <div className="text-center">
                            <div className="text-white/60 text-xs mb-1">CAPs Earned</div>
                            <div className="text-green-300 text-sm font-bold">{friend.capsEarned}</div>
                          </div>

                          <div className="text-center">
                            <div className="text-white/60 text-xs mb-1">Status</div>
                            {getStatusBadge(friend.status)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {referredFriends.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/70">
                        Showing {referredFriends.length} referred friend{referredFriends.length !== 1 ? "s" : ""}
                      </span>
                      <span className="text-green-300 font-semibold">
                        Total CAPs earned: {referredFriends.reduce((sum, friend) => sum + friend.capsEarned, 0)}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  )
}
