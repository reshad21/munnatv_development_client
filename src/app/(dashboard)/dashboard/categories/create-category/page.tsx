import DashboardContainer from "@/components/shared/dashboard/DashboardContainer";
import DashboardHeading from "@/components/shared/dashboard/DashboardHeading";
import CreateCategoryForm from "./_components/CreateCategoryForm";

const CreateCategory = () => {
  return (
    <DashboardContainer>
      <DashboardHeading
        title="Create Category"
        slogan="Add new category to your website"
      />
      <CreateCategoryForm />
    </DashboardContainer>
  );
};

export default CreateCategory;
