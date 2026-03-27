import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Users, Timeline, Award, Globe, ShieldCheck, Sparkles } from "lucide-react";

const milestones = [
  { year: "2022", title: "NodeHub founded", detail: "Built from a 2-person logistics safety lab in Manchester." },
  { year: "2023", title: "First live deployments", detail: "5 sites operational with 1.3m hours of monitoring." },
  { year: "2024", title: "Enterprise traction", detail: "Signed pilot programmes with major cold-chain and e-commerce operators." },
  { year: "2026", title: "NodeHub platform launch", detail: "Industry-first near-miss prevention as a managed service." },
];

const team = [
  { name: "Tom Noble", role: "Founder & CEO" },
  { name: "Ayesha Khan", role: "CTO" },
  { name: "Daniel Osei", role: "Head of Product" },
  { name: "Fiona Chan", role: "Director of Customer Success" },
];

const credibility = [
  { icon: Globe, title: "Global Logistics", text: "20+ countries supported." },
  { icon: ShieldCheck, title: "Compliance Certified", text: "ISO 27001 / GDPR / OHS standards." },
  { icon: Award, title: "Top Industry Recognition", text: "3x safety innovation awards." },
  { icon: Sparkles, title: "Proven ROI", text: "Avg 32% reduction in incident-related costs." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 bg-[#f5f5f7]">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <p className="text-sm font-medium text-blue-500 mb-3">Company</p>
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-5">NodeHub is logistics safety in action.</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Founded out of practical operations risk engineering, NodeHub combines computer vision, workflow analytics and behavioural data to reduce incidents before they happen.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[980px] mx-auto px-6 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our team has deep roots in warehouse safety, AI research, and compliance engineering. NodeHub began as a proof-of-concept on a single site, and today it is the live safety platform for leading distribution centres.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe operational risk should be seen, quantified, and mitigated with the same discipline as throughput and quality. NodeHub delivers that transparency without requiring structural change.
            </p>
          </div>
          <div className="rounded-3xl bg-[#f8f8fb] p-8 apple-card">
            <h3 className="font-semibold mb-4">Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Enable logistics operators to prevent incidents 10x faster than traditional safety rounds while improving compliance and performance reporting.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-2xl bg-white shadow-sm">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Vision</p>
                <p className="font-semibold">Zero avoidable incidents.</p>
              </div>
              <div className="p-3 rounded-2xl bg-white shadow-sm">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Values</p>
                <p className="font-semibold">Accuracy, Trust, Impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f7]">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Timeline</h2>
          <div className="border-l border-black/10 pl-6 space-y-8">
            {milestones.map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500 border-2 border-white" />
                <p className="text-sm font-semibold text-blue-600">{item.year}</p>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Leadership team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="apple-card p-6">
                <div className="h-24 w-24 rounded-full bg-black/10 mb-4 flex items-center justify-center">{member.name.split(" ")[0][0]}</div>
                <h4 className="font-semibold mb-1">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8f8fb]">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Credibility at a glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credibility.map((item) => (
              <div key={item.title} className="p-6 rounded-3xl bg-white shadow-sm flex gap-4">
                <item.icon className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Join our journey</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          If you want to co-create next-gen safety standards in logistics, NodeHub is already building the future.
        </p>
        <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-black/85">
          Talk to us
        </a>
      </section>

      <Footer />
    </div>
  );
}
