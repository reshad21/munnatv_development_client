import BlogCard from "@/components/modules/blogs/BlogCard";
import { getAllBlogs } from "@/services/blogs";
import { IBlog } from "@/types/blog.types";
import { TQuery } from "@/types/query.type";
import React from "react";
import BlogSidebar from "./_components/BlogSidebar";
import HeroSection from "@/components/shared/common/HeroSection";

const BlogsPage = async (props: {
  searchParams: Promise<{ search?: string; category?: string }>;
}) => {
  const searchParams = await props.searchParams;
  const searchQuery = searchParams.search;
  const categoryId = searchParams.category;

  const query: TQuery[] = [
    {
      key: "orderBy",
      value: JSON.stringify({
        createdAt: "desc",
      }),
    },
  ];

  // Add search term to query if it exists
  if (searchQuery && searchQuery.trim()) {
    query.push({
      key: "searchTerm",
      value: searchQuery.trim(),
    });
  }

  // Add category filter to query if it exists
  if (categoryId && categoryId.trim()) {
    query.push({
      key: "filter",
      value: JSON.stringify({
        categoryId: categoryId.trim(),
      }),
    });
  }
  const blogs = await getAllBlogs(query);
  return (
    <main>
      <HeroSection title={"Blogs"} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 container mx-auto min-h-screen mt-28">
        <div className="col-span-2 ">
          {searchQuery && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800">
                Showing search results for:{" "}
                <span className="font-semibold">
                  &ldquo;{searchQuery}&rdquo;
                </span>
                {blogs.data.length === 0 && (
                  <span className="block mt-1 text-sm">
                    No blogs found matching your search.
                  </span>
                )}
              </p>
            </div>
          )}
          {categoryId && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800">
                Showing blogs in category:{" "}
                <span className="font-semibold">Category {categoryId}</span>
                {blogs.data.length === 0 && (
                  <span className="block mt-1 text-sm">
                    No blogs found in this category.
                  </span>
                )}
              </p>
            </div>
          )}
          {searchQuery && categoryId && (
            <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-purple-800">
                Showing blogs that match:{" "}
                <span className="font-semibold">
                  &ldquo;{searchQuery}&rdquo;
                </span>{" "}
                in <span className="font-semibold">Category {categoryId}</span>
                {blogs.data.length === 0 && (
                  <span className="block mt-1 text-sm">
                    No blogs found matching these filters.
                  </span>
                )}
              </p>
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {blogs.data?.map((blog: IBlog) => (
              <BlogCard key={blog.id} blogData={blog} />
            ))}
          </div>
        </div>

        <div className="col-span-1 flex flex-col gap-7">
          <BlogSidebar />
        </div>
      </div>
    </main>
  );
};

export default BlogsPage;
