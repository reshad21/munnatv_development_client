import { getBlogById } from "@/services/blogs";
import BlogSidebar from "../_components/BlogSidebar";
import { IconClockHour10, IconFolder, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import HeroSection from "@/components/shared/common/HeroSection";

const BlogDetails = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const blogId = params.id;
  const blog = await getBlogById(blogId);

  const { title, content, thumbnail, author, createdAt } = blog.data;
  return (
    <main>
      <HeroSection title={"Blog Details"} />
      <div className="container mx-auto min-h-screen mt-28 grid grid-cols-1 lg:grid-cols-3 gap-7 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-7 mb-10">
            <div className="flex items-center">
              <IconUser className="inline-block mr-2" />
              <span className="text-gray-500">{author}</span>
            </div>
            <div className="flex items-center">
              <IconFolder className="inline-block mr-2" />
              <span className="text-gray-500">
                Published on {new Date(createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center">
              <IconClockHour10 className="inline-block mr-2" />
              <span className="text-gray-500">
                Reading time: {Math.ceil(content.length / 1000)} min
              </span>
            </div>
          </div>
          <h1 className="text-2xl lg:text-4xl font-extrabold">{title}</h1>

          <div className="mt-5">
            <Image
              src={thumbnail}
              alt={title}
              width={1000}
              height={1000}
              className="w-full h-[380px] lg:h-[480px] object-cover rounded-lg mb-5"
            />
          </div>

          <div>
            <p>
              {content.split("\n").map((paragraph: string, index: number) => (
                <span key={index} className="block mb-4">
                  {paragraph}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <BlogSidebar />
        </div>
      </div>
    </main>
  );
};

export default BlogDetails;
