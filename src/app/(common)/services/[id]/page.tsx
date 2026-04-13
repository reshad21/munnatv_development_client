import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Image from "next/image"
import { fakeServices } from "../fakeServices"
import { notFound } from "next/navigation"
import Link from "next/link"
import HeroSection from "@/components/shared/common/HeroSection"


export default async function UIUXServices(props: { params: Promise<{ id: string }> }) {
    const params = await props.params
    const active = fakeServices.find(s => s.id === params.id)
    if (!active) {
        notFound()
    }

    const serviceDetails = [
        {
            icon: "🎨",
            title: "User Interface (UI) Design",
            description:
                "We design modern, responsive interfaces that reflect your brand and deliver a consistent experience across all devices.",
            features: [
                "Pixel-perfect visual design",
                "Responsive web & mobile layouts",
                "Interactive prototypes & animations",
                "Scalable design systems and UI kits",
            ],
        },
        {
            icon: "👤",
            title: "User Experience (UX) Design",
            description:
                "We dive deep into user behavior to craft seamless experiences that feel natural and solve real problems.",
            features: [
                "User research & personas",
                "Journey mapping & task flows",
                "Wireframes & high-fidelity prototypes",
                "Usability testing & iterative improvements",
            ],
        },
        {
            icon: "✅",
            title: "Design Validation & Testing",
            description: "We don't guess — we validate. Every design decision is backed by user feedback, testing, and data.",
            features: [
                "A/B testing and heatmaps",
                "Click-path and funnel analysis",
                "Accessibility & WCAG compliance",
                "Design audits and performance reviews",
            ],
        },
    ]

    const whyChoose = [
        "Research-driven, user-first design approach",
        "Cross-functional collaboration with dev & QA teams",
        "Consistency across web, mobile, and desktop",
        "Designs that improve usability, retention, and ROI",
    ]

    const tools = [
        { name: "Figma", description: "for collaborative design & prototyping", color: "bg-purple-500" },
        { name: "Miro", description: "for journey mapping & workshops", color: "bg-yellow-500" },
        { name: "InVision / Maze", description: "for testing and user feedback", color: "bg-red-500" },
        { name: "Framer", description: "Real-time prototyping with animations", color: "bg-blue-500" },
    ]

    return (
        <div>
            <HeroSection title="Service Details" />
            <div className="max-w-7xl mx-auto p-6 min-h-screen">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Hero Section */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                            <div className="aspect-[2/1] relative w-full flex items-center justify-center bg-black">
                                <Image
                                    src={active.image}
                                    alt={active.title}
                                    width={1080}
                                    height={540}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-2xl">🎨</span>
                                    <h1 className="text-3xl font-bold text-gray-900">{active.title} Services</h1>
                                </div>
                                <h2 className="text-xl text-blue-600 font-semibold mb-4">Design That Works. Experiences That Stick.</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {active.description}
                                </p>
                            </div>
                        </div>

                        {/* Service Details */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {serviceDetails.map((service, index) => (
                                <Card key={index} className="bg-white shadow-sm">
                                    <CardContent className="p-6">
                                        <div className="text-3xl mb-4">{service.icon}</div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-2 text-sm">
                                                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Why Choose & Tools Section */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <Collapsible className="bg-white rounded-xl shadow-sm">
                                <CollapsibleTrigger asChild>
                                    <Button variant="ghost" className="w-full p-6 justify-between text-left hover:bg-gray-50">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg">🎯</span>
                                            <span className="font-semibold text-gray-900">Why Choose Codysta for UI/UX?</span>
                                        </div>
                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                    </Button>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-6 pb-6">
                                    <ul className="space-y-3">
                                        {whyChoose.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm">
                                                <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CollapsibleContent>
                            </Collapsible>

                            <Collapsible className="bg-white rounded-xl shadow-sm">
                                <CollapsibleTrigger asChild>
                                    <Button variant="ghost" className="w-full p-6 justify-between text-left hover:bg-gray-50">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg">🛠️</span>
                                            <span className="font-semibold text-gray-900">Tools We Use</span>
                                        </div>
                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                    </Button>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-6 pb-6">
                                    <ul className="space-y-3">
                                        {tools.map((tool, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm">
                                                <div className={`w-3 h-3 rounded-full ${tool.color} mt-1 flex-shrink-0`} />
                                                <div>
                                                    <span className="font-medium text-gray-900">{tool.name}</span>
                                                    <span className="text-gray-600"> – {tool.description}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </CollapsibleContent>
                            </Collapsible>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="space-y-3 sticky top-6">
                            {fakeServices.map((svc) => {
                                const href = `/services/${svc.id}`
                                const isActive = svc.id === active.id

                                return (
                                    <Button
                                        asChild
                                        key={svc.id}
                                        variant={isActive ? "default" : "ghost"}
                                        className={`w-full justify-start text-left p-4 h-auto ${isActive
                                            ? "bg-blue-600 text-white hover:bg-blue-700"
                                            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                                            }`}
                                    >
                                        <Link href={href}>{svc.title}</Link>
                                    </Button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
