import DashboardContainer from "@/components/shared/dashboard/DashboardContainer";
import { getTeamById } from "@/services/teams";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  ArrowLeft,
  Edit2,
} from "lucide-react";
import Link from "next/link";
import { TTeam } from "@/types/team.types";

const TeamDetails = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const teamMember: TTeam | null = await getTeamById(id);

  if (!teamMember) {
    return (
      <DashboardContainer>
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <p className="text-gray-500 text-lg">Team member not found</p>
          <Link href="/dashboard/teams">
            <Button variant="outline" className="mt-4 cursor-pointer">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Teams
            </Button>
          </Link>
        </div>
      </DashboardContainer>
    );
  }

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

  return (
    <DashboardContainer>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard/teams">
              <Button variant="ghost" size="sm" className="cursor-pointer">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Teams
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              Team Member Details
            </h1>
          </div>
          <Link href={`/dashboard/teams/${id}/edit`}>
            <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">
              <Edit2 className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </Link>
        </div>

        <Card className="bg-white shadow-lg border-0 overflow-hidden">
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 border-b">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16 ring-2 ring-white shadow-md">
                  {teamMember.photo && (
                    <AvatarImage src={teamMember.photo} alt={teamMember.name} />
                  )}
                  <AvatarFallback className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white font-semibold text-lg">
                    {getInitials(teamMember.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {teamMember.name}
                    </h2>
                    <Badge
                      variant="secondary"
                      className="bg-teal-100 text-teal-800"
                    >
                      {teamMember.position}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(teamMember.createdAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg">
              <div>
                <p className="text-sm text-gray-600 mb-1">Name</p>
                <p className="text-lg font-semibold text-gray-900">
                  {teamMember.name}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Position</p>
                <p className="text-lg font-semibold text-gray-900">
                  {teamMember.position}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Joined</p>
                <p className="text-lg font-semibold text-gray-900">
                  {formatDate(teamMember.createdAt)}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardContainer>
  );
};

export default TeamDetails;
