import { FileVideo, Search, GitBranch, Lightbulb } from "lucide-react";
import evidenceAnalysis from "@/assets/evidence-analysis.jpg";

const features = [
  {
    icon: FileVideo,
    title: "Enhanced Footage",
    description: "AI-enhanced video with annotations",
  },
  {
    icon: GitBranch,
    title: "Bowtie Analysis",
    description: "Visual root cause mapping",
  },
  {
    icon: Search,
    title: "Deep Investigation",
    description: "Incident timeline reconstruction",
  },
  {
    icon: Lightbulb,
    title: "AI Recommendations",
    description: "Data-driven suggestions",
  },
];

export const EvidenceSection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={evidenceAnalysis}
                alt="Evidence analysis dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium text-blue-500 mb-4">Evidence & Analysis</p>

            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
              Root cause tools.
              <br />
              <span className="text-muted-foreground">Continuous improvement.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Clear, verifiable evidence and automated root cause mapping. 
              Transform incidents into learning opportunities with AI-powered analysis.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#f5f5f7] hover:bg-[#e8e8ed] transition-colors"
                >
                  <feature.icon className="h-6 w-6 text-foreground mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceSection;
