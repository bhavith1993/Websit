import { Award, Clock, Shield, Users } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Award,
      title: "Industry Expertise",
      description:
        "Deep understanding of finance and accounting processes with proven track record in financial analytics.",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description:
        "Efficient project execution with agile methodologies ensuring timely delivery without compromising quality.",
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Enterprise-grade security practices and compliance with financial data protection standards.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description:
        "Ongoing support and training to ensure your team maximizes value from analytics solutions.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="bg-gradient-hero bg-clip-text text-transparent">Choose Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine technical excellence with deep financial domain knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-muted/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-4 shadow-elegant">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
