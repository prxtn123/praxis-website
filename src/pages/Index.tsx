import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import NearMissSection from "@/components/NearMissSection";
import ComplianceSection from "@/components/ComplianceSection";
import ProximitySection from "@/components/ProximitySection";
import IndustrialFutureSection from "@/components/IndustrialFutureSection";
import EvidenceSection from "@/components/EvidenceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <NearMissSection />
      <ComplianceSection />
      <ProximitySection />
      <IndustrialFutureSection />
      <EvidenceSection />
      <Footer />
    </div>
  );
};

export default Index;
