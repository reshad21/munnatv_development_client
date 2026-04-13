import React from "react";
import { Sparkles, TrendingUp } from "lucide-react";

const DashboardHeading = ({
  title,
  slogan,
}: {
  title: string;
  slogan: string;
}) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>

      {/* Main Content */}
      <div className="relative px-8 py-10 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Left Side - Title and Slogan */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="h-8 w-1 bg-gradient-to-b from-teal-500 to-emerald-600 rounded-full"></div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">
                  {title}
                </h1>
              </div>

              <div className="flex items-center gap-2 ml-16">
                <Sparkles className="w-4 h-4 text-teal-500" />
                <p className="text-lg text-slate-600 font-medium">{slogan}</p>
              </div>
            </div>

            {/* Right Side - Stats/Decoration */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Animated Circles */}
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
              </div>

              {/* Stats Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">
                    {new Date().getDate()}
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">
                    {new Date().toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="mt-8 relative">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 rounded-full animate-pulse"
                style={{ width: "75%" }}
              ></div>
            </div>
            <div className="absolute -top-1 left-3/4 w-3 h-3 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full shadow-lg"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-4 right-4 opacity-20">
            <div
              className="w-24 h-24 border-2 border-teal-300 rounded-full animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
          </div>
          <div className="absolute bottom-4 left-4 opacity-20">
            <div className="w-16 h-16 border-2 border-emerald-300 rounded-lg rotate-45 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeading;
