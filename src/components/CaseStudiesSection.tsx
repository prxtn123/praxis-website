export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Warehouse safety monitoring",
      outcome: "Live deployment with measurable safety improvements",
      metrics: ["Near-miss detection and alerting", "Automated evidence capture", "Ongoing — results to be published"],
    },
    {
      title: "Logistics centre pilot",
      outcome: "Pilot programme delivering real-time compliance data",
      metrics: ["Edge-deployed, no cloud dependency", "Integrated with existing camera infrastructure", "Ongoing — results to be published"],
    },
  ];

  return (
    <section className="py-20 bg-[#f8f8fb]">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-500 uppercase tracking-widest">Case studies</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Where node is deployed</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <article key={caseStudy.title} className="apple-card p-6 hover:shadow-lg transition">
              {/* IMAGE: Site photograph — warehouse interior showing node deployment
                  context. Wide-angle, well-lit operational environment. 600x320 min. */}
              <div className="mb-4 h-40 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 text-xs uppercase tracking-widest">Site photograph</div>
              <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
              <p className="text-foreground/70 mb-4 font-medium">{caseStudy.outcome}</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {caseStudy.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
