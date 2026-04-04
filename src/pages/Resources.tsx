import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText, CircleDashed } from "lucide-react";

const resources = [
  {
    type: "Product overview",
    title: "How node works",
    summary: "An overview of how edge-deployed safety monitoring works in practice, from camera to dashboard.",
    link: "/how-it-works",
  },
  {
    type: "Coming soon",
    title: "Deployment playbook",
    summary: "A practical guide for operations teams evaluating edge AI safety monitoring for their sites.",
    link: "#",
  },
  {
    type: "Coming soon",
    title: "Technical architecture overview",
    summary: "How node's edge-first architecture keeps video on-premise while delivering real-time intelligence.",
    link: "#",
  },
  {
    type: "Coming soon",
    title: "Safety monitoring ROI framework",
    summary: "A framework for estimating the impact of proactive safety monitoring on incident costs and compliance.",
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
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">Resources</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Product documentation, technical overviews, and guides for operations teams.
          </p>
        </div>
      </section>

      <main className="max-w-[980px] mx-auto px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((item) => (
            <article key={item.title} className="rounded-3xl p-6 border border-black/10 transition hover:shadow-md">
              <div className="mb-3 text-sm font-semibold text-blue-500 uppercase tracking-wide flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {item.type}
              </div>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{item.summary}</p>
              {item.link !== "#" ? (
                <a href={item.link} className="inline-flex items-center gap-2 text-blue-500 hover:underline">
                  View resource <CircleDashed className="h-4 w-4" />
                </a>
              ) : (
                <span className="text-sm text-muted-foreground italic">Coming soon</span>
              )}
            </article>
          ))}
        </div>
      </main>

      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-3">Want to learn more?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Get in touch to discuss how node could work for your operation.
        </p>
        <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-black/80">
          Contact us
        </a>
      </section>

      <Footer />
    </div>
  );
}
