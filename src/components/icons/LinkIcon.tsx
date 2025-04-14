import { SVGProps } from 'react'

export const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <g transform="scale(0.80) translate(2, 2)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 14L6.5 17.5a4 4 0 005.5 5.5l3.5-3.5M14 10l3.5-3.5a4 4 0 00-5.5-5.5L8.5 4.5"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 15.5l7-7" />
    </g>
  </svg>
)
