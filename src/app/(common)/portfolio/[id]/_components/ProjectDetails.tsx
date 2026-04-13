/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckCircle, ChevronUp, Tag, User } from "lucide-react";
import Image from "next/image";

export default async function ProjectDetails({ project }: { project: any }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex items-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{project.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>{project.category.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {project.name || "Project Name"}
          </h1>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            <Image
              src={project.thumbnail || "/placeholder.svg"}
              alt="Website mockups showing different design layouts in blue, purple, and green color schemes"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-gray-600 leading-relaxed mb-12">
          {project.description}
        </div>

        {/* Projects Features Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <span className="w-4 h-4 bg-gray-900 rounded-sm"></span>
              Projects Features
            </h2>
            <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
              <ChevronUp className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="space-y-4">
            {project?.projectFeatures?.map((feature: any) => (
              <div key={feature.id} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">{feature.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <span className="text-lg">🛠</span>
              Tech Stack Snapshots Use
            </h2>
            <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
              <ChevronUp className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="space-y-4">
            {project?.projectTechStacks?.map((tech: any) => (
              <div key={tech.id} className="flex items-start gap-3">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
                <div>
                  <span className="font-medium text-gray-900">{tech.name}:</span>
                  <span className="text-gray-700 ml-2">{tech.slogan}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
