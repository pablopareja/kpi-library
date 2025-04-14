import { SVGProps } from 'react'

export const FavoriteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 4.5a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 18 4.5v15a.5.5 0 0 1-.8.4l-4.7-3.1a1 1 0 0 0-1 0l-4.7 3.1a.5.5 0 0 1-.8-.4v-15Z" />
  </svg>
)
