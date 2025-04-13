import React from 'react'

export const RequestIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Cube */}
      <path d="M9 3L3 6L9 9L15 6L9 3Z" />
      <path d="M3 6V12L9 15V9" />
      <path d="M15 6V12L9 15" />

      {/* Plus Icon in top right corner */}
      <path d="M13.5 9.5V14.5" />
      <path d="M11.5 12H15.5" />
    </svg>
  )
}
