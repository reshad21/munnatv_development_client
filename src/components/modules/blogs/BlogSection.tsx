import SectionHeader from "@/components/shared/headers/SectionHeader";
import { IBlog } from "@/types/blog.types";
import BlogCard from "./BlogCard";
import { getAllBlogs } from "@/services/blogs";

const BlogSection = async () => {
  const blogs = await getAllBlogs([
    {
      key: "orderBy",
      value: JSON.stringify({
        createdAt: "desc",
      }),
    },
    {
      key: "limit",
      value: "3",
    },
  ]);
  return (
    <section className="container mb-20">
      <SectionHeader
        slogan="Latest Blogs"
        title="Empowering Business The Excellence"
      />

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 ">
        {blogs.data?.map((blog: IBlog) => (
          <BlogCard key={blog.id} blogData={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
