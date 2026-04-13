import { Check, ChevronsRight, Target } from "lucide-react";

export default function BusinessServicesSection() {
  const services = [
    {
      title: "Development",
      features: [
        "Custom web and SaaS products",
        "Scalable, secure architecture",
        "Agile and efficient delivery",
      ],
    },
    {
      title: "Design",
      features: [
        "User-focused UI/UX",
        "Responsive and modern interfaces",
        "Wireframes to final prototypes",
      ],
    },
    {
      title: "Quality Assurance",
      features: [
        "Manual and automated testing",
        "Bug tracking and performance checks",
        "Ensuring reliability before launch",
      ],
    },
    {
      title: "Consulting",
      features: [
        "Project planning and tech strategy",
        "System analysis and optimization",
        "Ongoing technical guidance",
      ],
    },
    {
      title: "Support & Maintenance",
      features: [
        "Ongoing technical assistance",
        "Regular updates and bug fixes",
        "Performance monitoring and improvements",
      ],
    },
    {
      title: "Brand Guidelines",
      features: [
        "Use consistent logo, colors, and fonts",
        "Maintain a clear, professional visual style",
        "Communicate with a confident voice",
      ],
    },
  ];

  return (
    <section className="container py-16 px-4 mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Target className="w-5 h-5 text-second" />
          <span className="text-second font-medium">Our Goal</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Partnering Business for Success
            </h1>
          </div>
          <div className="lg:pt-4">
            <p className="text-gray-600 text-lg leading-relaxed">
              To deliver high-quality, innovative software solutions that help
              businesses grow, succeed, and stay ahead in the digital world.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
          >
            {/* Service Title */}
            <div className="flex items-center gap-2 mb-6">
              <ChevronsRight className="w-4 h-4 text-second" />
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {service.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-second mt-0.5 flex-shrink-0 font-bold" />
                  <span className="text-gray-600 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
