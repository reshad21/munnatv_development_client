import { BarChart3, Laptop, LayoutDashboard, Goal } from "lucide-react";
import { Button } from "@/components/ui/button"; // Optional: if using shadcn/ui

const pricingPlans = [
  {
    title: "Basic",
    price: "$135",
    subtitle: "per project/month",
    icon: <BarChart3 className="w-10 h-10 text-lime-500" />,
    features: [
      "Essential features to get started",
      "Standard customer support",
      "Suitable for small projects",
      "Cost-effective and simple setup",
    ],
  },
  {
    title: "Standard",
    price: "$360",
    subtitle: "per project/month",
    icon: <Laptop className="w-10 h-10 text-lime-500" />,
    features: [
      "Enhanced features and tools",
      "Priority customer support",
      "Integration with popular platforms",
      "Scalable for growing businesses",
    ],
  },
  {
    title: "Custom",
    price: "24/7",
    subtitle: "/Support",
    icon: <LayoutDashboard className="w-10 h-10 text-lime-500" />,
    features: [
      "Tailored to your specific needs",
      "Flexible pricing and features",
      "Scalable infrastructure",
      "Personalized technical support",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <div className="mb-12 space-y-2">
          <div className="flex justify-center items-center space-x-2">
            <Goal className="w-5 h-5 text-green-500" />
            <span className="text-green-600 font-semibold">Our Pricing</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Achieve Your Goal <br className="sm:hidden" /> of Business
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-2xl p-8 border border-gray-200 hover:shadow-md transition"
            >
              <div className="text-4xl font-bold text-gray-900">
                {plan.price}
                <span className="text-sm font-normal text-gray-500 ml-2">
                  {plan.subtitle}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {plan.title}
              </h3>

              <div className="my-6 flex justify-center">{plan.icon}</div>

              <ul className="text-gray-600 space-y-2 text-left mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-green-500">➤</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="w-full" variant="ghost">Get Now →</Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Button variant="default" className="px-6 py-3 rounded-xs bg-[#196164]">
            Explore All →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
