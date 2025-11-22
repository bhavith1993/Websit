import { Card } from "@/components/ui/card";
import powerbiIcon from "@/assets/powerbi-icon.jpg";
import alteryxIcon from "@/assets/alteryx-icon.jpg";
import financeIcon from "@/assets/finance-icon.jpg";
import powerbialteryxIcon from "@/assets/powerbi_alteryx-icon.jpg";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Power BI Automation for Accounting",
      description:
        "ERPs are great for transactions, not for fast, flexible reporting. Power BI fixes that. We automate data prep, formatting, and recurring financial reports so work that used to take days runs in minutes. Our refresh-ready data models kill spreadsheet bottlenecks and give accounting instant visibility into what’s driving performance.",
      icon: powerbiIcon,
      features: [
        "Custom Dashboard Design",
        "Data Integration & ETL",
        "Advanced DAX Calculations",
        "Report Automation",
      ],
    },
    {
      title: "Power BI Automation for FP&A",
      description:
        "Stop rebuilding spreadsheets.Power BI gives FP&A real-time visibility into results, drivers, and scenarios.We automate your data flows, driver-based models, and performance dashboards so forecasts and variance reports refresh in minutes, not days",
      icon: powerbiIcon,
      features: [
        "Custom Dashboard Design",
        "Data Integration & ETL",
        "Advanced DAX Calculations",
        "Report Automation",
      ],
    },
    {
      title: "Alteryx Automation for Accounting",
      description:
        "Alteryx transforms complex, manual accounting workflows into fast, repeatable processes. Tasks such as data prep, transformations, allocations, or multi-step logic that once took hours—or even days—now run in minutes.Our experts design automated workflows tailored to your ERP structure, chart of accounts, and reporting cadence, ensuring accuracy, speed, and consistency across every cycle.With our support, you avoid building an in-house automation team; we build the workflows, test them, deploy them, and leave you with a fully automated engine.",
      icon: alteryxIcon,
      features: [
        "Workflow Automation",
        "Data Blending & Prep",
        "Predictive Analytics",
        "Process Optimization",
      ],
    },
    {
      title: "Power BI + Alteryx Automation",
      description:
        "Alteryx automates the workflows. Power BI delivers the insight. We wire them together so finance gets fast, trusted numbers—every close, every forecast.",
      icon: powerbialteryxIcon,
      features: [
        "Clean, automated data flows",
        "Faster reporting",
        "Instant drill-downs",
        "Better decisions",
        "Fewer bottlenecks",
      ],
    },
    {
      title: "FP&A Automation & Predictive Reporting",
      description:
        "FP&A teams thrive when actuals, drivers, and forecasts are updated without manual effort.Your team gets real-time visibility, updated insights, and faster planning cycles—without hiring modelers, BI specialists, or data engineers.We automate:",
      icon: financeIcon,
      features: [
        "Actuals refresh",
        "Driver-based models",
        "Rolling forecasts",
        "Executive dashboards",
        "Scenario toggles",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive analytics solutions designed specifically for finance professionals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-card hover:shadow-hover transition-all duration-300 border-border group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-cover rounded-lg shadow-elegant"
                />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
