import { ClipboardCheck, Shield, BarChart3, FileCheck } from "lucide-react";

const complianceFeatures = [
  { icon: ClipboardCheck, label: "Audit Logs", desc: "Complete audit trail" },
  { icon: Shield, label: "Standards", desc: "ISO & OSHA ready" },
  { icon: BarChart3, label: "Real-time", desc: "Live trend analysis" },
  { icon: FileCheck, label: "Reports", desc: "Auto-generated" },
];

export const ComplianceSection = () => {
  return (
    <section id="compliance" className="py-32 bg-black text-white">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-blue-400 mb-4">Compliance</p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Effortless adherence.
            <br />
            <span className="text-white/60">Always audit-ready.</span>
          </h2>

          <p className="text-lg text-white/60 leading-relaxed">
            Real-time monitoring ensures full adherence to ISO, OSHA, and internal standards.
            Stay compliant without manual effort.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {complianceFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <feature.icon className="h-6 w-6 text-white mb-3" />
              <h3 className="font-semibold text-white mb-1">{feature.label}</h3>
              <p className="text-sm text-white/50">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
