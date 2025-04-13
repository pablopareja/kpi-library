export const KpiIllustration = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M16 40l8-12 12 10 12-24" />
      <circle cx="16" cy="40" r="2" />
      <circle cx="24" cy="28" r="2" />
      <circle cx="36" cy="38" r="2" />
      <circle cx="48" cy="14" r="2" />
    </svg>
  )
}
