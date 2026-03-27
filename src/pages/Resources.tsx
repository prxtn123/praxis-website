import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText, BookOpen, Video, CircleDashed } from "lucide-react";

const resources = [
  {
    type: "Whitepaper",
    title: "Reducing warehouse incidents by 45% with machine vision",
    summary: "An evidence-based report on how NodeHub’s analytics workflow delivered a 32% incident cost reduction in 18 months.",
    link: "#",
  },
  {
    type: "Benchmark",
    title: "Safety Maturity Score for distribution centres",
    summary: "Learn the 6 KPIs required to move from reactive to predictive safety operations.",
    link: "#",
  },
  {
    type: "Case study",
    title: "Global cold-chain operator: 60% fewer near misses",
    summary: "Deployment story with action items and quantifiable ROI metrics at scale.",
    link: "#",
  },
  {
    type: "Video",
    title: "How near-miss intelligence saves time and cost",
    summary: "30-minute on-demand presentation with live dashboards and lifecycle insights.",
    link: "#",
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 bg-[#f8f8fb] text-center">
        <div className="max-w-[980px] mx-auto px-6">
          <p className="text-sm font-medium text-blue-500 mb-3">Resources</p>
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">Actionable safety content for executives and operations teams</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Downloadable research, product playbooks, and expert guidance from live NodeHub deployments.
          </p>
        </div>
      </section>

      <main className="max-w-[980px] mx-auto px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((item) => (
            <article key={item.title} className="rounded-3xl p-6 border border-black/10 transition hover:shadow-md">
              <div className="mb-3 text-sm font-semibold text-blue-500 uppercase tracking-wide flex items-center gap-2">
                {item.type === "Video" ? <Video className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                {item.type}
              </div>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{item.summary}</p>
              <a href={item.link} className="inline-flex items-center gap-2 text-blue-500 hover:underline">
                View resource <CircleDashed className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </main>

      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-3">Need tailored insights for your facility?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          We can build a close-range analysis plan specific to your operation, with potential savings and KPIs pre-scoped.
        </p>
        <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-black/80">
          Request a strategic assessment
        </a>
      </section>

      <Footer />
    </div>
  );
}
