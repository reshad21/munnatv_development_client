import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IBlog} from "@/types/blog.types";
import { CalendarDays, MessagesSquare, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blogData }: { blogData: IBlog }) => {
  return (
    <div className="bg-white shadow-xs rounded-tr-4xl overflow-hidden hover:shadow-lg transition-shadow duration-300 pb-5 group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={blogData.thumbnail}
          alt={blogData.title}
          width={400}
          height={250}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5 flex items-center justify-between text-xs ">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-gray-500 inline-block" />
          <span>{new Date(blogData.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <MessagesSquare className="w-4 h-4 text-gray-500 inline-block" />
          <span>Comments ({blogData.blogComments.length})</span>
        </div>
      </div>

      <Separator className="max-w-[90%] mx-auto" />

      <div className="p-5">
        <h1 className="font-bold">{blogData.title}</h1>

        <p className="text-gray-600 mt-2 line-clamp-2">
          {blogData.content.slice(0, 100)}...
        </p>
      </div>

      <Link href={`/blogs/${blogData.id}`} className="p-5">
        <Button
          variant={"outline"}
          size={"lg"}
          className="py-5 cursor-pointer border border-second hover:bg-second hover:text-white transition-colors duration-300 group"
        >
          Read More{" "}
          <MoveRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </Link>
    </div>
  );
};

export default BlogCard;
