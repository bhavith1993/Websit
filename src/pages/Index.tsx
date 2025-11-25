import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PowerBIDemo from "@/components/PowerBIDemo";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <PowerBIDemo />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
