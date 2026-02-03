import { Clock, Gauge, Activity, Workflow, TrendingUp } from "lucide-react";
import taskTiming from "@/assets/task-timing.jpg";

const features = [
  {
    icon: Gauge,
    title: "Automated Task Timing",
    description: "Precisely measure activity duration without manual intervention.",
  },
  {
    icon: Activity,
    title: "Cycle Time Analysis",
    description: "Detailed breakdowns to identify optimisation opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Bottleneck Detection",
    description: "AI-driven identification and improvement recommendations.",
  },
  {
    icon: Workflow,
    title: "Process Flow Mapping",
    description: "Visualise workflows with heatmaps and flow analysis.",
  },
];

export const IndustrialFutureSection = () => {
  return (
    <section id="industrial-future" className="py-32 bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-medium text-blue-500 mb-4">Industrial Engineering</p>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Building tomorrow's
            <br />
            efficiency today.
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            AI cameras automatically measure task durations, cycle times, and process flows 
            with no disruption. Turn vision into actionable productivity intelligence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={taskTiming}
                alt="Task timing dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialFutureSection;
