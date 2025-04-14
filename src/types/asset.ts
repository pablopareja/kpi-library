export interface Asset {
  id: string
  name: string
  shortDescription: string
  description: string
  favorite: boolean
  featured: boolean
  trending: boolean
  createdAtDate: string
  updatedAtDate: string
  tags: string[]
}

export enum AssetType {
  Kpi = 'Kpi',
  DataViz = 'DataViz',
  Layout = 'Layout',
  Storyboard = 'Storyboard',
}

export type AssetWithType = Asset & { type: AssetType }
export type AllAssetsWithType = (DataViz | Kpi | Layout | Storyboard) & { type: AssetType }

export type Kpi = Asset & {
  businessQuestions: BusinessQuestion[]
  metricIds: MetricId[]
  visualsAvailable: number
  affiliateApplicability: number
  calculation: string
}

export type DataViz = Asset & {
  infoContext: string
}

export type Layout = Asset & {
  amountOfPages: number
  kpisUsed: number
  layoutType: string
}

export type Storyboard = Asset & {
  applicableAffiliates: number
  coupledKpisOrFilters: number
}

export interface BusinessQuestion {
  title: string
  description: string
}

export interface Affiliate {
  id: string
  name: string
  description: string
}

export type MetricId = string

export type AssetSummary = Pick<
  AssetWithType,
  'id' | 'name' | 'shortDescription' | 'type' | 'updatedAtDate' | 'featured' | 'trending'
>
