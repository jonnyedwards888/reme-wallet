"use client";

import {
  ArrowLeft,
  HelpCircle,
  Trophy,
  Star,
  Award,
  Medal,
} from "lucide-react";
import { CircularProgress } from "./circular-progress";
import { EnhancedFlameIcon } from "./enhanced-flame-icon";
import { EnhancedTargetIcon } from "./enhanced-target-icon";
import { EnhancedCrownIcon } from "./enhanced-crown-icon";
import "../styles/RewardsPage.css";

export default function RewardsPage() {
  // Mock user data
  const userProgress = {
    dailyGoal: {
      current: 400,
      target: 500,
      percentage: 80,
    },
    weeklyStreak: {
      currentStreak: 5,
      daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      completedDays: [false, true, true, true, true, true, false], // Monday to Friday completed
    },
    communityRank: {
      percentage: 80,
      rank: "Top 20%",
    },
    totalCaps: {
      current: 12450,
      nextRewardGoal: 15000,
      remaining: 2550,
    },
  };

  const getDayIcon = (index: number, completed: boolean) => {
    const isToday = index === 5; // Friday is today in this example

    if (completed) {
      return <div className="day-icon day-completed"></div>;
    } else if (isToday) {
      return <div className="day-icon day-today"></div>;
    } else {
      return <div className="day-icon day-incomplete"></div>;
    }
  };

  return (
    <div className="rewards-page">
      {/* Header */}
      <header className="rewards-header">
        <button className="back-button" onClick={() => window.history.back()}>
          <ArrowLeft className="icon" />
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <h1 className="rewards-title">Rewards</h1>
          <span className="beta-badge">Beta</span>
        </div>

        <button className="help-button">
          <HelpCircle className="icon" />
          Help
        </button>
      </header>

      <p className="rewards-beta-message">
        The Rewards page is currently in beta. Some features may not be
        available yet.
      </p>

      {/* Main Content */}
      <div className="main-rewards-container">
        <div className="rewards-grid">
          {/* Left Column - Your Progress */}
          <div className="progress-section">
            <div className="progress-card">
              <div className="progress-title-container">
                <h2 className="progress-title">Progress</h2>
              </div>

              {/* Daily Goal */}
              <div className="goal-section">
                <div className="goal-header">
                  <div className="goal-icon-container">
                    <div className="goal-icon">
                      <EnhancedTargetIcon size={28} className="icon-large" />
                    </div>
                    <div className="goal-icon-glow"></div>
                  </div>
                  <h3 className="goal-title">Daily Goal</h3>
                </div>
                <div className="goal-progress">
                  <div className="progress-text">
                    <span className="progress-label">Today's Progress</span>
                    <span className="progress-number">
                      {userProgress.dailyGoal.current} /{" "}
                      {userProgress.dailyGoal.target} CAPs
                    </span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${userProgress.dailyGoal.percentage}%`,
                        }}
                      ></div>
                    </div>
                    <div className="progress-glow"></div>
                  </div>
                  <div className="small-stat">
                    {userProgress.dailyGoal.percentage}% Complete
                  </div>
                </div>
              </div>

              {/* Weekly Streak */}
              <div className="streak-section">
                <div className="streak-header">
                  <div className="streak-icon-container">
                    <div className="streak-icon">
                      <EnhancedFlameIcon size={28} className="icon-large" />
                    </div>
                    <div className="streak-icon-glow"></div>
                  </div>
                  <div className="streak-title-container">
                    <h4 className="streak-title">Weekly Streak</h4>
                    <span className="streak-count">
                      {userProgress.weeklyStreak.currentStreak}
                    </span>
                  </div>
                </div>
                <div className="week-days">
                  {userProgress.weeklyStreak.daysOfWeek.map((day, index) => (
                    <div key={day} className="day-container">
                      {getDayIcon(
                        index,
                        userProgress.weeklyStreak.completedDays[index]
                      )}
                      <span className="day-label">{day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Rank */}
              <div className="rank-section">
                <div className="rank-header">
                  <div className="rank-icon-container">
                    <div className="rank-icon">
                      <EnhancedCrownIcon size={28} className="icon-large" />
                    </div>
                    <div className="rank-icon-glow"></div>
                  </div>
                  <h4 className="rank-title">Community Rank</h4>
                </div>
                <div className="goal-progress">
                  <div className="progress-text">
                    <span className="progress-label">Your Ranking</span>
                    <span className="progress-value">
                      {userProgress.communityRank.rank} of Earners
                    </span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${userProgress.communityRank.percentage}%`,
                        }}
                      ></div>
                    </div>
                    <div className="progress-glow"></div>
                  </div>
                  <div className="small-stat">
                    Better than {userProgress.communityRank.percentage}% of
                    users
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Total CAPs */}
          <div className="caps-section">
            <div className="caps-card">
              <div className="caps-title">
                <h2>Total CAPs</h2>
              </div>

              {/* Large Circular Progress Ring */}
              <div className="circular-progress">
                <div className="caps-circle-glow"></div>
                <div className="caps-ambient-glow"></div>
                <div className="caps-outer-glow"></div>
                <div className="caps-inner-glow"></div>
                <div className="caps-radial-overlay-layer2"></div>
                <div className="caps-radial-overlay"></div>
                <div className="stat-number">
                  <CircularProgress
                    value={userProgress.totalCaps.current}
                    max={userProgress.totalCaps.nextRewardGoal}
                    size={280}
                    strokeWidth={20}
                  />
                </div>
              </div>

              {/* Goal Text */}
              <div className="goal-text">
                <p>
                  Goal:{" "}
                  <span className="goal-remaining">
                    {userProgress.totalCaps.remaining.toLocaleString()}
                  </span>{" "}
                  more CAPs
                </p>
                <p className="goal-subtitle">to unlock next reward</p>
              </div>

              {/* Next Reward Preview */}
              <div className="next-reward">
                <div className="reward-content">
                  <div className="reward-icon-container">
                    <div className="reward-icon">
                      <Trophy className="icon-large" />
                    </div>
                    <div className="reward-icon-glow"></div>
                  </div>
                  <div className="reward-text">
                    <h4>Next Reward</h4>
                    <p>Premium Badge + 500 Bonus CAPs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="achievements-section">
          <h3 className="achievements-title">Recent Achievements</h3>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon-container">
                <div className="achievement-icon">
                  <Award className="icon-large" />
                </div>
                <div className="achievement-icon-glow"></div>
              </div>
              <h4 className="achievement-title">First Week</h4>
              <p className="achievement-description">
                Completed your first week of earning CAPs
              </p>
            </div>

            <div className="achievement-card blue">
              <div className="achievement-icon-container">
                <div className="achievement-icon blue">
                  <Star className="icon-large" />
                </div>
                <div className="achievement-icon-glow blue"></div>
              </div>
              <h4 className="achievement-title">Community Member</h4>
              <p className="achievement-description">
                Joined the ReMeLife community
              </p>
            </div>

            <div className="achievement-card locked">
              <div className="achievement-icon-container">
                <div className="achievement-icon locked">
                  <Medal className="icon-large" />
                </div>
              </div>
              <h4 className="achievement-title locked">Streak Master</h4>
              <p className="achievement-description locked">
                Maintain a 7-day earning streak
              </p>
              <div className="achievement-progress">
                <span className="achievement-progress-text">2 days to go!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
