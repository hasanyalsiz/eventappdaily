import React from "react";

export const ShowPasswordIcon = ({ color = "gray-500", size = "6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-${size} w-${size} text-${color}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.944 9.543 7-1.275 4.057-5.065 7-9.543 7-4.478 0-8.268-2.943-9.543-7z"
    />
  </svg>
);

export const HidePasswordIcon = ({ color = "gray-500", size = "6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-${size} w-${size} text-${color}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13.875 18.825A10.056 10.056 0 0112 19c-5.523 0-10-4.477-10-10 0-1.797.472-3.492 1.3-4.964M4.23 4.23l15.54 15.54M6.75 6.75A9.977 9.977 0 0012 4c5.523 0 10 4.477 10 10 0 1.88-.518 3.64-1.418 5.14M9 13h6M3 3l18 18"
    />
  </svg>
);
