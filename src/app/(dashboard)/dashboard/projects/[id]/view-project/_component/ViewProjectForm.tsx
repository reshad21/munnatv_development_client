/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { TCategory } from "@/types/category.types";

type TTechStack = {
  name: string;
  icon?: string;
  slogan: string;
};

type ViewProjectProps = {
  categories: TCategory[];
  project: any;
};

// ✅ Helper to safely resolve image src
const getSafeImageSrc = (src?: string) => {
  if (!src) return "/placeholder.png"; // fallback image
  if (src.startsWith("http") || src.startsWith("/")) return src;
  return "/placeholder.png"; // if it's just text like "Accusamus..."
};

const ViewProjectForm = ({ categories, project }: ViewProjectProps) => {
  const categoryName =
    categories.find((cat) => cat.id === project?.categoryId)?.name || "N/A";

  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 mt-8 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Details</h2>

      {/* Thumbnail */}
      {project?.thumbnail && (
        <div className="w-full h-64 relative rounded-xl overflow-hidden">
          <Image
            src={getSafeImageSrc(project.thumbnail)}
            alt={project?.name || "Project Thumbnail"}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Basic Info */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{project?.name}</h3>
        <p className="text-gray-600 mt-2">{project?.description}</p>
      </div>

      {/* URLs */}
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Live URL: </span>
          {project?.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {project.liveUrl}
            </a>
          ) : (
            "N/A"
          )}
        </p>
        <p>
          <span className="font-semibold">Demo URL: </span>
          {project?.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {project.demoUrl}
            </a>
          ) : (
            "N/A"
          )}
        </p>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <p>
          <span className="font-semibold">Start Date:</span>{" "}
          {project?.startDate
            ? new Date(project.startDate).toLocaleDateString()
            : "N/A"}
        </p>
        <p>
          <span className="font-semibold">End Date:</span>{" "}
          {project?.endDate
            ? new Date(project.endDate).toLocaleDateString()
            : "N/A"}
        </p>
      </div>

      {/* Author & Category */}
      <div className="text-gray-700">
        <p>
          <span className="font-semibold">Author:</span>{" "}
          {project?.author || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {categoryName}
        </p>
      </div>

      {/* Features */}
      <div>
        <h4 className="text-lg font-semibold mb-2">Features</h4>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {project?.projectFeatures?.length > 0 ? (
            project.projectFeatures.map((f: any, idx: number) => (
              <li key={idx}>{f.name}</li>
            ))
          ) : (
            <li>No features listed</li>
          )}
        </ul>
      </div>

      {/* Tech Stacks */}
      <div>
        <h4 className="text-lg font-semibold mb-2">Tech Stacks</h4>
        <ul className="space-y-2 text-gray-700">
          {project?.projectTechStacks?.length > 0 ? (
            project.projectTechStacks.map((t: TTechStack, idx: number) => (
              <li key={idx} className="flex items-center gap-2">
                {t.icon && (
                  <Image
                    src={getSafeImageSrc(t.icon)}
                    alt={t.name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                )}
                <span className="font-medium">{t.name}</span> —{" "}
                <span className="text-gray-500">{t.slogan}</span>
              </li>
            ))
          ) : (
            <li>No tech stacks listed</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ViewProjectForm;
