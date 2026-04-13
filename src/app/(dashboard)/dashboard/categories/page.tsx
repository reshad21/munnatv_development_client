import DashboardActionSection from "@/components/shared/dashboard/DashboardActionSection";
import DashboardContainer from "@/components/shared/dashboard/DashboardContainer";
import DashboardHeading from "@/components/shared/dashboard/DashboardHeading";
import { Plus } from "lucide-react";
import CategoriesTable from "./_components/CategoriesTable";
import { getAllCategories } from "@/services/categories";

const CategoriesManagement = async () => {
  const allCategories = await getAllCategories();
  return (
    <DashboardContainer>
      <DashboardHeading
        title="Categories Management"
        slogan="Manage your categories here"
      />

      <DashboardActionSection
        title="Ready to Create Something Amazing?"
        description="Share your thoughts, insights, and stories with the world. Start writing your next blog post."
        primaryAction={{
          label: "Create New Category",
          href: "/dashboard/categories/create-category",
          icon: Plus,
        }}
      />

      <div>
        <CategoriesTable categories={allCategories.data} />
      </div>
    </DashboardContainer>
  );
};

export default CategoriesManagement;
