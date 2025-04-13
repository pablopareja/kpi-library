export function StoryboardIllustration(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="56" height="56" rx="8" />
      <rect x="8" y="8" width="20" height="16" />
      <rect x="8" y="28" width="20" height="16" />
      <rect x="8" y="48" width="20" height="8" />
      <line x1="32" y1="8" x2="56" y2="8" />
      <line x1="32" y1="28" x2="56" y2="28" />
      <line x1="32" y1="48" x2="56" y2="48" />
    </svg>
  )
}
