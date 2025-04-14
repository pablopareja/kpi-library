interface TagPillProps {
  tag: string
}

export const TagPill = ({ tag }: TagPillProps) => {
  return (
    <div className="text-xs text-gray-500 rounded border-2 border-solid border-gray-200 bg-gray-100 p-1">{`#${tag}`}</div>
  )
}
