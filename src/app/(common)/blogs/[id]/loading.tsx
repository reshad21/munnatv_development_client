import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <main>
      <div className="container mx-auto min-h-screen mt-28 grid grid-cols-1 lg:grid-cols-3 gap-7 mb-20">
        {/* Main Content Skeleton */}
        <div className="col-span-2">
          {/* Meta Information Skeleton */}
          <div className="flex items-center gap-7 mb-10">
            <div className="flex items-center">
              <Skeleton className="w-4 h-4 mr-2" />
              <Skeleton className="h-4 w-20" />
            </div>
            <div className="flex items-center">
              <Skeleton className="w-4 h-4 mr-2" />
              <Skeleton className="h-4 w-32" />
            </div>
            <div className="flex items-center">
              <Skeleton className="w-4 h-4 mr-2" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>

          {/* Title Skeleton */}
          <div className="space-y-3 mb-5">
            <Skeleton className="h-8 lg:h-12 w-full" />
            <Skeleton className="h-8 lg:h-12 w-3/4" />
          </div>

          {/* Image Skeleton */}
          <div className="mt-5">
            <Skeleton className="w-full h-[380px] lg:h-[480px] rounded-lg mb-5" />
          </div>

          {/* Content Skeleton */}
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/5" />
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="col-span-1 flex flex-col gap-7">
          {/* Search Card Skeleton */}
          <div className="bg-[#EAF3EE] shadow-xs p-10 rounded-md">
            <Skeleton className="h-6 w-32 mb-4" />
            <Skeleton className="h-16 w-full rounded-2xl" />
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
        </div>
      </div>
    </main>
  );
};

export default Loading;
