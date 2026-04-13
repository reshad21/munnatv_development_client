import { Card } from "@/components/ui/card";
import { getAllBlogs } from "@/services/blogs";
import { IBlog } from "@/types/blog.types";
import { TQuery } from "@/types/query.type";
import { IconCalendar } from "@tabler/icons-react";
import Link from "next/link";

const LatestBlogs = async () => {
  const query: TQuery[] = [
    {
      key: "orderBy",
      value: JSON.stringify({
        createdAt: "desc",
      }),
    },
  ];
  const blogs = await getAllBlogs(query);
  return (
    <Card className="bg-[#EAF3EE] shadow-xs p-10 mb-10">
      <h1 className="text-2xl lg:text-3xl font-semibold border-b-4 border-b-[#C4D7E1] pb-2">
        Latest Blogs
      </h1>

      <div className="flex flex-col gap-7 mt-4">
        {blogs?.data.slice(0, 3).map((blog: IBlog) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id} className="group">
            <div>
              <IconCalendar className="inline-block mr-2" />
              <span className="text-gray-500">
                {new Date(blog.createdAt).toLocaleDateString()}
              </span>
            </div>
            <h2 className="text-lg font-semibold mt-2 group-hover:underline">
              {blog.title}
            </h2>
          </Link>
        ))}
      </div>
    </Card>
  );
};

export default LatestBlogs;
