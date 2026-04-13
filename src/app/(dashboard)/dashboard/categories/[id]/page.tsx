import DashboardContainer from "@/components/shared/dashboard/DashboardContainer";
import DashboardHeading from "@/components/shared/dashboard/DashboardHeading";
import { getCategoryById } from "@/services/categories";
import EditCategoryForm from "./_components/EditCategoryForm";

const EditCategory = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;
  const data = await getCategoryById(id);

  console.log(data);
  return (
    <DashboardContainer>
      <DashboardHeading
        title="Edit Category"
        slogan="Update the details of your category"
      />
      <EditCategoryForm category={data.data} />
    </DashboardContainer>
  );
};

export default EditCategory;
