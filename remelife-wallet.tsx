"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  LogOut,
  Send,
  ShoppingCart,
  TrendingUp,
  Users,
  Shield,
  ShoppingBag,
  Sparkles,
  Info,
} from "lucide-react";
import { useState } from "react";
import { SwapModal } from "./components/swap-modal";
import { WalletAddresses } from "./components/wallet-addresses";
import { CircularRing } from "./components/circular-ring";

export default function ReMeLifeWallet() {
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);

  const capsBalance = 200.0;
  const remeBalance = 500;
  const remeValueGBP = 50.0;
  const remeMarketPrice = 0.1;
  const conversionRate = 2.5; // 1 CAP = 2.5 REME

  const blueGradient = ["#3B82F6", "#1D4ED8", "#1E40AF"];
  const goldGradient = ["#FCD34D", "#F59E0B", "#D97706"];

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
        <div>
          <h1 className="text-2xl font-bold text-white">ReMeLife Wallet</h1>
        </div>
        <Button variant="ghost" className="text-white hover:bg-white/10">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-6 max-w-4xl mx-auto">
        {/* User Greeting */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hi, Vitalik Buterin
          </h2>
          <Button
            onClick={() => (window.location.href = "/rewards")}
            className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 border border-purple-400/30 font-medium px-6 py-2 rounded-full transition-all duration-300"
          >
            Rewards Hub
          </Button>
        </div>

        {/* Wallet Addresses */}
        <div className="mb-8">
          <WalletAddresses />
        </div>

        {/* Primary Balance Display */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* CAPs Balance with Blue Ring */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex flex-col items-center">
                <CircularRing
                  value={capsBalance}
                  label="Total CAPs"
                  gradientColors={blueGradient}
                  size={180}
                  strokeWidth={12}
                  className="mb-4"
                />
                <div className="text-white/80 text-lg font-medium">
                  Total CAPs
                </div>
              </div>

              <Button
                onClick={() => setIsSwapModalOpen(true)}
                className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 border border-purple-400/30 font-medium py-3 rounded-xl transition-all duration-300"
              >
                CAPs ⇄ REME
              </Button>
            </CardContent>
          </Card>

          {/* REME Balance with Gold Ring */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex flex-col items-center">
                <CircularRing
                  value={remeBalance}
                  label="REME"
                  gradientColors={goldGradient}
                  size={180}
                  strokeWidth={12}
                  className="mb-4"
                />
                <div className="text-white/80 text-lg font-medium">REME</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-xl font-bold text-white">
                    £{remeValueGBP.toFixed(2)}
                  </div>
                  <div className="text-white/70 text-sm">Current Value</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-xl font-bold text-white">
                    £{remeMarketPrice.toFixed(2)}
                  </div>
                  <div className="text-white/70 text-sm">Market Price</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CAPs Breakdown */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-white mb-6">
              CAPs Earnings Breakdown
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-2">
                <span className="text-white/90">CAPs from Registrations</span>
                <span className="text-white font-semibold">200</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-white/90">CAPs from Referrals</span>
                <span className="text-white font-semibold">0</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-white/90">CAPs from Care Actions</span>
                <span className="text-white font-semibold">0</span>
              </div>

              <div className="border-t border-white/20 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-lg">
                    Total CAPs Earned
                  </span>
                  <span className="text-green-300 font-bold text-xl">
                    {Math.floor(capsBalance)}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
            Explore More
          </h3>

          <TooltipProvider>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Rewards */}
              <Card className="relative overflow-hidden bg-white/8 backdrop-blur-xl border border-white/15 hover:border-white/25 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 group">
                <CardContent className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/15 transition-all duration-300">
                      <Sparkles className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center cursor-help">
                          <Info className="w-3 h-3 text-white" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Track your progress and earn rewards</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">
                    Rewards
                  </h4>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed font-medium">
                    Track your progress and unlock exclusive rewards
                  </p>
                  <Button
                    onClick={() => (window.location.href = "/rewards")}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 border-0"
                  >
                    VIEW REWARDS
                  </Button>
                </CardContent>
              </Card>

              {/* Community Builder */}
              <Card className="relative overflow-hidden bg-white/8 backdrop-blur-xl border border-white/15 hover:border-white/25 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 group">
                <CardContent className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/15 transition-all duration-300">
                      <Users className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center cursor-help">
                          <Info className="w-3 h-3 text-white" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Information about Community Builder</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">
                    Community Builder
                  </h4>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed font-medium">
                    Earn REME tokens when you invite friends and family
                  </p>
                  <Button
                    onClick={() =>
                      (window.location.href = "/community-builder")
                    }
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 border-0"
                  >
                    VISIT RCB
                  </Button>
                </CardContent>
              </Card>

              {/* DeFi Hub */}
              <Card className="relative overflow-hidden bg-white/8 backdrop-blur-xl border border-white/15 hover:border-white/25 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 group">
                <CardContent className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/15 transition-all duration-300">
                      <Shield className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center cursor-help">
                          <Info className="w-3 h-3 text-white" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Information about DeFi Hub</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">
                    DeFi Hub
                  </h4>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed font-medium">
                    Convert CAPs to REME, buy tokens, trade & stake REME
                  </p>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 border-0">
                    VISIT DEFI HUB
                  </Button>
                </CardContent>
              </Card>

              {/* Market */}
              <Card className="relative overflow-hidden bg-white/8 backdrop-blur-xl border border-white/15 hover:border-white/25 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 group">
                <CardContent className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/15 transition-all duration-300">
                      <ShoppingBag className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center cursor-help">
                          <Info className="w-3 h-3 text-white" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Information about Market</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">
                    Market
                  </h4>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed font-medium">
                    Use your REME to redeem discounts, buy products and services
                  </p>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 border-0">
                    VISIT REME MARKET
                  </Button>
                </CardContent>
              </Card>

              {/* Lumi - Coming Soon */}
              <Card className="relative overflow-hidden bg-white/8 backdrop-blur-xl border border-white/15 transition-all duration-500 group">
                {/* Frosted overlay for coming soon */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-10"></div>
                <CardContent className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                      <Sparkles className="w-10 h-10 text-white/70 drop-shadow-lg" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center cursor-help z-20 relative">
                            <Info className="w-3 h-3 text-white/70" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Information about Lumi</p>
                        </TooltipContent>
                      </Tooltip>
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20 relative">
                        COMING SOON
                      </div>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white/70 mb-3 drop-shadow-sm">
                    Lumi
                  </h4>
                  <p className="text-white/50 text-sm mb-6 leading-relaxed font-medium">
                    Earn, buy and convert LUMI tokens
                  </p>
                  <Button
                    className="w-full bg-white/5 hover:bg-white/10 text-white/50 font-bold py-3 rounded-xl border border-white/10 cursor-not-allowed transition-all duration-300"
                    disabled
                  >
                    VISIT LUMI
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TooltipProvider>
        </div>

        {/* Secondary Actions */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            <Send className="w-4 h-4 mr-2" />
            Transfer
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Buy
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Trade
          </Button>
        </div>
      </main>

      {/* Swap Modal */}
      <SwapModal
        isOpen={isSwapModalOpen}
        onClose={() => setIsSwapModalOpen(false)}
        capsBalance={capsBalance}
        conversionRate={conversionRate}
      />
    </div>
  );
}
