"use client";

interface EnhancedFlameIconProps {
  className?: string;
  size?: number;
}

export function EnhancedFlameIcon({
  className = "",
  size = 24,
}: EnhancedFlameIconProps) {
  const gradientId = "flame-gradient";
  const shadowId = "flame-shadow";

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
        {/* Gradient for the flame */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" stopOpacity="1" />
          <stop offset="30%" stopColor="#FF8E53" stopOpacity="1" />
          <stop offset="60%" stopColor="#FFB366" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFC947" stopOpacity="1" />
        </linearGradient>

        {/* Shadow filter */}
        <filter id={shadowId} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="3"
            floodColor="#FF6B35"
            floodOpacity="0.3"
          />
          <feDropShadow
            dx="0"
            dy="1"
            stdDeviation="1"
            floodColor="#FF8E53"
            floodOpacity="0.4"
          />
        </filter>
      </defs>

      {/* Main flame paths with gradient and shadow */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={`url(#${gradientId})`}
        fill={`url(#${gradientId})`}
        fillOpacity="0.1"
        filter={`url(#${shadowId})`}
        d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={`url(#${gradientId})`}
        fill={`url(#${gradientId})`}
        fillOpacity="0.2"
        filter={`url(#${shadowId})`}
        d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
      />
    </svg>
  );
}
