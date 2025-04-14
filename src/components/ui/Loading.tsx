interface LoadingProps {
  className?: string
}

export const LoadingText = ({ className = '' }: LoadingProps) => (
  <div className={`animate-pulse ${className}`}>Loading...</div>
)
