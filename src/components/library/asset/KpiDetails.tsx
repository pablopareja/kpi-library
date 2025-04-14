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
          value: kpi.visualsAvailable,
        },
        {
          label: 'Metrics No. ⓘ',
          value: kpi.metricIds.length,
        },
        {
          label: 'Aff. Applicability ⓘ',
          value: kpi.affiliateApplicability,
        },
        {
          label: 'Calculation ⓘ',
          value: kpi.calculation || '-',
        },
        {
          label: 'Last Updated',
          value: kpi.updatedAtDate,
        },
      ].map((item, index) => (
        <div
          key={item.label}
          className="flex flex-1 flex-col gap-2 items-center justify-start px-4 py-4 min-w-[140px] h-22"
        >
          <span className="font-bold text-black text-base">{item.value}</span>
          <span className="text-gray-500 text-xs text-center">{item.label}</span>
        </div>
      ))}
    </div>
    {/* visual placeholder */}
    <div className="bg-gray-100 rounded h-[200px] w-full" />
    <BusinessQuestions questions={kpi.businessQuestions} />
  </div>
)
