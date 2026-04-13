import DashboardContainer from "@/components/shared/dashboard/DashboardContainer";
import { getContact } from "@/services/contacts";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Mail,
  Calendar,
  User,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { TContact } from "@/types/contact.types";

const ContactDetails = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const contactDetails: TContact = await getContact(id);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Format message with line breaks
  const formatMessage = (message: string) => {
    return message.split("\n").map((line, index) => (
      <span key={index} className="block mb-2">
        {line}
      </span>
    ));
  };

  return (
    <DashboardContainer>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard/contacts">
              <Button variant="ghost" size="sm" className="cursor-pointer">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Contacts
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              Contact Details
            </h1>
          </div>
        </div>

        <Card className="bg-white shadow-lg border-0 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <Avatar className="h-12 w-12 ring-2 ring-white shadow-md">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold">
                    {getInitials(contactDetails.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {contactDetails.name}
                    </h2>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      New Inquiry
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Mail className="h-4 w-4" />
                      <span>{contactDetails.email}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(contactDetails.createdAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-b">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-gray-500" />
              <h3 className="text-lg font-medium text-gray-900">
                {contactDetails.subject}
              </h3>
            </div>
          </div>

          <div className="p-6">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed text-base">
                {formatMessage(contactDetails.message)}
              </div>
            </div>
          </div>

         
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <User className="h-5 w-5 mr-2" />
            Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Full Name
                </label>
                <p className="text-base text-gray-900 mt-1">
                  {contactDetails.name}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Email Address
                </label>
                <p className="text-base text-gray-900 mt-1">
                  {contactDetails.email}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Date Received
                </label>
                <p className="text-base text-gray-900 mt-1">
                  {new Date(contactDetails.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Contact ID
                </label>
                <p className="text-sm text-gray-600 mt-1 font-mono">
                  {contactDetails.id}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardContainer>
  );
};

export default ContactDetails;
