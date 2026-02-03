import { Shield, Target, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Shield,
    value: "Near Misses",
    label: "Prevented proactively",
  },
  {
    icon: Target,
    value: "100%",
    label: "Compliance adherence",
  },
  {
    icon: Clock,
    value: "Real-time",
    label: "Task timing insights",
  },
  {
    icon: TrendingUp,
    value: "Optimised",
    label: "Workflow efficiency",
  },
];

export const StatsSection = () => {
  return (
    <section id="product" className="py-32 bg-white">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            A new standard for safety.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Built with industry leaders to deliver what logistics truly needs: 
            prevention over reaction, compliance without effort.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-muted mx-auto mb-5 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
