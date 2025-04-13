export interface Asset {
  id: string
  name: string
  description: string
  favorite: boolean
  featured: boolean
  trending: boolean
  createdDate: string
  updatedDate: string
}

export enum AssetType {
  Kpi = 'Kpi',
  DataViz = 'DataViz',
  Layout = 'Layout',
  Storyboard = 'Storyboard',
}

export type AssetWithType = Asset & { type: AssetType }

export type Kpi = Asset & {
  businessQuestions: BusinessQuestion[]
  metricIds: MetricId[]
}

export type DataViz = Asset & {
  infoContext: string
}

export type Layout = Asset & {
  amountOfPages: number
}

export type Storyboard = Asset & {
  applicableAffiliates: Affiliate[]
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
