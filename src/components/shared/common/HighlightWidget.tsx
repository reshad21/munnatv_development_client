import { Calendar } from "lucide-react";

const highlights = [
  {
    date: "Jan 10, 2024",
    title: "Hospital Management Portal Admin Dashboard",
  },
  {
    date: "Jan 10, 2024",
    title: "Student Management Portal Admin Dashboard",
  },
  {
    date: "Jan 10, 2024",
    title: "Doctor Management Portal Admin Dashboard",
  },
];
const HighlightWidget = () => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Highlights</h2>
        <div className="w-16 h-1 bg-teal-600 rounded"></div>
      </div>

      <div className="space-y-4">
        {highlights.map((highlight, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>{highlight.date}</span>
            </div>
            <h3 className="text-gray-800 font-semibold leading-tight hover:text-teal-600 cursor-pointer transition-colors">
              {highlight.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightWidget;
