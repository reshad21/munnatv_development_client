import DashboardContainer from "@/components/shared/dashboard/DashboardContainer";
import DashboardHeading from "@/components/shared/dashboard/DashboardHeading";
import DashboardActionSection from "@/components/shared/dashboard/DashboardActionSection";
import { getAllBlogs } from "@/services/blogs";
import { TQuery } from "@/types/query.type";
import BlogsTable from "./_components/BlogsTable";
import { Plus } from "lucide-react";

const BlogManagement = async (props: {
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
  const allBlogs = await getAllBlogs(query);

  return (
    <DashboardContainer>
      <DashboardHeading
        title="Blog Management"
        slogan="Manage your blogs here"
      />

      <DashboardActionSection
        title="Ready to Create Something Amazing?"
        description="Share your thoughts, insights, and stories with the world. Start writing your next blog post."
        primaryAction={{
          label: "Create New Blog",
          href: "/dashboard/blogs/create-blog",
          icon: Plus,
        }}
      />

      <div>
        <BlogsTable blogs={allBlogs.data} />
      </div>
    </DashboardContainer>
  );
};

export default BlogManagement;
