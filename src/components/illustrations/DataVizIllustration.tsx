export const DataVizIllustration = (props: React.SVGProps<SVGSVGElement>) => {
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
      <rect x="4" y="4" width="56" height="56" rx="8" stroke="currentColor" />
      <rect x="16" y="32" width="6" height="20" />
      <rect x="28" y="24" width="6" height="28" />
      <rect x="40" y="16" width="6" height="36" />
    </svg>
  )
}
