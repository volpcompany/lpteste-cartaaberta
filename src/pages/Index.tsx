import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutEvent from "@/components/AboutEvent";
import ProgramContent from "@/components/ProgramContent";
import Speaker from "@/components/Speaker";
import Testimonials from "@/components/Testimonials";
import SpecialOffer from "@/components/SpecialOffer";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main>
        <HeroSection />
        <AboutEvent />
        <ProgramContent />
        <Speaker />
        <Testimonials />
        <SpecialOffer />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
