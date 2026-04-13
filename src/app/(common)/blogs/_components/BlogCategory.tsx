import { Card } from "@/components/ui/card";
import { getAllCategories } from "@/services/categories";
import { TCategory } from "@/types/category.types";
import CategoryCard from "./CategoryCard";

const BlogCategory = async () => {
  const categories = await getAllCategories();
  return (
    <Card className="bg-[#EAF3EE] shadow-xs p-10">
      <h1 className="text-2xl lg:text-3xl font-semibold border-b-4 border-b-[#C4D7E1] pb-2">
        Categories
      </h1>

      <div className="flex flex-col gap-4 mt-4">
        {categories.data.map((category: TCategory) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </Card>
  );
};

export default BlogCategory;
