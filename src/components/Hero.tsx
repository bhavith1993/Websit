import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Database, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-analytics.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Data Analytics Dashboard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Trusted by Finance Leaders
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Finance Transformation{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              without the headcount
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-up">
            We transform finance processes to be efficient. We leverage light automation tools to help accounting and finance teams gain efficiencies and save time. With an average deployment timeline between 2-6 weeks, we help you avoid costly system implementations and get quick wins immediately. Our expertise in accounting and finance helps us understand your problems. We unlock your team's potential to focus on analysis and decision making, not preparation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button variant="default" size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity" asChild>
              <a href="#contact">
                Schedule Consultation
                <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10" asChild>
              <a href="#services">View Our Work</a>
            </Button>
          </div>

          {/* Experience Stats */}
          <div className="flex flex-col sm:flex-row gap-6 mt-16 animate-fade-in">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-primary" />
              <div className="text-base text-muted-foreground">
                12+ years of Accounting and Finance experience
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-secondary" />
              <div className="text-base text-muted-foreground">
                20+ years of Business Applications experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
