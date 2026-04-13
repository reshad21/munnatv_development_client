import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

const Loading = () => {
  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 container mx-auto min-h-screen mt-28">
        {/* Main Content Area */}
        <div className="col-span-2">
          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-xs rounded-tr-4xl overflow-hidden pb-5"
              >
                {/* Blog Image Skeleton */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Skeleton className="w-full h-64" />
                </div>

                {/* Meta Information Skeleton */}
                <div className="p-5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>

                <Separator className="max-w-[90%] mx-auto" />

                {/* Content Skeleton */}
                <div className="p-5">
                  <Skeleton className="h-5 w-full mb-2" />
                  <Skeleton className="h-5 w-3/4 mb-3" />

                  <div className="space-y-2 mt-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </div>

                {/* Button Skeleton */}
                <div className="p-5">
                  <Skeleton className="h-12 w-32 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="col-span-1 flex flex-col gap-7">
          {/* Search Card Skeleton */}
          <div className="bg-[#EAF3EE] shadow-xs p-10 rounded-md">
            <Skeleton className="h-6 lg:h-7 w-32 mb-2 border-b-4 border-transparent pb-2" />
            <div className="mt-4 relative">
              <Skeleton className="h-16 w-full rounded-2xl" />
            </div>
          </div>

          {/* Categories Card Skeleton */}
          <div className="bg-white shadow-sm p-6 rounded-md">
            <Skeleton className="h-6 w-24 mb-4" />
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white shadow-sm p-4 rounded-md flex items-center justify-between"
                >
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="w-6 h-6" />
                </div>
              ))}
            </div>
          </div>

          {/* Recent Blogs Card Skeleton */}
          <div className="bg-white shadow-sm p-6 rounded-md">
            <Skeleton className="h-6 w-28 mb-4" />
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border-b pb-4 last:border-b-0">
                  <Skeleton className="h-32 w-full rounded-md mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-3 w-20" />
                </div>
              ))}
            </div>
          </div>

          {/* Tags/Additional Content Skeleton */}
          <div className="bg-white shadow-sm p-6 rounded-md">
            <Skeleton className="h-6 w-20 mb-4" />
            <div className="flex flex-wrap gap-2">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-8 w-16 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
