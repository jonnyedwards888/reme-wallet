"use client";

import { X, ArrowDown, Info } from "lucide-react";
import { useState } from "react";
import "../styles/SwapModal.css";

interface SwapModalProps {
  isOpen: boolean;
  onClose: () => void;
  capsBalance: number;
  conversionRate: number;
}

export function SwapModal({
  isOpen,
  onClose,
  capsBalance,
  conversionRate,
}: SwapModalProps) {
  const [capsAmount, setCapsAmount] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const remeOutput = Number.parseFloat(capsAmount) * conversionRate || 0;
  const isValidAmount =
    Number.parseFloat(capsAmount) > 0 &&
    Number.parseFloat(capsAmount) <= capsBalance;

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <h2 className="modal-title">Swap CAPs to REME</h2>
          <button className="close-button" onClick={onClose}>
            <X className="icon" />
          </button>
        </div>
        <div className="modal-content">
          {/* From Section */}
          <div className="input-section">
            <label className="input-label">From</label>
            <div className="input-container">
              <input
                type="number"
                placeholder="0.00"
                value={capsAmount}
                onChange={(e) => setCapsAmount(e.target.value)}
                className="amount-input"
              />
              <div className="currency-label">CAPs</div>
            </div>
            <div className="available-text">
              Available: {Math.floor(capsBalance)} CAPs
            </div>
          </div>

          {/* Arrow */}
          <div className="arrow-container">
            <div className="arrow-icon">
              <ArrowDown className="icon" />
            </div>
          </div>

          {/* To Section */}
          <div className="input-section">
            <label className="input-label">To</label>
            <div className="input-container">
              <input
                type="text"
                value={remeOutput.toFixed(4)}
                readOnly
                className="amount-input output-input"
              />
              <div className="currency-label">REME</div>
            </div>
          </div>

          {/* Conversion Rate */}
          <div className="conversion-rate">
            <div className="rate-row">
              <span className="rate-label">Conversion Rate</span>
              <span className="rate-value">1 CAP = {conversionRate} REME</span>
            </div>
          </div>

          {/* Details Toggle */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="details-button"
          >
            <Info className="icon" />
            {showDetails ? "Hide Details" : "Show Details"}
          </button>

          {showDetails && (
            <div className="details-section">
              <div className="detail-row">
                <span>Network Fee</span>
                <span>~0.001 ETH</span>
              </div>
              <div className="detail-row">
                <span>Processing Time</span>
                <span>~2-5 minutes</span>
              </div>
            </div>
          )}

          {/* Convert Button */}
          <button className="convert-button" disabled={!isValidAmount}>
            Convert {capsAmount || "0"} CAPs to REME
          </button>
        </div>
      </div>
    </div>
  );
}
