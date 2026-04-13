import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar,
  Edit,
  Eye,
  Image as ImageIcon,
  MoreHorizontal,
  Tag,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DeleteProject from "./DeleteProject";
import { TProject } from "@/types/project.types";
import { ProjectTableHeaders } from "@/constant/header/project.constant";

const ProjectsTable = ({ project }: { project: TProject[] }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      Technology: "bg-blue-100 text-blue-800 border-blue-200",
      Business: "bg-green-100 text-green-800 border-green-200",
      Design: "bg-purple-100 text-purple-800 border-purple-200",
      Marketing: "bg-orange-100 text-orange-800 border-orange-200",
      default: "bg-gray-100 text-gray-800 border-gray-200",
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  return (
    <div className="w-full">
      {/* Table Container with Modern Styling */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header Section */}
        <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Projects List
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {project?.length > 0
                  ? `Manage your ${project?.length} projects here`
                  : "No projects available"
                }
              </p>
            </div>
            <Badge
              variant="secondary"
              className="bg-teal-100 text-teal-800 border-teal-200"
            >
              {project?.length} Total
            </Badge>
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50 hover:bg-gray-50">
              {ProjectTableHeaders.map((header, index) => (
                <TableHead
                  key={header}
                  className={`font-semibold text-gray-700 ${index === 0 ? "pl-6" : ""
                    } ${index === ProjectTableHeaders.length - 1 ? "pr-6" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    {header === "Date" && <Calendar className="w-4 h-4" />}
                    {header === "Thumbnail" && (
                      <ImageIcon className="w-4 h-4" />
                    )}
                    {header === "Author" && <User className="w-4 h-4" />}
                    {header === "Category" && <Tag className="w-4 h-4" />}
                    {header}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {project?.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={ProjectTableHeaders.length}
                  className="h-32 text-center"
                >
                  <div className="flex flex-col items-center gap-2 text-gray-500">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <p className="font-medium">No projects found</p>
                    <p className="text-sm">
                      Start by creating your first project
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              project?.map((item) => (
                <TableRow
                  key={item.id}
                  className="hover:bg-gray-50/50 transition-colors duration-200 group"
                >
                  {/* Date */}
                  <TableCell className="font-medium pl-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900">
                        {new Date(item.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(item.createdAt).getFullYear()}
                      </span>
                    </div>
                  </TableCell>

                  {/* Thumbnail */}
                  <TableCell>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                      {item?.thumbnail ? (
                        <Image
                          src={item?.thumbnail}
                          alt={item?.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                          <ImageIcon className="w-5 h-5 text-gray-400" />
                        </div>
                      )}
                    </div>
                  </TableCell>

                  {/* name */}
                  <TableCell>
                    <div className="max-w-xs">
                      <p className="font-semibold text-gray-900 truncate group-hover:text-teal-600 transition-colors">
                        {item.name}
                      </p>
                      <Link
                        href={`/portfolio/${item.id}`}
                        className="text-sm text-gray-500 truncate mt-1 hover:text-teal-600 transition-colors hover:underline"
                      >
                        Click to view details
                      </Link>
                    </div>
                  </TableCell>

                  {/* Category */}
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`${getCategoryColor(
                        item.category?.name || ""
                      )} font-medium`}
                    >
                      {item.category?.name ?? "Unknown"}
                    </Badge>
                  </TableCell>

                  {/* Author */}
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {item.author?.charAt(0).toUpperCase() || "A"}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {item.author}
                      </span>
                    </div>
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="pr-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="h-8 w-8 p-0 hover:bg-gray-100 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem className="cursor-pointer" asChild>
                          <Link
                            href={`/dashboard/projects/${item.id}/view-project`}
                            className="flex items-center gap-2"
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer" asChild>
                          <Link
                            href={`/dashboard/projects/${item.id}/update-project`}
                            className="flex items-center gap-2"
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DeleteProject id={item.id} />
                      </DropdownMenuContent>
                    </DropdownMenu>
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

export default ProjectsTable;
