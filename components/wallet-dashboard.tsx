"use client";

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
import { SwapModal } from "./swap-modal";
import { WalletAddresses } from "./wallet-addresses";
import { CircularRing } from "./circular-ring";
import { CircularProgress } from "./circular-progress";
import "../styles/WalletDashboard.css";

export default function WalletDashboard() {
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);

  const capsBalance = 200.0;
  const remeBalance = 500;
  const remeValueGBP = 50.0;
  const remeMarketPrice = 0.1;
  const conversionRate = 2.5; // 1 CAP = 2.5 REME

  const blueGradient = ["#3B82F6", "#1D4ED8", "#1E40AF"];
  const goldGradient = ["#FCD34D", "#F59E0B", "#D97706"];

  return (
    <div className="wallet-page">
      {/* Header */}
      <header className="wallet-header">
        <div>
          <h1 className="wallet-title">ReMeLife Wallet</h1>
        </div>
        <button className="logout-button">
          <LogOut className="icon" />
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="wallet-main">
        {/* User Greeting */}
        <div className="user-greeting">
          <h2 className="greeting-title">Hi, Vitalik Buterin</h2>
        </div>

        {/* Wallet Addresses */}
        <div className="wallet-addresses-section">
          <WalletAddresses />
        </div>

        {/* Primary Balance Display */}
        <div className="balance-grid">
          {/* CAPs Balance with Blue Ring */}
          {/* REMOVED: Old CAPs and REME CircularRing cards */}
        </div>

        {/* Earnings Section Header */}
        {/* CAPs Breakdown */}
        <div className="breakdown-card breakdown-flex">
          {/* Left: Earnings Breakdown Info */}
          <div className="breakdown-info">
            <h3 className="breakdown-title">Total CAPs Earned</h3>
            <div className="breakdown-list">
              <div className="breakdown-item">
                <span className="breakdown-label">CAPs from Registrations</span>
                <span className="breakdown-value">200</span>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">CAPs from Referrals</span>
                <span className="breakdown-value">0</span>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">CAPs from Care Actions</span>
                <span className="breakdown-value">0</span>
              </div>
              <div className="breakdown-total">
                <span className="breakdown-total-label">Total CAPs Earned</span>
                <span className="breakdown-total-value">
                  {Math.floor(capsBalance)}
                </span>
              </div>
            </div>
          </div>
          {/* Right: Glowing Animated Orb - Balance Only */}
          <div className="breakdown-orb">
            <div className="circular-progress">
              <div className="caps-circle-glow"></div>
              <div className="caps-ambient-glow"></div>
              <div className="caps-outer-glow"></div>
              <div className="caps-inner-glow"></div>
              <div className="caps-radial-overlay-layer2"></div>
              <div className="caps-radial-overlay"></div>
              <div className="stat-number">
                <CircularProgress
                  value={capsBalance}
                  max={capsBalance}
                  size={280}
                  strokeWidth={20}
                  className="no-progress-percentage"
                  label="CAPS"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section spacing */}
        <div style={{ height: "2.5rem" }}></div>

        {/* Balances Section Header */}
        <div className="balances-section-header">Balances</div>

        {/* Minimalist Balance Cards Row */}
        <div className="balance-cards-row">
          {/* CAPs Balance Card */}
          <div className="balance-flat-card balance-flat-card-center-text">
            <div className="balance-flat-label balance-flat-label-center-text">
              CAPS
            </div>
            <div className="balance-flat-value balance-flat-value-center-text">
              {Math.floor(capsBalance)}
            </div>
            <button
              className="rewards-hub-button rewards-hub-button-balance rewards-hub-disabled"
              style={{
                marginTop: "1.2rem",
                width: "100%",
                textDecoration: "line-through",
                opacity: 0.6,
                cursor: "not-allowed",
              }}
              disabled
            >
              Rewards Hub
            </button>
            <div
              className="rewards-hub-coming-soon"
              style={{
                width: "100%",
                textAlign: "center",
                marginTop: "0.75rem",
              }}
            >
              <span className="coming-soon-badge">COMING SOON</span>
            </div>
          </div>

          {/* Swap Button Section */}
          <div className="swap-flat-section">
            <button
              onClick={() => setIsSwapModalOpen(true)}
              className="swap-flat-button"
            >
              CAPs ⇄ REME
            </button>
          </div>

          {/* REME Balance Card */}
          <div className="balance-flat-card">
            <div className="balance-flat-label">REME</div>
            <div className="balance-flat-value">{remeBalance.toFixed(2)}</div>
            <div className="reme-flat-stats">
              <div className="reme-flat-stat">
                <span className="reme-flat-stat-label">Current Value</span>
                <span className="reme-flat-stat-value">
                  £{remeValueGBP.toFixed(2)}
                </span>
              </div>
              <div className="reme-flat-stat">
                <span className="reme-flat-stat-label">Market Price</span>
                <span className="reme-flat-stat-value">
                  £{remeMarketPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <h3 className="services-title">Explore More</h3>

          <div className="services-grid">
            {/* Rewards - REMOVE THIS CARD */}
            {/* <div
              className="service-card"
              onClick={() => (window.location.href = "/rewards")}
            >
              <div className="service-content">
                <div className="service-header">
                  <div className="service-icon-container">
                    <Sparkles className="service-icon" />
                  </div>
                  <div className="info-icon-container">
                    <Info className="info-icon" />
                  </div>
                </div>
                <h4 className="service-title">Rewards</h4>
                <p className="service-description">
                  Track your progress and unlock exclusive rewards
                </p>
                <button className="service-button">VIEW REWARDS</button>
              </div>
            </div> */}

            {/* Community Builder */}
            <div
              className="service-card"
              onClick={() => (window.location.href = "/community-builder")}
            >
              <div
                className="service-content"
                style={{
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  position: "relative",
                }}
              >
                <div
                  className="service-main-content"
                  style={{ marginBottom: "auto" }}
                >
                  <div
                    className="service-header"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="service-icon-container">
                      <img
                        className="community-builder-icon"
                        src="/logos/community-builder-icon.png"
                        alt="Community Builder Icon"
                        style={{ width: 40, height: 40, borderRadius: 8 }}
                      />
                    </div>
                    <div className="info-icon-container">
                      <Info className="info-icon" />
                    </div>
                  </div>
                  <h4 className="service-title">Community Builder</h4>
                  <p className="service-description">
                    Earn REME tokens when you invite friends and family
                  </p>
                </div>
                <button className="service-button">VISIT RCB</button>
              </div>
            </div>

            {/* DeFi Hub */}
            <div className="service-card">
              <div
                className="service-content"
                style={{
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  position: "relative",
                }}
              >
                <span
                  className="coming-soon-badge"
                  style={{
                    position: "absolute",
                    top: 24,
                    right: 104,
                    zIndex: 2,
                  }}
                >
                  COMING SOON
                </span>
                <div
                  className="service-main-content"
                  style={{ marginBottom: "auto" }}
                >
                  <div
                    className="service-header"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="service-icon-container">
                      <img
                        className="defi-hub-icon"
                        src="/logos/defi-hub-icon.png"
                        alt="DeFi Hub Icon"
                        style={{ width: 40, height: 40, borderRadius: 8 }}
                      />
                    </div>
                    <div className="info-icon-container">
                      <Info className="info-icon" />
                    </div>
                  </div>
                  <h4 className="service-title">DeFi Hub</h4>
                  <p className="service-description">
                    Convert CAPs to REME, buy tokens, trade & stake REME
                  </p>
                </div>
                <button className="service-button">VISIT DEFI HUB</button>
              </div>
            </div>

            {/* Market */}
            <div className="service-card">
              <div
                className="service-content"
                style={{
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  position: "relative",
                }}
              >
                <div
                  className="service-main-content"
                  style={{ marginBottom: "auto" }}
                >
                  <div
                    className="service-header"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="service-icon-container">
                      <img
                        className="reme-market-icon"
                        src="/logos/reme-market-icon.png"
                        alt="REME Market Icon"
                        style={{ width: 40, height: 40, borderRadius: 8 }}
                      />
                    </div>
                    <div className="info-icon-container">
                      <Info className="info-icon" />
                    </div>
                  </div>
                  <h4 className="service-title">Market</h4>
                  <p className="service-description">
                    Use your REME to redeem discounts, buy products and services
                  </p>
                </div>
                <button className="service-button">VISIT REME MARKET</button>
              </div>
            </div>

            {/* Lumi */}
            <div className="service-card">
              <div
                className="service-content"
                style={{
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  position: "relative",
                }}
              >
                <span
                  className="coming-soon-badge"
                  style={{
                    position: "absolute",
                    top: 24,
                    right: 104,
                    zIndex: 2,
                  }}
                >
                  COMING SOON
                </span>
                <div
                  className="service-main-content"
                  style={{ marginBottom: "auto" }}
                >
                  <div
                    className="service-header"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="service-icon-container">
                      <img
                        className="lumi-icon"
                        src="/logos/lumi-main-logo.png"
                        alt="Lumi Logo"
                        style={{ width: 40, height: 40, borderRadius: 8 }}
                      />
                    </div>
                    <div className="info-icon-container">
                      <Info className="info-icon" />
                    </div>
                  </div>
                  <h4 className="service-title">Lumi</h4>
                  <p className="service-description">
                    Earn, buy and convert LUMI tokens
                  </p>
                </div>
                <button
                  className="service-button"
                  onClick={() =>
                    window.open(
                      "https://lumi-ai.io/",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  VISIT LUMI
                </button>
              </div>
            </div>
          </div>
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
