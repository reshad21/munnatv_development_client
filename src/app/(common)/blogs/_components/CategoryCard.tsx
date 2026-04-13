"use client";

import { TCategory } from "@/types/category.types";
import { IconCategory2 } from "@tabler/icons-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const CategoryCard = ({ category }: { category: TCategory }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleCategoryClick = () => {
    const params = new URLSearchParams(searchParams.toString());

    // Set the category filter
    params.set("category", category.id.toString());

    // Check if we're not on the blogs page
    if (!pathname.includes("/blogs")) {
      // Redirect to blogs page with category filter
      router.push(`/blogs?${params.toString()}`);
    } else {
      // Stay on current page and update category filter
      router.push(`?${params.toString()}`);
    }
  };

  return (
    <div
      onClick={handleCategoryClick}
      className="bg-white shadow-sm p-4 rounded-md flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow"
    >
      <h1 className="font-semibold">{category.name}</h1>
      <IconCategory2 className="w-6 h-6 text-gray-500" />
    </div>
  );
};

export default CategoryCard;
