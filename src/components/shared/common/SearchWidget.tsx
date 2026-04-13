import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
const SearchWidget = () => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Search Here</h2>
        <div className="w-16 h-1 bg-teal-600 rounded"></div>
      </div>

      <div className="bg-white shadow-sm rounded-lg p-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search.."
            className="pr-10 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
          />
          <Button
            size="sm"
            variant="ghost"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-100"
          >
            <Search className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchWidget;
