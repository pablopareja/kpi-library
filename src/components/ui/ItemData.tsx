interface ItemDataProps {
  item: { value: string; label: string }
}

export const ItemData = ({ item }: ItemDataProps) => (
  <div
    key={item.label}
    className="flex flex-1 flex-col gap-2 items-center justify-start px-4 py-4 min-w-[140px] h-22"
  >
    <span className="font-bold text-black">{item.value}</span>
    <span className="text-gray-400 text-sm text-center">{item.label}</span>
  </div>
)
