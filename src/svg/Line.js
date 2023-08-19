import React from 'react';

export default function Line() {
  return (
    <svg
      width="422"
      height="10"
      viewBox="0 0 422 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_4_37)">
        <path d="M4 1H418" stroke="url(#paint0_linear_4_37)" />
      </g>
      <defs>
        <filter
          id="filter0_d_4_37"
          x="0"
          y="0.5"
          width="422"
          height="9"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4_37"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4_37"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4_37"
          x1="418"
          y1="1.00238"
          x2="4"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#343045" />
          <stop offset="0.348958" stop-color="#C0B7E8" />
          <stop offset="0.6875" stop-color="#8176AF" />
          <stop offset="1" stop-color="#343045" />
        </linearGradient>
      </defs>
    </svg>
  );
}
