import DashboardContainer from "@/components/shared/dashboard/DashboardContainer";
import DashboardHeading from "@/components/shared/dashboard/DashboardHeading";
import { getAllCategories } from "@/services/categories";
import { getProjectById } from "@/services/projects";
import React from "react";
import ViewProjectForm from "./_component/ViewProjectForm";

const ViewSingleProject = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  // Fetch categories
  const categories = await getAllCategories();
  const categoryData = categories?.data || [];

  // Fetch the specific project
  const project = await getProjectById(params.id);
  const projectData = project?.data || project;

  return (
    <DashboardContainer>
      <DashboardHeading
        title="Update Project"
        slogan="Update your project details here"
      />
      <ViewProjectForm categories={categoryData} project={projectData} />
    </DashboardContainer>
  );
};

export default ViewSingleProject;
