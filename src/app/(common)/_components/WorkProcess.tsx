import { Settings } from "lucide-react";
import Plan from "@/assets/plan.svg";
import Design from "@/assets/design.svg";
import Develop from "@/assets/develop.svg";
import Deliver from "@/assets/Delivar.svg";
import Image from "next/image";

export default function WorkProcess() {
  const processSteps = [
    {
      icon: Plan,
      title: "Plan",
      description: "Define goals and requirements.",
      number: "01",
    },
    {
      icon: Design,
      title: "Design",
      description: "Create user-friendly interfaces.",
      number: "02",
    },
    {
      icon: Develop,
      title: "Develop",
      description: "Build high-quality software.",
      number: "03",
    },
    {
      icon: Deliver,
      title: "Deliver",
      description: "Launch and support the product.",
      number: "04",
    },
  ];

  return (
    <section
      style={{
        backgroundImage:
          "url('/assets/e87641716fbb99d27a38df68ccd9253ef6cdcca0.png')",
      }}
      className="py-16 px-4 bg-[#EBF3EE] bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Settings className="w-5 h-5 text-teal-600" />
            <span className="text-teal-600 font-medium">Work Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Turning Ideas Into
            <br />
            High-Impact Software
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-8 shadow-sm relative overflow-visible">
                <div className="flex justify-between items-start">
                  <Image
                    className="mb-4 mt-2 w-12 h-12"
                    src={step.icon}
                    alt={step.title}
                    width={48}
                    height={48}
                  />
                  <span className="text-5xl font-bold text-gray-300">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
