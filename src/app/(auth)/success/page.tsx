import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const Success = async (props: { searchParams: Promise<{ text?: string }> }) => {
  const searchParams = await props.searchParams;
  const text =
    searchParams.text || "Your operation was completed successfully!";

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center space-y-6">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-green-600" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900">Success!</h2>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">{text}</p>
          </div>

          {/* Action Button */}
          <Link href={"login"} className="pt-4">
            <Button className="w-full  text-white">Back to Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
