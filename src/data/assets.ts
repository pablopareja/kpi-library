import { AssetType, AssetWithType } from '@/types'

export const assets: AssetWithType[] = [
  {
    id: 'k1',
    name: 'This is a KPI asset',
    description: 'Description of the KPI asset',
    type: AssetType.Kpi,
    favorite: true,
  },
]
