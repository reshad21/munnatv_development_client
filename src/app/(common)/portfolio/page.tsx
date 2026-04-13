import HeroSection from "@/components/shared/common/HeroSection";
import ProjectSection from "./_components/ProjectSection";
import { TQuery } from "@/types/query.type";
import { getAllProjects } from "@/services/projects";

const PortfolioPage = async (props: {
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
  const portfolioItems = await getAllProjects(query);

  return (
    <>
      <HeroSection title={"Portfolio"} />
      <ProjectSection portfolioItems={portfolioItems} page={page}/>
    </>
  );
};

export default PortfolioPage;
