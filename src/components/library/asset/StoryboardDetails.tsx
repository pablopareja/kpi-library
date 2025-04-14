import { ItemData } from '@/components/ui/ItemData'
import { VisualizationPlaceholder } from '@/components/ui/VisualizationPlaceholder'
import { Storyboard } from '@/types'

interface StoryboardDetailsProps {
  storyboard: Storyboard
}

export const StoryboardDetails = ({ storyboard }: StoryboardDetailsProps) => (
  <div className="flex flex-col gap-8 w-full">
    <div className="flex flex-wrap justify-between items-start w-full rounded divide-x divide-gray-200">
      {[
        {
          label: 'Coupled Assets ⓘ',
          value: `${storyboard.coupledKpisOrFilters}`,
        },
        {
          label: 'Applicable Aff No. ⓘ',
          value: `${storyboard.applicableAffiliates}`,
        },
        {
          label: 'Last Updated',
          value: storyboard.updatedAtDate,
        },
      ].map(item => (
        <div key={`item-${item.label}`}>
          <ItemData item={item} />
        </div>
      ))}
    </div>
    <VisualizationPlaceholder />
  </div>
)
