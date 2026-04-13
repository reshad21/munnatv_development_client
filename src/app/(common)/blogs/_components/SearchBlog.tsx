"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import useDebounce from "@/utils/debounce";

const SearchBlog = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );

  // Debounce the search query with 500ms delay
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // Update URL when debounced search query changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedSearchQuery.trim()) {
      params.set("search", debouncedSearchQuery.trim());

      // Check if we're not on the blogs page
      if (!pathname.includes("/blogs")) {
        // Redirect to blogs page with search params
        router.push(`/blogs?${params.toString()}`);
      } else {
        // Stay on current page and update search params
        router.push(`?${params.toString()}`);
      }
    } else {
      params.delete("search");

      // Only update current page if we're on blogs page
      if (pathname.includes("/blogs")) {
        router.push(`?${params.toString()}`);
      }
    }
  }, [debouncedSearchQuery, router, searchParams, pathname]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Card className="bg-[#EAF3EE] shadow-xs p-10">
      <h1 className="text-2xl lg:text-3xl font-semibold border-b-4 border-b-[#C4D7E1] pb-2">
        Search Here
      </h1>

      <div className="mt-4 relative">
        <Input
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search blogs..."
          className="bg-white border border-[#C4D7E1] focus:border-[#C4D7E1] focus:ring-0 rounded-2xl px-5 py-8 pr-14 text-4xl placeholder:text-lg"
          type="text"
          aria-label="Search Blog"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-7 h-7 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </Card>
  );
};

export default SearchBlog;
