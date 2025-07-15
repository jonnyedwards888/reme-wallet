"use client"

interface CircularDisplayProps {
  value: number
  label: string
  gradientColors: string[]
  size?: number
  className?: string
}

export function CircularDisplay({ value, label, gradientColors, size = 180, className = "" }: CircularDisplayProps) {
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="drop-shadow-2xl">
        {/* Gradient definition */}
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            {gradientColors.map((color, index) => (
              <stop key={index} offset={`${(index / (gradientColors.length - 1)) * 100}%`} stopColor={color} />
            ))}
          </linearGradient>
        </defs>

        {/* Solid gradient circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={(size - 20) / 2}
          fill={`url(#${gradientId})`}
          className="drop-shadow-xl"
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-4xl font-bold text-white mb-1 drop-shadow-lg">{value.toFixed(2)}</div>
        <div className="text-white/80 text-lg font-medium">{label}</div>
      </div>
    </div>
  )
}
