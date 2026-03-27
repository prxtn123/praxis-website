import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Cpu, Server, Zap, Link2, Lock, CheckCircle, ArrowRight } from "lucide-react";

const productFeatures = [
  {
    icon: ShieldCheck,
    title: "Proactive hazard interception",
    description:
      "AI analysis identifies and mitigates risks before they become incidents, using 99.4% detection accuracy across real environments.",
  },
  {
    icon: Cpu,
    title: "Edge-first inference",
    description:
      "On-device processing keeps latency below 100ms and eliminates cloud video transit, ensuring privacy and compliance.",
  },
  {
    icon: Server,
    title: "IT-friendly deployment",
    description:
      "Works with existing CCTV infrastructure, Azure IoT, or on-prem orchestration with no forklift upgrades.",
  },
  {
    icon: Zap,
    title: "Real-time alerts",
    description:
      "Instant notification for near-miss events, forbidden zone breaches, and PPE non-compliance, across all shifts.",
  },
];

const integrations = [
  "Microsoft Azure", "AWS S3", "Grafana", "Slack", "Power BI", "Siemens MindSphere"
];

export default function Product() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 bg-black text-white">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <p className="text-sm font-medium text-blue-400 mb-3">NodeHub Product Suite</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-5">
            Safety intelligence-built for logistics teams.
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            Full-stack risk management with live detection, audit-grade evidence, and behavioural analytics.
            Drive performance improvement and lower risk exposure in one platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:tom.noble@praxisgb.com" className="rounded-full bg-white text-black py-3 px-8 font-medium hover:opacity-90 transition">
              Request Demo
            </a>
            <a href="/contact" className="rounded-full border border-white/60 text-white py-3 px-8 font-medium hover:bg-white/10 transition">
              Talk to Sales
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8f8fb]">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-foreground">Core features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productFeatures.map((feature) => (
              <article key={feature.title} className="p-6 rounded-3xl bg-white shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 mb-4 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="mb-10 text-center">
            <p className="uppercase text-xs font-semibold tracking-widest text-blue-500 mb-2">Integrations</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Plug into your operational stack.</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Interoperable with existing data infrastructure, tier 1 WMS systems and executive dashboards.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((item) => (
              <div key={item} className="rounded-xl border border-black/10 p-4 text-center text-sm font-medium">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8f8fb]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Privacy, security, trust</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Full ISO 27001 ready controls and distributed deployment options. Data residency in the UK, EU or customer-owned private subnet.
              </p>
              <ul className="space-y-3">
                {["Edge-first architecture; video stays on-prem.", "Role-based access, SSO, MFA and audit trail.", "SOC-2 readiness, vulnerability scan reports included.", "DPA & standard contractual clauses maintained."]
                  .map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-1" />
                      {doc}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="font-semibold mb-4">Modular stack example</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>1. Camera feed capture (RTSP, ONVIF)</p>
                <p>2. NodeHub inference on Jetson/Edge GPU</p>
                <p>3. Event stream to Kafka or HTTP webhook</p>
                <p>4. Audit log + clip archive in encrypted object store</p>
                <p>5. KPI dashboard and incident workflow in NodeHub portal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready for a deeper dive?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Speak to our technical team and get a live deployment plan for your site.
          </p>
          <a
            href="mailto:tom.noble@praxisgb.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-black/80"
          >
            Book a technical walkthrough
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
