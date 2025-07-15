"use client"

import { Copy, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import "../styles/WalletAddresses.css"

export function WalletAddresses() {
  const [isExpanded, setIsExpanded] = useState(false)

  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address)
  }

  return (
    <div className="wallet-addresses-card">
      <button onClick={() => setIsExpanded(!isExpanded)} className="addresses-toggle">
        <span className="addresses-title">Wallet Addresses</span>
        {isExpanded ? <ChevronUp className="icon" /> : <ChevronDown className="icon" />}
      </button>

      {isExpanded && (
        <div className="addresses-content">
          <div className="address-row">
            <div className="address-info">
              <div className="address-type">Your Wallet</div>
              <div className="address-value">0xa3b2...••••</div>
            </div>
            <button
              onClick={() => copyToClipboard("0xa3b2c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1")}
              className="copy-address-button"
            >
              <Copy className="icon" />
            </button>
          </div>

          <div className="address-row">
            <div className="address-info">
              <div className="address-type">Convex Wallet</div>
              <div className="address-value">0x1234...••••</div>
            </div>
            <button
              onClick={() => copyToClipboard("0x1234567890abcdef1234567890abcdef12345678")}
              className="copy-address-button"
            >
              <Copy className="icon" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
