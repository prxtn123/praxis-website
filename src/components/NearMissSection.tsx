import { AlertTriangle, Eye, Gauge, Route } from "lucide-react";
import cameraDetection from "@/assets/camera-detection.jpg";

const detectionFeatures = [
  { icon: AlertTriangle, label: "No-Vest Detection" },
  { icon: Route, label: "Walkway Deviation" },
  { icon: Gauge, label: "Proximity Alerts" },
  { icon: Eye, label: "Depth-Aware Vision" },
];

export const NearMissSection = () => {
  return (
    <section id="features" className="py-32 bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium text-blue-500 mb-4">Near-Miss Prevention</p>

            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
              Proactive safety.
              <br />
              <span className="text-muted-foreground">Before incidents occur.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Identify and alert on potential near misses in real time — no high-vis vest, 
              zone violations, unsafe proximity — so teams can intervene instantly.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {detectionFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                >
                  <feature.icon className="h-4 w-4 text-foreground" />
                  <span className="text-sm font-medium text-foreground">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={cameraDetection}
                alt="AI camera detection"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearMissSection;
