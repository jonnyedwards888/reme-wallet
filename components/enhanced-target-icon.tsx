"use client";

interface EnhancedTargetIconProps {
  className?: string;
  size?: number;
}

export function EnhancedTargetIcon({
  className = "",
  size = 24,
}: EnhancedTargetIconProps) {
  const gradientId = "target-gradient";
  const shadowId = "target-shadow";

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
        {/* Gradient for the target */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
          <stop offset="30%" stopColor="#60A5FA" stopOpacity="1" />
          <stop offset="60%" stopColor="#93C5FD" stopOpacity="1" />
          <stop offset="100%" stopColor="#DBEAFE" stopOpacity="1" />
        </linearGradient>

        {/* Shadow filter */}
        <filter id={shadowId} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="3"
            floodColor="#3B82F6"
            floodOpacity="0.3"
          />
          <feDropShadow
            dx="0"
            dy="1"
            stdDeviation="1"
            floodColor="#60A5FA"
            floodOpacity="0.4"
          />
        </filter>
      </defs>

      {/* Target circles */}
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={`url(#${gradientId})`}
        fill="none"
        filter={`url(#${shadowId})`}
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="12"
        r="6"
        stroke={`url(#${gradientId})`}
        fill="none"
        filter={`url(#${shadowId})`}
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        stroke={`url(#${gradientId})`}
        fill={`url(#${gradientId})`}
        fillOpacity="0.3"
        filter={`url(#${shadowId})`}
        strokeWidth="1.5"
      />
    </svg>
  );
}
