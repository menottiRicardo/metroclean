import * as React from "react";

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="45"
      height="30"
      viewBox="0 0 45 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.8394 16.9551V1.4292H44.6735V16.9551H36.8394Z"
        fill="#0DEB73"
      />
      <path
        d="M7 5L41 24"
        stroke="url(#paint0_linear_103_2)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M5.96387 9.83911L35.6878 27.5215"
        stroke="url(#paint1_linear_103_2)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M40.6416 27.5215C42.8686 27.5215 44.6739 25.8319 44.6739 23.7478C44.6739 21.6637 42.8686 19.9741 40.6416 19.9741C38.4147 19.9741 36.6094 21.6637 36.6094 23.7478C36.6094 25.8319 38.4147 27.5215 40.6416 27.5215Z"
        fill="#FAFF00"
      />
      <path d="M0 0L8 3.93386V28H0V0Z" fill="#08CDF9" />
      <path
        d="M36.9219 1.37134L42.713 4.61009L29.9289 15.332L24.1665 11.8957L36.9219 1.37134Z"
        fill="#0DEB73"
      />
      <defs>
        <linearGradient
          id="paint0_linear_103_2"
          x1="24.2883"
          y1="4.42424"
          x2="24.2883"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08CDF9" />
          <stop offset="0.53125" stopColor="#0DEB73" />
          <stop offset="0.84375" stopColor="#FAFF00" />
          <stop
            offset="1"
            stopColor="#FAFF00"
            stop-opacity="0.160341"
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear_103_2"
          x1="20.8258"
          y1="9.83911"
          x2="20.8258"
          y2="27.5215"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#08CDF9" />
          <stop offset="0.53125" stopColor="#0DEB73" />
          <stop offset="0.9994" stopColor="#FAFF00" />
          <stop
            offset="0.9995"
            stopColor="#FAFF00"
            stop-opacity="0.160341"
          />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Logo;
