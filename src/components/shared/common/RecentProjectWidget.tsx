import { Building2, Package, Pill, ShoppingCart } from "lucide-react";
const recentProjects = [
  {
    name: "Hospital Management",
    icon: Building2,
    iconColor: "text-blue-600",
  },
  {
    name: "Inventory 365",
    icon: Package,
    iconColor: "text-green-600",
  },
  {
    name: "Pharmacy Management",
    icon: Pill,
    iconColor: "text-purple-600",
  },
  {
    name: "E-Commerce",
    icon: ShoppingCart,
    iconColor: "text-orange-600",
  },
];

const RecentProjectWidget = () => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Recent Projects
        </h2>
        <div className="w-16 h-1 bg-teal-600 rounded"></div>
      </div>

      <div className="space-y-3">
        {recentProjects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <div
              key={index}
              className="bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer rounded-lg p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">
                  {project.name}
                </span>
                <IconComponent className={`h-5 w-5 ${project.iconColor}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjectWidget;
