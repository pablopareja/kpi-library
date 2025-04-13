import { SearchBar } from '@/components/library/SearchBar'
import { RequestButton } from '@/components/ui/RequestButton'

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center p-24 bg-gray-100 rounded-[8px]">
      <RequestButton className="absolute top-2 right-4" />
      <h1 className="text-4xl font-bold">Library</h1>
      <p className="mt-4 text-lg">Browse tor assets needed to report and present analysis.</p>
      <SearchBar />
    </div>
  )
}
