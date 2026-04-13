import DashboardContainer from "@/components/shared/dashboard/DashboardContainer";
import DashboardHeading from "@/components/shared/dashboard/DashboardHeading";
import DashboardActionSection from "@/components/shared/dashboard/DashboardActionSection";
import { TQuery } from "@/types/query.type";
import { getAllTeams } from "@/services/teams";
import TeamTable from "./_components/TeamTable";
import { Plus } from "lucide-react";

const TeamsPage = async (props: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { searchParams } = props;
  const page = await searchParams;
  const pageNumber = page.page ? parseInt(page.page) : 1;
  const query: TQuery[] = [
    {
      key: "page",
      value: pageNumber.toString(),
    },
    {
      key: "orderBy",
      value: JSON.stringify({
        createdAt: "desc",
      }),
    },
  ];
  const allTeams = await getAllTeams(query);

  return (
    <DashboardContainer>
      <DashboardHeading
        title="Team Members Management"
        slogan="Manage your team members here"
      />

      <DashboardActionSection
        title="Expand Your Team"
        description="Add new team members to grow your organization. Build a stronger team and collaborate effectively."
        primaryAction={{
          label: "Add Team Member",
          href: "/dashboard/teams/create-team",
          icon: Plus,
        }}
      />

      <div>
        <TeamTable teams={allTeams} />
      </div>
    </DashboardContainer>
  );
};

export default TeamsPage;