import type React from "react"

interface PandaLogoProps {
  width?: number
  height?: number
}

export const PandaLogo: React.FC<PandaLogoProps> = ({ width = 120, height = 120 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main head circle */}
      <circle cx="60" cy="60" r="40" fill="white" stroke="black" strokeWidth="2" />

      {/* Ears */}
      <circle cx="35" cy="35" r="12" fill="black" stroke="black" strokeWidth="2" />
      <circle cx="85" cy="35" r="12" fill="black" stroke="black" strokeWidth="2" />

      {/* Inner ear details */}
      <circle cx="35" cy="35" r="6" fill="white" />
      <circle cx="85" cy="35" r="6" fill="white" />

      {/* Eyes - large oval with highlights */}
      <ellipse cx="45" cy="55" rx="10" ry="12" fill="black" />
      <ellipse cx="75" cy="55" rx="10" ry="12" fill="black" />

      {/* Eye highlights */}
      <ellipse cx="48" cy="50" rx="4" ry="5" fill="white" />
      <ellipse cx="78" cy="50" rx="4" ry="5" fill="white" />

      {/* Small secondary highlights */}
      <circle cx="42" cy="58" r="2" fill="white" opacity="0.7" />
      <circle cx="72" cy="58" r="2" fill="white" opacity="0.7" />

      {/* Nose */}
      <circle cx="60" cy="70" r="5" fill="black" />

      {/* Mouth - simple curved line */}
      <path d="M50 78 Q60 85 70 78" stroke="black" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Blush spots on cheeks */}
      <circle cx="40" cy="70" r="5" fill="#FF9999" opacity="0.4" />
      <circle cx="80" cy="70" r="5" fill="#FF9999" opacity="0.4" />
    </svg>
  )
}
