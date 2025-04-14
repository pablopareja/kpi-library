import { VisualizationPlaceholder } from '@/components/ui/VisualizationPlaceholder'
import { DataViz } from '@/types'

interface DataVizDetailsProps {
  dataViz: DataViz
}

export const DataVizDetails = ({ dataViz }: DataVizDetailsProps) => (
  <div className="flex flex-col gap-8 w-full">
    <div className="flex flex-col gap-8 w-full">
      <div>{dataViz.infoContext}</div>
      <VisualizationPlaceholder />
    </div>
  </div>
)
