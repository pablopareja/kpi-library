export function LayoutIllustration(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="24" y1="4" x2="24" y2="60" />
      <line x1="4" y1="28" x2="60" y2="28" />
    </svg>
  )
}
