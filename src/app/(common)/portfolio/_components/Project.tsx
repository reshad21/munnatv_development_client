/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { ArrowRight, Tag, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TProject } from "@/types/project.types";

const Project = ({ portfolioItems }: { portfolioItems: TProject[] }) => {
  if (!portfolioItems || portfolioItems.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        No portfolio items found
      </div>
    );
  }

  return (
    <div className="">
      <div className="">
        {/* Article Cards */}
        {portfolioItems?.map((article: TProject) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            {/* thumbnail Container */}
            <div className="relative">
              <Image
                src={article.thumbnail || "/placeholder.svg"}
                alt="Business professional working"
                className="w-full h-64 md:h-80 object-cover"
                width={500}
                height={300}
              />
              {/* Tag */}
              <div className="absolute top-4 right-4">
                <span className="bg-teal-600 text-white px-3 py-1 rounded text-sm font-medium">
                  {article.category?.name}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="bg-green-50 p-6">
              {/* Metadata */}
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                {article.author && (
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>By {article.author}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  <span>{article.category?.name}</span>
                </div>
                {/* {article.comments && (
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>Comments ({article.comments})</span>
                  </div>
                )} */}
              </div>

              {/* name */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {article.name}
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {article.description}
              </p>

              {/* Button */}
              <Link href={`/portfolio/${article.id}`}>
                <Button
                  variant="outline"
                  className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 cursor-pointer"
                >
                  Details View
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
