const testimonials = [
  {
    name: "Ellie Roberts",
    role: "Safety Director, Prime Logistics",
    quote: "NodeHub’s real-time alerts have reduced near-miss incidents by 58% at our UK hub. The evidence package also lowered audit preparation time from 3 days to 3 hours.",
  },
  {
    name: "Marcos Silva",
    role: "Operations COO, ColdChain Express",
    quote: "The visibility into route deviations and PPE compliance is a game changer. We now run weekly risk reviews with actual event footage.",
  },
  {
    name: "Tina Keller",
    role: "HSE Lead, PanelTech Manufacturing",
    quote: "On-prem edge AI aligned with our privacy policy and gave us immediate ROI on safety leadership KPIs.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#f8f8fb]" id="testimonials">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-blue-500 uppercase tracking-widest">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Trust signals from forward-thinking leaders</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="apple-card p-6">
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">“{item.quote}”</p>
              <footer className="text-sm font-semibold">{item.name}</footer>
              <p className="text-xs text-muted-foreground">{item.role}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
