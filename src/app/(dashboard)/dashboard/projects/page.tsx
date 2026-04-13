
import DashboardContainer from "@/components/shared/dashboard/DashboardContainer";
import DashboardHeading from "@/components/shared/dashboard/DashboardHeading";
import DashboardActionSection from "@/components/shared/dashboard/DashboardActionSection";
import { TQuery } from "@/types/query.type";
import { Plus } from "lucide-react";
import ProjectsTable from "./_components/ProjectsTable";
import { getAllProjects } from "@/services/projects";
import { Pagination } from "swiper/modules";
import PaginationWrapper from "@/components/ui/PaginationWrapper";

const ProjectManagement = async (props: {
  searchParams: Promise<{
    query: string;
    category: string;
    page: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;
  const query: TQuery[] = [
    {
      key: "searchTerm",
      value: searchParams.query || "",
    },
    {
      key: "filter",
      value: JSON.stringify({
        category: searchParams.category,
      }),
    },
    {
      key: "page",
      value: searchParams.page || "1",
    },
    {
      key: "orderBy",
      value: JSON.stringify({
        createdAt: "desc",
      }),
    },
  ];
  const projects = await getAllProjects(query);

  return (
    <DashboardContainer>
      <DashboardHeading
        title="Project Management"
        slogan="Manage your project here"
      />
      <DashboardActionSection
        title="Ready to Create Something Amazing?"
        description="Share your thoughts, insights, and stories with the world. Start writing your next project."
        primaryAction={{
          label: "Create New Project",
          href: "/dashboard/projects/create-project",
          icon: Plus,
        }}
      />
      <ProjectsTable project={projects.data} />
      {projects?.meta?.totalPages > 1 && (
        <PaginationWrapper
          active={page}
          totalPages={projects?.meta?.totalPages || 1}
        />
      )}
    </DashboardContainer>
  );
};

export default ProjectManagement;
