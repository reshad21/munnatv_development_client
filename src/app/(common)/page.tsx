import BlogSection from "@/components/modules/blogs/BlogSection";
import BannerSection from "./_components/BannerSection";
import PortfolioSection from "./_components/PortfolioSection";
import TestimonialSection from "./_components/TestimonialSection";
import ContactSection from "@/components/modules/contacts/ContactSection";
import SubscribeSection from "./_components/SubscribeSection";
import OurGoalSection from "./_components/OurGoalSection";
import PricingSection from "./_components/PricingSection";
import TeamMemberSection from "./_components/TeamMemberSection";
import StorySection from "./_components/StorySection";
import OurServices from "./_components/OurServices";
import WorkProcess from "./_components/WorkProcess";
import { Hero } from "./_components/Hero";
import { getAllProjects } from "@/services/projects";
import Header from "@/components/shared/Header";



const HomePage = async() => {
  const portfolioItems = await getAllProjects([]);
  return (
    <>
      <Header />
      <Hero />
      <StorySection />
      <OurServices />
      <WorkProcess />
      <PortfolioSection portfolioItems={portfolioItems?.data}/>
      <TestimonialSection />
      <BannerSection />
      <TeamMemberSection />
      {/* Partnership - sabilar */}
      <OurGoalSection />
      <PricingSection />
      {/* Ask question - asif vai */}
      <ContactSection />
      <SubscribeSection />
      <BlogSection />
    </>
  );
};

export default HomePage;
