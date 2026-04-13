import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Calendar, Image as ImageIcon } from "lucide-react";

import { TCategory } from "@/types/category.types";
import { categoryTableHeaders } from "@/constant/header/category.constant";
import DeleteCategory from "./DeleteCategory";
import Link from "next/link";

const CategoriesTable = ({ categories }: { categories: TCategory[] }) => {
  return (
    <div className="w-full">
      {/* Table Container with Modern Styling */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header Section */}
        <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Blog Posts
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {categories?.length < 1
                  ? "No categories found"
                  : `Manage your ${categories?.length} categories`}
              </p>
            </div>
            <Badge
              variant="secondary"
              className="bg-teal-100 text-teal-800 border-teal-200"
            >
              {categories?.length} Total
            </Badge>
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50 hover:bg-gray-50">
              {categoryTableHeaders.map((header, index) => (
                <TableHead
                  key={header}
                  className={`font-semibold text-gray-700 ${
                    index === 0 ? "pl-6" : ""
                  } ${
                    index === categoryTableHeaders.length - 1
                      ? "pr-10 flex justify-end"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {header === "Created At" && (
                      <Calendar className="w-4 h-4" />
                    )}
                    {header === "Name" && <ImageIcon className="w-4 h-4" />}

                    {header}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories?.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={categoryTableHeaders.length}
                  className="h-32 text-center"
                >
                  <div className="flex flex-col items-center gap-2 text-gray-500">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <p className="font-medium">No categories found</p>
                    <p className="text-sm">
                      Start by creating your first category
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              categories?.map((category) => (
                <TableRow
                  key={category.id}
                  className="hover:bg-gray-50/50 transition-colors duration-200 group"
                >
                  {/* Date */}
                  <TableCell className="font-medium pl-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900">
                        {new Date(category.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(category.createdAt).getFullYear()}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-900">
                        {category.name}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="text-right pr-6">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/dashboard/categories/${category.id}`}>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-500 hover:text-gray-700 cursor-pointer"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <DeleteCategory id={category.id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CategoriesTable;
