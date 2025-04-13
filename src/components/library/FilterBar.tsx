'use client'

import { FilterOption, useFilterStore } from '@/stores/useFilterStore'
import { AssetType } from '@/types'
import { ButtonBar } from '../ui/ButtonBar'

const filterOptions: { value: FilterOption; label: string }[] = [
  {
    value: 'Featured',
    label: 'Featured',
  },
  // I'm adding Dataviz as an option here even though it's now shown in the wireframes since
  // I understand that users should be able to filter by all asset types
  {
    value: AssetType.DataViz,
    label: 'Dataviz',
  },
  {
    value: AssetType.Kpi,
    label: 'KPI',
  },
  {
    value: AssetType.Layout,
    label: 'Layouts',
  },
  {
    value: AssetType.Storyboard,
    label: 'Storyboards',
  },
]

export const FilterBar = () => {
  const filter = useFilterStore(state => state.filter)
  const setFilter = useFilterStore(state => state.setFilter)

  const handleChange = (value: string) => {
    setFilter(value as FilterOption)
  }

  return (
    <ButtonBar
      className="w-full mt-8"
      options={filterOptions}
      value={filter}
      onChange={handleChange}
    />
  )
}
