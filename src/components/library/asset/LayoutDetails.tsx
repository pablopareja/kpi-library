import { ItemData } from '@/components/ui/ItemData'
import { VisualizationPlaceholder } from '@/components/ui/VisualizationPlaceholder'
import { Layout } from '@/types'

interface LayoutDetailsProps {
  layout: Layout
}

export const LayoutDetails = ({ layout }: LayoutDetailsProps) => (
  <div className="flex flex-col gap-8 w-full">
    <div className="flex flex-wrap justify-between items-start w-full rounded divide-x divide-gray-200">
      {[
        {
          label: 'Used ⓘ',
          value: `${layout.kpisUsed}`,
        },
        {
          label: 'Type',
          value: layout.layoutType,
        },
        {
          label: 'Pages No. ⓘ',
          value: `${layout.amountOfPages}`,
        },
        {
          label: 'Last Updated',
          value: layout.updatedAtDate,
        },
      ].map(item => (
        <ItemData key={`item-${item.label}`} item={item} />
      ))}
    </div>
    <VisualizationPlaceholder />
  </div>
)
