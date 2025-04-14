import { AssetDialog } from '@/components/library/AssetModal'
import { AssetResults } from '@/components/library/AssetResults'
import { RequestButton } from '@/components/library/RequestButton'
import { SearchBar } from '@/components/library/SearchBar'
import { FilterSync } from '@/components/utils/FilterSync'

export default async function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center p-24 bg-gray-100 rounded-[8px]">
      {/* This is a top-level logic component to sync the filters state with the URL (useful for sharing URL) */}
      <FilterSync />

      <RequestButton className="absolute top-2 right-4" />
      <h1 className="text-4xl font-bold">Library</h1>
      <p className="mt-4 text-lg">Browse tor assets needed to report and present analysis.</p>
      <SearchBar className="max-w-3xl" />
      <AssetResults />

      {/* Page-level modal rendered based on URL */}
      <AssetDialog />
    </div>
  )
}
