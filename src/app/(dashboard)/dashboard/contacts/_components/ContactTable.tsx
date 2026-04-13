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
import {
  MoreHorizontal,
  Eye,
  Calendar,
  User,
  Tag,
  Image as ImageIcon,
  Mail,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { TContact } from "@/types/contact.types";
import { contactTableHeaders } from "@/constant/header/contact.constant";
import DeleteContact from "./DeleteContact";

const ContactTable = ({ contacts }: { contacts?: TContact[] }) => {
  const contactList = contacts || [];

  return (
    <div className="w-full">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Contacts Management
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {contactList.length < 1
                  ? "No contacts found"
                  : `Manage your ${contactList.length} contacts`}
              </p>
            </div>
            <Badge
              variant="secondary"
              className="bg-teal-100 text-teal-800 border-teal-200"
            >
              {contactList.length} Total
            </Badge>
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50 hover:bg-gray-50">
              {contactTableHeaders.map((header, index) => (
                <TableHead
                  key={header}
                  className={`font-semibold text-gray-700 ${
                    index === 0 ? "pl-6" : ""
                  } ${index === contactTableHeaders.length - 1 ? "pr-6" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    {header === "Date" && <Calendar className="w-4 h-4" />}
                    {header === "Email" && <Mail className="w-4 h-4" />}
                    {header === "Name" && <User className="w-4 h-4" />}
                    {header === "Actions" && <Tag className="w-4 h-4" />}
                    {header}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {contactList.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={contactTableHeaders.length}
                  className="h-32 text-center"
                >
                  <div className="flex flex-col items-center gap-2 text-gray-500">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <p className="font-medium">No contacts found</p>
                    <p className="text-sm">
                      Start by creating your first contact
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              contactList.map((contact) => (
                <TableRow
                  key={contact.id}
                  className="hover:bg-gray-50/50 transition-colors duration-200 group"
                >
                  {/* Date */}
                  <TableCell className="font-medium pl-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900">
                        {new Date(contact.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(contact.createdAt).getFullYear()}
                      </span>
                    </div>
                  </TableCell>

                  {/* Thumbnail */}
                  <TableCell>
                    {contact.name ? (
                      <div className="max-w-xs">
                        <p className="font-semibold text-gray-900 truncate group-hover:text-teal-600 transition-colors">
                          {contact.name}
                        </p>
                        <Link
                          href={`/contacts/${contact.id}`}
                          className="text-sm text-gray-500 truncate mt-1 hover:text-teal-600 transition-colors hover:underline"
                        >
                          Click to view details
                        </Link>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">No Name</span>
                    )}
                  </TableCell>

                  {/* Title */}
                  <TableCell>
                    {contact.email ? (
                      <div className="max-w-xs">
                        <p className="font-semibold text-gray-900 truncate group-hover:text-teal-600 transition-colors">
                          {contact.email}
                        </p>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">No Email</span>
                    )}
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
                            href={`/dashboard/contacts/${contact.id}`}
                            className="flex items-center gap-2"
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </Link>
                        </DropdownMenuItem>
                        <DeleteContact id={contact.id} />
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

export default ContactTable;
