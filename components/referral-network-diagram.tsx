"use client";

import { Users, User } from "lucide-react";

export function ReferralNetworkDiagram() {
  return (
    <div className="relative w-full max-w-lg mx-auto py-6">
      {/* Level 1 - User (Center/Top) */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
            <User className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-white font-bold text-sm">You</div>
          </div>
        </div>
      </div>

      {/* Connection Lines Level 1 to 2 */}
      <div className="flex justify-center mb-4">
        <svg width="250" height="30" className="absolute">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.6)" />
            </linearGradient>
          </defs>
          <line
            x1="125"
            y1="0"
            x2="62.5"
            y2="30"
            stroke="url(#lineGradient)"
            strokeWidth="2"
          />
          <line
            x1="125"
            y1="0"
            x2="125"
            y2="30"
            stroke="url(#lineGradient)"
            strokeWidth="2"
          />
          <line
            x1="125"
            y1="0"
            x2="187.5"
            y2="30"
            stroke="url(#lineGradient)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Level 2 - Direct Referrals */}
      <div className="flex justify-center gap-6 mb-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white/20">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-6">
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-3 border border-white/10 inline-block">
          <div className="text-white font-bold">Level 1: Direct Referrals</div>
          <div className="text-blue-300 font-semibold">100 CAPs per friend</div>
        </div>
      </div>

      {/* Connection Lines Level 2 to 3 */}
      <div className="flex justify-center mb-4">
        <svg width="320" height="30" className="absolute">
          <defs>
            <linearGradient
              id="lineGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.6)" />
            </linearGradient>
          </defs>
          {/* Left branch */}
          <line
            x1="80"
            y1="0"
            x2="48"
            y2="30"
            stroke="url(#lineGradient2)"
            strokeWidth="2"
          />
          <line
            x1="80"
            y1="0"
            x2="112"
            y2="30"
            stroke="url(#lineGradient2)"
            strokeWidth="2"
          />
          {/* Center branch */}
          <line
            x1="160"
            y1="0"
            x2="144"
            y2="30"
            stroke="url(#lineGradient2)"
            strokeWidth="2"
          />
          <line
            x1="160"
            y1="0"
            x2="176"
            y2="30"
            stroke="url(#lineGradient2)"
            strokeWidth="2"
          />
          {/* Right branch */}
          <line
            x1="240"
            y1="0"
            x2="208"
            y2="30"
            stroke="url(#lineGradient2)"
            strokeWidth="2"
          />
          <line
            x1="240"
            y1="0"
            x2="272"
            y2="30"
            stroke="url(#lineGradient2)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Level 3 - Second Level Referrals */}
      <div className="flex justify-center gap-3 mb-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg border border-white/20">
              <Users className="w-5 h-5 text-white" />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-3 border border-white/10 inline-block">
          <div className="text-white font-bold">
            Level 2: Friends of Friends
          </div>
          <div className="text-green-300 font-semibold">50 CAPs per friend</div>
        </div>
      </div>

      {/* Connection Lines Level 3 to 4 */}
      <div className="flex justify-center mb-4">
        <svg width="400" height="30" className="absolute">
          <defs>
            <linearGradient
              id="lineGradient3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.6)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.6)" />
            </linearGradient>
          </defs>
          {/* Left branch */}
          <line
            x1="100"
            y1="0"
            x2="60"
            y2="30"
            stroke="url(#lineGradient3)"
            strokeWidth="2"
          />
          <line
            x1="100"
            y1="0"
            x2="140"
            y2="30"
            stroke="url(#lineGradient3)"
            strokeWidth="2"
          />
          {/* Center branch */}
          <line
            x1="200"
            y1="0"
            x2="180"
            y2="30"
            stroke="url(#lineGradient3)"
            strokeWidth="2"
          />
          <line
            x1="200"
            y1="0"
            x2="220"
            y2="30"
            stroke="url(#lineGradient3)"
            strokeWidth="2"
          />
          {/* Right branch */}
          <line
            x1="300"
            y1="0"
            x2="260"
            y2="30"
            stroke="url(#lineGradient3)"
            strokeWidth="2"
          />
          <line
            x1="300"
            y1="0"
            x2="340"
            y2="30"
            stroke="url(#lineGradient3)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Level 4 - Third Level Referrals */}
      <div className="flex justify-center gap-2 mb-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-md border border-white/20">
              <Users className="w-4 h-4 text-white" />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-3 border border-white/10 inline-block">
          <div className="text-white font-bold">
            Level 3: Friends of Friends of Friends
          </div>
          <div className="text-purple-300 font-semibold">
            25 CAPs per friend
          </div>
        </div>
      </div>
    </div>
  );
}
