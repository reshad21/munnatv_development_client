import DashboardContainer from "@/components/shared/dashboard/DashboardContainer";
import DashboardHeading from "@/components/shared/dashboard/DashboardHeading";
import TeamForm from "../../_components/TeamForm";
import { getTeamById } from "@/services/teams";

const EditTeamPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const teamMember = await getTeamById(id);

  if (!teamMember) {
    return (
      <DashboardContainer>
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <p className="text-gray-500 text-lg">Team member not found</p>
        </div>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <DashboardHeading
        title="Edit Team Member"
        slogan="Update team member information"
      />
      <TeamForm initialData={teamMember} isEdit={true} />
    </DashboardContainer>
  );
};

export default EditTeamPage;
