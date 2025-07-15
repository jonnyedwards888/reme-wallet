"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Copy,
  Share2,
  Users,
  ArrowLeft,
  HelpCircle,
  LayoutDashboard,
  Target,
  Info,
} from "lucide-react";
import { useState } from "react";
import { CircularRing } from "./circular-ring";
import { ReferralNetworkDiagram } from "./referral-network-diagram";
import "../styles/WalletDashboard.css";

export default function CommunityBuilder() {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const userStats = {
    name: "Lucas Hooper",
    walletAddress: "0xa3D2571F0D66064444A4A092f90b2A2947b9293D2",
    totalCapsFromReferrals: 0,
    friendsReferred: 0,
    referralGoal: 5,
    referralLink: "https://wallet.remelife.com/register?ref=lucashooper100",
  };

  const copyToClipboard = async (text: string, type: "link" | "address") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "link") {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } else {
        setCopiedAddress(true);
        setTimeout(() => setCopiedAddress(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const shareReferralLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join ReMeLife Community",
          text: "Join me on ReMeLife and start earning CAPs tokens!",
          url: userStats.referralLink,
        });
      } catch (err) {
        console.error("Error sharing: ", err);
      }
    } else {
      // Fallback to copying
      copyToClipboard(userStats.referralLink, "link");
    }
  };

  const progressPercentage =
    (userStats.friendsReferred / userStats.referralGoal) * 100;

  // Add mock referral data for demonstration
  const referralData = {
    level1: [
      { id: "1", name: "Sarah Johnson" },
      { id: "2", name: "Mike Chen" },
      { id: "3", name: "Emma Wilson" },
    ],
    level2: [
      { id: "4", name: "Alex Lee" },
      { id: "5", name: "Priya Patel" },
      { id: "6", name: "Carlos Gomez" },
      { id: "7", name: "Linda Park" },
    ],
    level3: [
      { id: "8", name: "Tom Brown" },
      { id: "9", name: "Nina Singh" },
      { id: "10", name: "Olga Ivanova" },
      { id: "11", name: "Samir Ali" },
      { id: "12", name: "Julia Kim" },
    ],
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(90deg, #1a0536 0%, rgb(83, 0, 39) 48%, #1a0536 100%)",
      }}
    >
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <Button
          variant="ghost"
          className="text-white hover:bg-white/10 p-2"
          onClick={() => (window.location.href = "/")}
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>

        <h1 className="text-2xl font-bold text-white absolute left-1/2 transform -translate-x-1/2">
          Community Builder
        </h1>

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
                className="w-full justify-start text-white bg-white/20 hover:bg-white/30"
              >
                <LayoutDashboard className="w-4 h-4 mr-3" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white/80 hover:bg-white/10"
                onClick={() => (window.location.href = "/my-community")}
              >
                <Users className="w-4 h-4 mr-3" />
                My Community
              </Button>
            </CardContent>
          </Card>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-6">
          {/* Welcome Section */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                Hi, {userStats.name}
              </h2>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-white/80 text-sm mb-2">
                    Your Wallet Address:
                  </p>
                  <div className="flex items-center gap-2">
                    <code className="text-white font-mono text-sm bg-white/10 px-3 py-2 rounded-lg">
                      {userStats.walletAddress.slice(0, 20)}...
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        copyToClipboard(userStats.walletAddress, "address")
                      }
                      className="text-white hover:bg-white/10"
                    >
                      <Copy className="w-4 h-4" />
                      {copiedAddress ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Stats Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* CAPs from Referrals */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-white mb-6">
                  CAPs from Referrals
                </h3>
                <div className="mb-6 flex flex-col items-center">
                  <CircularRing
                    value={200}
                    label="Total CAPs"
                    gradientColors={["#10B981", "#059669", "#047857"]}
                    size={160}
                    strokeWidth={10}
                    className="mb-4"
                  />
                  <div className="text-white/80 text-lg font-medium">
                    Total Community
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">
                    {userStats.friendsReferred}
                  </div>
                  <div className="text-white/70 text-sm">Total Community</div>
                </div>
              </CardContent>
            </Card>

            {/* Referral Progress */}
            <Card
              className="bg-white/10 backdrop-blur-md border-white/20"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <CardContent className="p-8">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <h3 className="text-xl font-semibold text-white mb-0">
                    Referral Goal Progress
                  </h3>
                  <span
                    className="coming-soon-badge"
                    style={{ marginLeft: "1.25rem", whiteSpace: "nowrap" }}
                  >
                    COMING SOON
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/80">
                      Progress to next bonus
                    </span>
                    <span className="text-white font-semibold">
                      {userStats.friendsReferred}/{userStats.referralGoal}
                    </span>
                  </div>
                  <Progress
                    value={progressPercentage}
                    className="h-3 bg-white/10"
                  />
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-5 h-5 text-purple-300" />
                    <span className="text-white font-semibold">
                      Next Milestone
                    </span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Refer {userStats.referralGoal - userStats.friendsReferred}{" "}
                    more friends to earn a 50 CAPs bonus!
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Bonus at 5 referrals</span>
                    <span className="text-green-300 font-semibold">
                      +50 CAPs
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Bonus at 10 referrals</span>
                    <span className="text-green-300 font-semibold">
                      +100 CAPs
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How Referral Rewards Work Section */}
          {/* Replace the left panel user circles with a single count circle per level, vertically aligned with the right-side diagram. */}
          {/* Grid-based layout for perfect alignment between left summary circles and right level sections */}
          <div className="w-full flex flex-col items-center mt-8">
            {/* Top: Total Referred Bar - move left above circles */}
            <div
              className="w-full flex"
              style={{ justifyContent: "flex-start", alignItems: "flex-start" }}
            >
              <div
                className="w-80 mb-0 ml-8 mt-24"
                style={{ position: "relative", top: "40px" }}
              >
                <div className="bg-gradient-to-r from-pink-500/80 to-purple-500/80 rounded-xl py-4 px-6 text-center shadow-lg border border-white/20">
                  <div className="text-4xl font-bold text-white">
                    {referralData.level1.length +
                      referralData.level2.length +
                      referralData.level3.length}
                  </div>
                  <div className="text-white/80 text-lg font-medium mt-1">
                    Friends Referred
                  </div>
                </div>
              </div>
            </div>
            {/* Compact grid for levels - align left circles with right tree */}
            <div className="grid grid-cols-3 gap-x-12 w-full max-w-4xl items-center relative">
              {/* Left side: Level indicators */}
              <div
                className="flex flex-col items-center"
                style={{
                  gap: "32px",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="referral-level-circle level1 mb-1">
                    {referralData.level1.length}
                  </div>
                  <div className="text-white/80 text-base font-semibold">
                    Level 1
                  </div>
                  <div className="text-white/60 text-sm">Direct Referrals</div>
                  <div className="text-white/60 text-xs">
                    {referralData.level1.length} member
                    {referralData.level1.length !== 1 ? "s" : ""}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="referral-level-circle level2 mb-1">
                    {referralData.level2.length}
                  </div>
                  <div className="text-white/80 text-base font-semibold">
                    Level 2
                  </div>
                  <div className="text-white/60 text-sm">
                    Friends of Friends
                  </div>
                  <div className="text-white/60 text-xs">
                    {referralData.level2.length} member
                    {referralData.level2.length !== 1 ? "s" : ""}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="referral-level-circle level3 mb-1">
                    {referralData.level3.length}
                  </div>
                  <div className="text-white/80 text-base font-semibold">
                    Level 3
                  </div>
                  <div className="text-white/60 text-sm">
                    Friends of Friends of Friends
                  </div>
                  <div className="text-white/60 text-xs">
                    {referralData.level3.length} member
                    {referralData.level3.length !== 1 ? "s" : ""}
                  </div>
                </div>
              </div>
              {/* Center: SVG connecting lines */}
              <div
                className="relative h-full flex flex-col justify-center"
                style={{ minHeight: 400 }}
              >
                <svg
                  width="120"
                  height="520"
                  style={{ position: "absolute", left: 0, top: 0 }}
                >
                  {/* Blue arrow */}
                  <line
                    x1="20"
                    y1="180"
                    x2="100"
                    y2="180"
                    stroke="#3b82f6"
                    strokeWidth="4"
                    opacity="0.8"
                    markerEnd="url(#arrowheadBlue)"
                  />
                  {/* Green arrow */}
                  <line
                    x1="20"
                    y1="340"
                    x2="100"
                    y2="340"
                    stroke="#22c55e"
                    strokeWidth="4"
                    opacity="0.8"
                    markerEnd="url(#arrowheadGreen)"
                  />
                  {/* Pink arrow */}
                  <line
                    x1="20"
                    y1="500"
                    x2="100"
                    y2="500"
                    stroke="#ec4899"
                    strokeWidth="4"
                    opacity="0.8"
                    markerEnd="url(#arrowheadPink)"
                  />
                  <defs>
                    <marker
                      id="arrowheadBlue"
                      markerWidth="6"
                      markerHeight="6"
                      refX="5"
                      refY="3"
                      orient="auto"
                      markerUnits="strokeWidth"
                    >
                      <path d="M0,0 L0,6 L6,3 Z" fill="#3b82f6" opacity="0.8" />
                    </marker>
                    <marker
                      id="arrowheadGreen"
                      markerWidth="6"
                      markerHeight="6"
                      refX="5"
                      refY="3"
                      orient="auto"
                      markerUnits="strokeWidth"
                    >
                      <path d="M0,0 L0,6 L6,3 Z" fill="#22c55e" opacity="0.8" />
                    </marker>
                    <marker
                      id="arrowheadPink"
                      markerWidth="6"
                      markerHeight="6"
                      refX="5"
                      refY="3"
                      orient="auto"
                      markerUnits="strokeWidth"
                    >
                      <path d="M0,0 L0,6 L6,3 Z" fill="#ec4899" opacity="0.8" />
                    </marker>
                  </defs>
                </svg>
              </div>
              {/* Right side: Referral tree diagram with header */}
              <div className="flex flex-col items-center justify-center py-0">
                <div className="text-white text-lg font-bold mb-2">
                  Example Graph
                </div>
                <ReferralNetworkDiagram />
              </div>
            </div>
          </div>

          {/* Referral Link Section */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Your Referral Link
              </h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <code className="text-white/90 text-sm break-all">
                      {userStats.referralLink}
                    </code>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() =>
                      copyToClipboard(userStats.referralLink, "link")
                    }
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

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Invite friends to earn more CAPs
                    </h4>
                    <p className="text-white/80 text-sm">
                      Share your referral link and earn CAPs for every friend
                      who joins ReMeLife
                    </p>
                  </div>
                  <Button
                    onClick={shareReferralLink}
                    className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 border border-purple-400/30 font-medium px-6 transition-all duration-300"
                  >
                    Start Inviting
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
