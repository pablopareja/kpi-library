import React from 'react'

export const RequestIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="2 2 16 16" // tightened viewBox to fit the actual content
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Cube */}
      <path d="M9 3L3 6L9 9L15 6L9 3Z" />
      <path d="M3 6V12L9 15V9" />
      <path d="M15 6V12L9 15" />

      {/* Background circle behind plus icon */}
      <circle cx="13.5" cy="12" r="4" fill="#64748B" />

      {/* Plus Icon */}
      <path d="M13.5 9.5V14.5" stroke="white" />
      <path d="M11.5 12H15.5" stroke="white" />
    </svg>
  )
}
