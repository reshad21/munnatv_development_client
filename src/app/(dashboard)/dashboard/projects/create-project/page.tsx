
import DashboardContainer from "@/components/shared/dashboard/DashboardContainer";
import DashboardHeading from "@/components/shared/dashboard/DashboardHeading";
import { getAllCategories } from "@/services/categories";
import CreateProjectForm from "./_components/CreateProjectForm";

const CreateProjectPage = async () => {
  const categories = await getAllCategories();
  return (
    <DashboardContainer>
      <DashboardHeading
        title="Create Project"
        slogan="Add new project to your website"
      />
      <CreateProjectForm categories={categories.data} />
    </DashboardContainer>
  );
};

export default CreateProjectPage;
