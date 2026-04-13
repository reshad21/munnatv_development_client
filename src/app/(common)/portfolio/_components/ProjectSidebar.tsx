import HighlightWidget from "@/components/shared/common/HighlightWidget";
import RecentProjectWidget from "@/components/shared/common/RecentProjectWidget";
import SearchWidget from "@/components/shared/common/SearchWidget";
import TagWidget from "@/components/shared/common/TagWidget";

export default function ProjectSidebar() {
  return (
    <aside className="w-full md:w-[55%] bg-gray-100 h-fit p-6 space-y-8 rounded-lg shadow-md">
      <SearchWidget />
      <RecentProjectWidget />
      <HighlightWidget />
      <TagWidget />
    </aside>
  );
}
