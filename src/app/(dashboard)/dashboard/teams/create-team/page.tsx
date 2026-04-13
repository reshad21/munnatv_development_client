import DashboardContainer from "@/components/shared/dashboard/DashboardContainer";
import DashboardHeading from "@/components/shared/dashboard/DashboardHeading";
import TeamForm from "../_components/TeamForm";

const CreateTeamPage = () => {
  return (
    <DashboardContainer>
      <DashboardHeading
        title="Create Team Member"
        slogan="Add new team member to your organization"
      />
      <TeamForm />
    </DashboardContainer>
  );
};

export default CreateTeamPage;
