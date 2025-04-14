import { ItemData } from '@/components/ui/ItemData'
import { VisualizationPlaceholder } from '@/components/ui/VisualizationPlaceholder'
import { Kpi } from '@/types'
import { BusinessQuestions } from '../BusinessQuestions'

interface KpiDetailsProps {
  kpi: Kpi
}

export const KpiDetails = ({ kpi }: KpiDetailsProps) => (
  <div className="flex flex-col gap-8 w-full">
    <div className="flex flex-wrap justify-between items-start w-full rounded divide-x divide-gray-200">
      {[
        {
          label: 'Visuals Available ⓘ',
          value: `${kpi.visualsAvailable}`,
        },
        {
          label: 'Metrics No. ⓘ',
          value: `${kpi.metricIds.length}`,
        },
        {
          label: 'Aff. Applicability ⓘ',
          value: `${kpi.affiliateApplicability}`,
        },
        {
          label: 'Calculation ⓘ',
          value: kpi.calculation || '-',
        },
        {
          label: 'Last Updated',
          value: kpi.updatedAtDate,
        },
      ].map(item => (
        <div key={`item-${item.label}`}>
          <ItemData item={item} />
        </div>
      ))}
    </div>
    <VisualizationPlaceholder />
    <BusinessQuestions questions={kpi.businessQuestions} />
  </div>
)
