"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Eye, EyeOff, HelpCircle, LogOut, Wallet } from "lucide-react";
import { useState } from "react";

export default function WalletDashboard() {
  const [showWalletAddress, setShowWalletAddress] = useState(false);
  const [showConvexAddress, setShowConvexAddress] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-pink-500">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">ReMe Wallet</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            ReMeLife
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">
            <HelpCircle className="w-4 h-4 mr-2" />
            Need help?
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">
            <LogOut className="w-4 h-4 mr-2" />
            LOGOUT
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-6">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Hi, Vitalik Buterin
            </h2>

            {/* Wallet Addresses */}
            <div className="flex justify-center gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-4">
                  <div className="text-white/80 text-sm mb-2">
                    Your Wallet address:
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-mono">
                      {showWalletAddress ? "0xa3D2...9302" : "0xa3D2...****"}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/10 p-1"
                      onClick={() => setShowWalletAddress(!showWalletAddress)}
                    >
                      {showWalletAddress ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/10 p-1"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-4">
                  <div className="text-white/80 text-sm mb-2">
                    Convex Wallet address:
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-mono">
                      {showConvexAddress ? "0x1234...NVEX" : "0x1234...****"}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/10 p-1"
                      onClick={() => setShowConvexAddress(!showConvexAddress)}
                    >
                      {showConvexAddress ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/10 p-1"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Wallet Token Balances */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  WALLET TOKEN BALANCES
                </h3>
                <div className="w-12 h-0.5 bg-white/40 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* CAPs Balance */}
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-white mb-6">
                    CAPs Balance
                  </h4>

                  {/* Circular Progress */}
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white">
                            200.00
                          </div>
                          <div className="text-white/80 text-sm">
                            Total CAPs
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="text-lg font-semibold text-white">
                      CAPs Earned
                    </h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          <span className="text-white/90">
                            CAPs from Registrations
                          </span>
                        </div>
                        <span className="text-white font-semibold">200.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                          <span className="text-white/90">
                            CAPs from Referrals
                          </span>
                        </div>
                        <span className="text-white font-semibold">0.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                          <span className="text-white/90">
                            CAPs from Care Actions
                          </span>
                        </div>
                        <span className="text-white font-semibold">0.00</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/20">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">
                          Total CAPs earned
                        </span>
                        <span className="text-blue-300 font-bold text-lg">
                          200.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* REME Balance */}
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-white mb-6">
                    REME Balance
                  </h4>

                  <div className="bg-white/5 rounded-2xl p-8 mb-6">
                    <div className="text-6xl font-bold text-purple-300 mb-2">
                      500
                    </div>
                    <div className="text-white/80 text-lg">REME</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-2xl font-bold text-white">
                        £50.00
                      </div>
                      <div className="text-white/70 text-sm">
                        REME value now
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-2xl font-bold text-white">£0.10</div>
                      <div className="text-white/70 text-sm">
                        REME market price
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 px-8 py-3">
                  Transfer
                </Button>
                <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 px-8 py-3">
                  Buy
                </Button>
                <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 px-8 py-3">
                  Trade
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
