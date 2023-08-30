import React from "react";

export default function SvgCircle() {
    
  return (
    <div>
      <svg
        width="48"
        height="95"
        viewBox="0 0 48 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="0.5"
          cy="47.5"
          r="47.5"
          fill="url(#paint0_radial_6:121)"
        ></circle>
        <defs>
          <radialGradient
            id="paint0_radial_6:121"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(0.5) rotate(90) scale(95)"
          >
            <stop stopColor="white"></stop>
            <stop offset="0.569" stopColor="#F0F4FD"></stop>
            <stop offset="0.993" stopColor="#D9E0F0"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
