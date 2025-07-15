"use client";

import "../styles/CircularRing.css";
import { useId } from "react";

interface CircularRingProps {
  value: number;
  label: string;
  gradientColors: string[];
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function CircularRing({
  value,
  label,
  gradientColors,
  size = 180,
  strokeWidth = 12,
  className = "",
}: CircularRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const gradientId = useId();

  return (
    <div
      className={`circular-ring-container ${className}`}
      style={{ width: size, height: size }}
    >
      <svg className="circular-ring-svg" width={size} height={size}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="ring-background"
          strokeWidth={strokeWidth}
        />

        {/* Complete filled ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          className="ring-progress"
          strokeDasharray={circumference}
          strokeDashoffset={0}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            {gradientColors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (gradientColors.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>
      </svg>

      {/* Center content */}
      <div className="ring-center-content">
        <div className="ring-value">{Math.floor(value)}</div>
      </div>
    </div>
  );
}
