import { AssetType } from '@/types'

import { DataVizIllustration } from '@/components/illustrations/DataVizIllustration'
import { KpiIllustration } from '@/components/illustrations/KpiIllustration'
import { LayoutIllustration } from '@/components/illustrations/LayoutIllustration'
import { StoryboardIllustration } from '@/components/illustrations/StoryboardIllustration'

export const getAssetIllustration = (type: AssetType) => {
  switch (type) {
    case AssetType.Kpi:
      return KpiIllustration
    case AssetType.DataViz:
      return DataVizIllustration
    case AssetType.Layout:
      return LayoutIllustration
    case AssetType.Storyboard:
      return StoryboardIllustration
  }
}
