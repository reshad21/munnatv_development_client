import Footer from "@/components/shared/Footer";
import NavbarDemo from "@/components/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavbarDemo />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
