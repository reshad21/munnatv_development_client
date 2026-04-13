import DashboardContainer from "@/components/shared/dashboard/DashboardContainer";
import DashboardHeading from "@/components/shared/dashboard/DashboardHeading";
import CreateBlogForm from "./_components/CreateBlogForm";
import { getAllCategories } from "@/services/categories";

const CreateBlogPage = async () => {
  const categories = await getAllCategories();
  return (
    <DashboardContainer>
      <DashboardHeading
        title="Create Blog"
        slogan="Add new blog to your website"
      />
      <CreateBlogForm categories={categories.data} />
    </DashboardContainer>
  );
};

export default CreateBlogPage;
