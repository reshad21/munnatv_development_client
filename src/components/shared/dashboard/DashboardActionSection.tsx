import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, LucideIcon } from "lucide-react";
import Link from "next/link";

export interface ActionSectionProps {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
    icon?: LucideIcon;
  };
  className?: string;
}

const DashboardActionSection: React.FC<ActionSectionProps> = ({
  title,
  description,
  primaryAction,
  className = "",
}) => {
  const PrimaryIcon = primaryAction.icon || Plus;

  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-2xl border border-gray-200">
        {/* Content Section */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        {/* Primary Action Button */}
        <div className="flex items-center">
          <Link href={primaryAction.href}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                  <PrimaryIcon className="w-4 h-4" />
                </div>
                <span>{primaryAction.label}</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardActionSection;
