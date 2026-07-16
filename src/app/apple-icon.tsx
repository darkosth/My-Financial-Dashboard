import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="180"
        height="180"
      >
        <defs>
          <linearGradient
            id="tile"
            x1="128"
            y1="112"
            x2="392"
            y2="408"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#10b981" />
            <stop offset="1" stopColor="#047857" />
          </linearGradient>
          <linearGradient
            id="core"
            x1="216"
            y1="210"
            x2="304"
            y2="310"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#d1fae5" />
            <stop offset="1" stopColor="#6ee7b7" />
          </linearGradient>
        </defs>

        <rect width="512" height="512" fill="url(#tile)" />
        <path
          d="M0 0h512v112C402 76 296 82 202 128 116 170 54 230 0 300V0Z"
          fill="#34d399"
          opacity=".2"
        />

        <g transform="translate(256 256) scale(1.344) translate(-256 -256)">
          <path
            d="M344 194a118 118 0 0 0-174 13"
            fill="none"
            stroke="#f8faf9"
            strokeWidth="34"
            strokeLinecap="round"
          />
          <path
            d="M168 318a118 118 0 0 0 177-12"
            fill="none"
            stroke="#f8faf9"
            strokeWidth="34"
            strokeLinecap="round"
          />
          <path d="m341 168 25 43-50 1 25-44Z" fill="#f8faf9" />
          <path d="m171 344-25-43 50-1-25 44Z" fill="#f8faf9" />

          <circle cx="256" cy="256" r="72" fill="#07120d" />
          <path
            d="M256 205 307 256 256 307 205 256 256 205Z"
            fill="url(#core)"
          />
          <circle cx="256" cy="256" r="20" fill="#07120d" />
        </g>
      </svg>
    ),
    size,
  );
}
