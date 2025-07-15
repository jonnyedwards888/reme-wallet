"use client";

interface EnhancedCrownIconProps {
  className?: string;
  size?: number;
}

export function EnhancedCrownIcon({
  className = "",
  size = 24,
}: EnhancedCrownIconProps) {
  const gradientId = "crown-gradient";
  const shadowId = "crown-shadow";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      className={`${className}`}
      width={size}
      height={size}
    >
      <defs>
        {/* Metallic gradient for the crown */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" stopOpacity="1" />
          <stop offset="25%" stopColor="#F59E0B" stopOpacity="1" />
          <stop offset="50%" stopColor="#D97706" stopOpacity="1" />
          <stop offset="75%" stopColor="#F59E0B" stopOpacity="1" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="1" />
        </linearGradient>

        {/* Shadow filter */}
        <filter id={shadowId} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="3"
            stdDeviation="4"
            floodColor="#D97706"
            floodOpacity="0.4"
          />
          <feDropShadow
            dx="0"
            dy="1"
            stdDeviation="2"
            floodColor="#F59E0B"
            floodOpacity="0.5"
          />
        </filter>
      </defs>

      {/* Crown path */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={`url(#${gradientId})`}
        fill={`url(#${gradientId})`}
        fillOpacity="0.15"
        filter={`url(#${shadowId})`}
        d="M5 13l4-8 4 8 4-8 4 8H5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={`url(#${gradientId})`}
        fill={`url(#${gradientId})`}
        fillOpacity="0.2"
        filter={`url(#${shadowId})`}
        d="M3 20h18v-2H3v2z"
      />
      {/* Crown jewels */}
      <circle
        cx="12"
        cy="8"
        r="1.5"
        fill={`url(#${gradientId})`}
        filter={`url(#${shadowId})`}
      />
      <circle
        cx="8"
        cy="10"
        r="1"
        fill={`url(#${gradientId})`}
        filter={`url(#${shadowId})`}
      />
      <circle
        cx="16"
        cy="10"
        r="1"
        fill={`url(#${gradientId})`}
        filter={`url(#${shadowId})`}
      />
    </svg>
  );
}
