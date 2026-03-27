import { Shield, Clock, TrendingUp, BarChart2 } from "lucide-react";

const highlights = [
  { icon: Shield, title: "Safety first engine", description: "Classifies and prioritises risk events with variable severity scoring." },
  { icon: Clock, title: "Proximity monitoring", description: "Live zone & distance analytics across all active operations." },
  { icon: TrendingUp, title: "Performance insights", description: "Machine-read continuous improvement metrics tied to continuous compliance." },
  { icon: BarChart2, title: "Automated reporting", description: "ISO/OSHA-ready dashboards with gated approvals and secure audit logs." },
];

export default function ProductHighlights() {
  return (
    <section className="py-20 bg-white" id="product-highlights">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-500 uppercase tracking-widest">Product highlights</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Modular capabilities for every warehouse use case</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <article key={item.title} className="p-6 rounded-3xl border border-black/10 hover:bg-[#f8f8fb] transition">
              <div className="mb-4 w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
