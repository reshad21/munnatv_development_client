"use client";

import { Button } from "@/components/ui/button";
import { Download, FileSpreadsheet } from "lucide-react";
import { useTransition } from "react";

const ExportSubscriber = () => {
  const [isPending, startTransition] = useTransition();
  const handleExport = async () => {
    startTransition(async () => {
       window.open(`${process.env.NEXT_PUBLIC_API_URL}/subscribers/export`, "_blank");
    });
  };

  return (
    <Button
      variant="outline"
      disabled={isPending}
      className="relative group border-2 border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 transition-all duration-300 cursor-pointer px-4 py-2 rounded-lg shadow-sm hover:shadow-md"
      onClick={handleExport}
    >
      <div className="flex items-center space-x-2">
        {isPending ? (
          <div className="animate-spin">
            <FileSpreadsheet className="w-4 h-4" />
          </div>
        ) : (
          <>
            <div className="relative">
              <FileSpreadsheet className="w-4 h-4 transition-transform group-hover:scale-110" />
              <Download className="w-3 h-3 absolute -bottom-1 -right-1 text-green-600 transition-transform group-hover:translate-y-0.5" />
            </div>
          </>
        )}
        <span className="font-medium">
          {isPending ? "Exporting..." : "Export Subscribers"}
        </span>
      </div>

      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/10 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
    </Button>
  );
};

export default ExportSubscriber;
