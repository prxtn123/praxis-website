import { Ruler, Users, AlertCircle, Route } from "lucide-react";
import proximityDetection from "@/assets/proximity-detection.jpg";

const metrics = [
  { icon: Users, label: "MMHE-Pedestrian", value: "2.5m+", desc: "Safe distance maintained" },
  { icon: Route, label: "Path Monitoring", value: "Active", desc: "Walkway deviation alerts" },
  { icon: AlertCircle, label: "Response Time", value: "<100ms", desc: "Instant zone alerts" },
];

export const ProximitySection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium text-blue-500 mb-4">Proximity Intelligence</p>

            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
              Depth-aware detection.
              <br />
              <span className="text-muted-foreground">Spatial awareness.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              AI that understands spatial relationships in real-time. Flag risks like 
              close proximity or off-path movement before they escalate.
            </p>

            {/* Metrics */}
            <div className="space-y-4">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#f5f5f7] hover:bg-[#e8e8ed] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                      <metric.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{metric.label}</div>
                      <div className="text-sm text-muted-foreground">{metric.desc}</div>
                    </div>
                  </div>
                  <div className="text-xl font-semibold text-foreground">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={proximityDetection}
                alt="AI proximity detection"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProximitySection;
