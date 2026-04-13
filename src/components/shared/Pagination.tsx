"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  active: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  active = 1,
  totalPages = 24,
  onPageChange = () => {},
}: PaginationProps) {
  const pages: React.ReactNode[] = [];

  const visiblePages = 4;

  // Show first N pages
  for (let i = 1; i <= Math.min(visiblePages, totalPages); i++) {
    pages.push(
      <Button
        key={i}
        size="sm"
        className={cn(
          "h-8 w-8 rounded-full",
          active === i
            ? "bg-green-600 text-white hover:bg-green-700 cursor-pointer"
            : "bg-transparent hover:bg-green-50 cursor-pointer"
        )}
        onClick={() => onPageChange(i)}
        variant={active === i ? "default" : "ghost"}
      >
        {i}
      </Button>
    );
  }

  // Add ellipsis if needed
  if (totalPages > visiblePages + 1) {
    pages.push(
      <Button
        key="ellipsis"
        size="sm"
        className="h-8 w-8 rounded-full bg-transparent"
        variant="ghost"
        disabled
      >
        ...
      </Button>
    );
  }

  // Always show last page
  if (totalPages > visiblePages) {
    pages.push(
      <Button
        key={totalPages}
        size="sm"
        className={cn(
          "h-8 w-8 rounded-full",
          active === totalPages
            ? "bg-green-600 text-white hover:bg-green-700 cursor-pointer"
            : "bg-transparent hover:bg-green-50 cursor-pointer"
        )}
        onClick={() => onPageChange(totalPages)}
        variant={active === totalPages ? "default" : "ghost"}
      >
        {totalPages}
      </Button>
    );
  }

  return (
    <nav className="flex items-center justify-end my-5">
      <ul className="flex items-center gap-2 bg-white rounded-md shadow-md px-2 py-1">
        <li>
          <Button
            size="sm"
            className={cn(
              "h-9 w-9 rounded-sm px-10 flex items-center justify-center transition-colors",
              active === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer"
            )}
            onClick={() => onPageChange(active - 1)}
            disabled={active === 1}
            variant="ghost"
            aria-label="Previous page"
          >
            <span>Previous</span>
          </Button>
        </li>
        {pages.map((page, idx) => (
          <li key={idx}>{page}</li>
        ))}
        <li>
          <Button
            size="sm"
            className={cn(
              "h-9 w-9 rounded-sm px-10 flex items-center justify-center transition-colors",
              active === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer"
            )}
            onClick={() => onPageChange(active + 1)}
            disabled={active === totalPages}
            variant="ghost"
            aria-label="Next page"
          >
            <span>Next</span>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
